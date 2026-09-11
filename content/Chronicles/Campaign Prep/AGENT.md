---
tags:
  - campaign
  - workflow
---

# Codex Workflow

## Startup Order

1. Always begin by reading [[Chronicles/Campaign Prep/AGENT]].
2. Then read [[Chronicles/Campaign Prep/Campaign Summary]].
3. Treat [[Chronicles/Campaign Prep/Campaign Summary]] as the primary compressed context.
4. Use [[index|Campaign Dashboard]], [[Chronicles/index|Chronicles]],
   [[Actors/index|Actors]], [[Atlas/index|Atlas]], and [[Lore/index|Lore]] as
   maps of content areas.
5. Read additional files only when required by the task.

## Working Rules

1. Preserve Obsidian markdown conventions, including wikilinks, headings, and frontmatter.
2. Prefer targeted edits over broad rewrites.
3. Reuse existing notes, folders, and conventions when reasonable.
4. Refactor only when it improves clarity, consistency, or future maintainability.
5. If existing notes conflict, reconcile them carefully and preserve useful material.
6. Preserve Quartz publishing compatibility and avoid unnecessary changes to site config, content organization, slugs, and published paths.
7. Campaign planning, GM prep, and operational notes may be published in the normal content tree; this vault and Quartz site are for the DM.
8. Actively align ideas with established themes and motifs.
9. When proposing new elements, briefly indicate which themes they reinforce.
10. Prefer expanding or sharpening existing themes before introducing new ones.
11. If a new theme seems necessary, propose it explicitly and justify how it is distinct from existing themes before adding it.

## Summary Maintenance

1. Update [[Chronicles/Campaign Prep/Campaign Summary]] whenever canon, world state, factions, NPC relationships, active arcs, or other future-relevant facts change.
2. Keep [[Chronicles/Campaign Prep/Campaign Summary]] concise and high-signal.
3. Do not duplicate full notes into the summary; link out to the source notes instead.
4. Add only enough navigation context to help future sessions find the next relevant file quickly.
5. Prefer updating MOCs when adding notes that should be discoverable by future
   agents.

## File Reading Strategy

1. Start with the summary and identify the minimum additional files needed.
2. Prefer reading index notes or the most canonical note for a topic before opening many leaf notes.
3. Avoid scanning the whole vault unless the task genuinely requires it.
4. When adding new notes, link them from an existing index or hub note if that improves discoverability.

## Current Structure

- Campaign dashboard:
  - `content/index.md`
- MOCs / indexes:
  - `content/Chronicles/index.md`
  - `content/Actors/index.md`
  - `content/Atlas/index.md`
  - `content/Lore/index.md`
- Campaign material lives in:
  - `content/Atlas/`
  - `content/Actors/`
  - `content/Lore/`
  - `content/Chronicles/`
- Campaign prep and operating notes live in:
  - `content/Chronicles/Campaign Prep/`
- Quartz config and publishing live in:
  - `quartz.config.ts`
  - `.github/workflows/deploy.yml`

## Publishing Guardrails

1. This vault is DM-facing; campaign prep notes may be exposed on the Quartz site.
2. Do not move or rename established notes casually; that can affect routes, backlinks, and existing links.
3. Be cautious with frontmatter, aliases, ids, and folder names in `content/`.
4. Preserve the current GitHub Pages workflow unless a task explicitly requires deployment changes.

## Write / Commit Preference

1. Do not write files immediately after each small interaction unless the user explicitly asks for implementation.
2. First gather the proposed set of file changes and summarize them when planning.
3. When the user asks to implement, make the changes directly when reasonable.
4. When possible, batch related file edits into a single commit.
5. Prefer fewer, grouped commits over many small commits unless explicitly requested otherwise.
6. Default to planning mode first and write mode second.
7. Do not create exploratory files without explicit approval.
