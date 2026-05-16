import fs from "node:fs"
import path from "node:path"

const root = process.cwd()
const sourceDir = path.join(root, "content", "Player Handouts", "Character Packets JP")
const outputDir = path.join(root, "content", "Player Handouts", "Generated")

const packets = [
  { file: "Alex Gaga.md", title: "Alex Gaga Player Packet JP" },
  { file: "Vincent Uminashi.md", title: "Vincent Uminashi Player Packet JP" },
  { file: "Ryunnu.md", title: "Ryunnu Player Packet JP" },
  { file: "Aizawa Marin.md", title: "Aizawa Marin Player Packet JP" },
]

function stripFrontmatter(markdown) {
  return markdown.replace(/^---\n[\s\S]*?\n---\n+/, "")
}

function outputName(file) {
  return file.replace(/\.md$/, " Player Packet JP.md")
}

const generatedAt = new Intl.DateTimeFormat("sv-SE", {
  timeZone: "Asia/Tokyo",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
}).format(new Date())

fs.mkdirSync(outputDir, { recursive: true })

for (const packet of packets) {
  const markdown = fs.readFileSync(path.join(sourceDir, packet.file), "utf8")
  const body = stripFrontmatter(markdown).trim()
  const outputPath = path.join(outputDir, outputName(packet.file))
  const output = `---
title: ${packet.title}
tags:
  - handout
  - player-facing
  - ja
  - generated
---

${body}

生成日: ${generatedAt}

この資料は \`content/Player Handouts/Character Packets JP/${packet.file}\` から生成されています。編集する時は、生成物ではなく元ページを更新してください。

プレイヤー向け資料なので、キャラクター本人が知らない秘密、未発見の設定、今後の展開は含めない方針です。
`

  fs.writeFileSync(outputPath, output, "utf8")
  console.log(`Wrote ${path.relative(root, outputPath)}`)
}
