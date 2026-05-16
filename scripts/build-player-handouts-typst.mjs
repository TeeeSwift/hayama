import fs from "node:fs"
import path from "node:path"
import { NodeCompiler } from "@myriaddreamin/typst-ts-node-compiler"

const root = process.cwd()
const sourceDir = path.join(root, "content", "Player Handouts", "Character Packets JP")
const outputDir = path.join(root, "content", "Player Handouts", "Generated", "PDF Sources")

const packets = [
  { file: "Alex Gaga.md", title: "Alex Gaga", output: "Alex Gaga Player Packet JP" },
  {
    file: "Vincent Uminashi.md",
    title: "Vincent Uminashi",
    output: "Vincent Uminashi Player Packet JP",
  },
  { file: "Ryunnu.md", title: "Ryunnu", output: "Ryunnu Player Packet JP" },
  {
    file: "Aizawa Marin.md",
    title: "Aizawa Marin",
    output: "Aizawa Marin Player Packet JP",
  },
]

function stripFrontmatter(markdown) {
  return markdown.replace(/^---\n[\s\S]*?\n---\n+/, "")
}

function typstEscape(text) {
  return text.replaceAll("\\", "\\\\").replaceAll("[", "\\[").replaceAll("]", "\\]")
}

function inlineMarkup(text) {
  return typstEscape(text)
    .replace(/\*\*([^*]+)\*\*/g, "*$1*")
    .replace(/`([^`]+)`/g, "`$1`")
}

function tableToTypst(rows) {
  if (rows.length === 0) return ""
  const colCount = Math.max(...rows.map((row) => row.length))
  const columns = Array.from({ length: colCount }, () => "1fr").join(", ")
  const cells = rows
    .flatMap((row, rowIndex) =>
      Array.from({ length: colCount }, (_, index) => {
        const content = inlineMarkup(row[index] ?? "")
        const prefix = rowIndex === 0 ? "strong" : ""
        return prefix ? `${prefix}([${content}])` : `[${content}]`
      }),
    )
    .join(",\n  ")

  return `#table(
  columns: (${columns}),
  inset: 5pt,
  stroke: 0.45pt + rgb("#D0D5DD"),
  fill: (x, y) => if y == 0 { rgb("#F2F4F7") } else { white },
  ${cells},
)`
}

function parseTable(lines, start) {
  const tableLines = []
  let i = start
  while (i < lines.length && lines[i].trim().startsWith("|")) {
    tableLines.push(lines[i].trim())
    i += 1
  }

  const rows = []
  for (const line of tableLines) {
    const cells = line
      .slice(1, -1)
      .split("|")
      .map((cell) => cell.trim())
    if (cells.every((cell) => /^:?-{3,}:?$/.test(cell))) continue
    rows.push(cells)
  }

  return { rows, next: i }
}

function markdownToTypst(markdown) {
  const lines = stripFrontmatter(markdown).trim().split("\n")
  const out = []

  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i].trimEnd()

    if (!line.trim()) {
      out.push("")
      continue
    }

    if (line.trim().startsWith("|")) {
      const { rows, next } = parseTable(lines, i)
      out.push(tableToTypst(rows))
      i = next - 1
      continue
    }

    const heading = line.match(/^(#{1,6})\s+(.*)$/)
    if (heading) {
      const level = heading[1].length
      out.push(`${"=".repeat(level)} ${inlineMarkup(heading[2])}`)
      continue
    }

    const numbered = line.match(/^\d+\.\s+(.*)$/)
    if (numbered) {
      out.push(`+ ${inlineMarkup(numbered[1])}`)
      continue
    }

    const bullet = line.match(/^-\s+(.*)$/)
    if (bullet) {
      out.push(`- ${inlineMarkup(bullet[1])}`)
      continue
    }

    out.push(inlineMarkup(line))
  }

  return out.join("\n")
}

function buildTypst(packet) {
  const markdown = fs.readFileSync(path.join(sourceDir, packet.file), "utf8")
  const body = markdownToTypst(markdown)

  return `// Generated from content/Player Handouts/Character Packets JP/${packet.file}
// Edit the Markdown source, then rerun scripts/build-player-handouts-typst.mjs.

#set document(title: "${packet.output}")
#set page(
  paper: "a4",
  binding: left,
  margin: (inside: 22mm, outside: 14mm, top: 16mm, bottom: 18mm),
  numbering: "1",
)
#set text(
  font: ("Noto Sans CJK JP", "Hiragino Sans", "Yu Gothic", "Arial"),
  size: 10.5pt,
  lang: "ja",
)
#set par(justify: false, leading: 0.62em)
#set heading(numbering: none)
#show heading.where(level: 1): it => block(above: 0pt, below: 10pt, text(size: 20pt, weight: "bold", it.body))
#show heading.where(level: 2): it => block(above: 14pt, below: 6pt, text(size: 14pt, weight: "bold", it.body))
#show heading.where(level: 3): it => block(above: 10pt, below: 4pt, text(size: 11.5pt, weight: "bold", it.body))
#show table: set text(size: 9pt)

${body}
`
}

fs.mkdirSync(outputDir, { recursive: true })

for (const packet of packets) {
  const typPath = path.join(outputDir, `${packet.output}.typ`)
  fs.writeFileSync(typPath, buildTypst(packet), "utf8")
  console.log(`Wrote ${path.relative(root, typPath)}`)
}

try {
  const compiler = NodeCompiler.create({ workspace: outputDir })

  for (const packet of packets) {
    const typPath = path.join(outputDir, `${packet.output}.typ`)
    const pdfPath = path.join(outputDir, `${packet.output}.pdf`)
    const result = compiler.compile({ mainFilePath: typPath })
    if (result.hasError()) {
      result.printErrors()
      process.exit(1)
    }
    result.printDiagnostics()
    const pdf = compiler.pdf(result.result)
    fs.writeFileSync(pdfPath, pdf)
    console.log(`Wrote ${path.relative(root, pdfPath)}`)
  }
} catch (error) {
  console.error(error)
  process.exit(1)
}
