import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const Infobox: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const fm = fileData.frontmatter
  if (!fm) return null
  console.log(fm)

  // List of keys we want to HIDE from the box (because they are shown elsewhere)
  const ignore = new Set([
    // "title", "tags", "date", "description", "aliases", 
    "draft"
  ])

  // Get all keys from frontmatter, filter out ignored ones, and map to a row
  const rows = Object.entries(fm)
    .filter(([key]) => !ignore.has(key.toLowerCase()))
    .map(([key, value]) => {
      // Ensure value is renderable (strings, numbers, etc.)
      const displayValue = Array.isArray(value) ? value.join(", ") : String(value)

      return (
        <tr key={key}>
          <th>{key.charAt(0).toUpperCase() + key.slice(1)}</th>
          <td>{displayValue}</td>
        </tr>
      )
    })

  if (rows.length === 0) return null

  return (
    <aside class={`infobox ${displayClass ?? ""}`}>
      <h3>Metadata</h3>
      <table>
        <tbody>{rows}</tbody>
      </table>
    </aside>
  )
}

Infobox.css = `
.infobox {
  float: right;
  width: 300px;
  margin: 0 0 1rem 1rem;
  padding: 1rem;
  border: 1px solid var(--gray);
  background-color: var(--lightgray);
  border-radius: 5px;
  font-size: 0.85rem;
  z-index: 10;
}
.infobox h3 {
  margin-top: 0;
  font-size: 1rem;
  text-align: center;
  border-bottom: 1px solid var(--gray);
  padding-bottom: 0.5rem;
}
.infobox table {
  width: 100%;
  border-collapse: collapse;
}
.infobox th {
  text-align: left;
  padding: 6px 4px;
  color: var(--secondary);
  width: 40%;
  vertical-align: top;
}
.infobox td {
  padding: 6px 4px;
  word-break: break-word;
}
@media (max-width: 600px) {
  .infobox {
    float: none;
    width: 100%;
    margin: 1rem 0;
  }
}
`

export default (() => Infobox) satisfies QuartzComponentConstructor
