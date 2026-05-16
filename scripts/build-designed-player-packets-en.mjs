import fs from "node:fs"
import path from "node:path"
import { NodeCompiler } from "@myriaddreamin/typst-ts-node-compiler"

const root = process.cwd()
const outputDir = path.join(root, "content", "Player Handouts", "Generated", "PDF Sources")

const packets = [
  {
    name: "Alex Gaga",
    fileBase: "Alex Gaga Player Packet EN Designed",
    subtitle: "Bard / Hermit / Geology and environmental consultant",
    role: "Support and Control",
    roleText: "Push allies toward success and disrupt enemy momentum.",
    stats: [
      ["Max HP", "10"],
      ["PB", "+2"],
      ["Spell DC", "13"],
      ["Spell Atk", "+5"],
      ["Slots", "1st x2"],
      ["Conc. Save", "+0"],
    ],
    modifiers: ["+0", "+1", "+0", "-1", "+0", "+3"],
    saves: ["+0", "+3", "+0", "-1", "+0", "+5"],
    proficientSaves: ["DEX", "CHA"],
    numbers: [
      "Spell attack: d20 + 5. That is proficiency bonus +2 plus Charisma modifier +3.",
      "Spell save DC: 13. That is 8 + proficiency bonus +2 + Charisma modifier +3.",
      "Concentration saves are usually Constitution saves, so Alex rolls +0. The DC is 10 or half the damage taken, whichever is higher.",
    ],
    classHeading: "How To Play A Bard",
    classIntro:
      "Alex is a bard who helps important moments succeed, weakens enemy actions, and changes situations through voice, performance, and illusion. You do not need to do everything every turn. Pick the one action that changes the flow right now.",
    classSections: [
      {
        title: "Bardic Inspiration",
        body: [
          "As a bonus action, give an ally a d6 inspiration die. They can add it to an important d20 test later, possibly turning failure into success.",
          "Good moments: dangerous saves, key attacks, persuasion, investigation, stealth, escapes, or any roll that would change the scene.",
        ],
      },
      {
        title: "Bard Spells",
        body: [
          "Cantrips can be cast any number of times. 1st-level spells spend spell slots. Alex's spellcasting ability is Charisma.",
          "You can concentrate on only one concentration spell at a time. Alex's current concentration spells are Bane and Sleep.",
        ],
      },
    ],
    combat: [
      "If an ally is about to make an important roll, use Bardic Inspiration.",
      "If several enemies need to be weakened, cast Bane.",
      "If an ally is in danger or down, use Healing Word.",
      "If you want to save spell slots, use Minor Illusion or a normal action to shape the scene.",
    ],
    chosenHeading: "Alex's Chosen Spells",
    chosenSpells: [
      [
        "Message",
        "CANTRIP",
        "Action. Send a whispered magical message to one creature in range, and they can whisper a reply.",
        "May be blocked by some barriers. Excellent for stealth, split-party coordination, and signals.",
        "teal",
      ],
      [
        "Minor Illusion",
        "CANTRIP",
        "Action. Create a small sound or a small illusory object. It does not attack or deal damage.",
        "Use it to distract, fake a noise, create simple cover, or pull attention. Touch can reveal it.",
        "teal",
      ],
      [
        "Bane",
        "1ST / CONC.",
        "Action. Up to three creatures make Charisma saves. On a failure, subtract 1d4 from their attack rolls and saves.",
        "Concentration. Strong when several enemies are dangerous. Cannot be maintained with Sleep.",
        "coral",
      ],
      [
        "Dissonant Whispers",
        "1ST",
        "Action. One creature makes a Wisdom save. On a failure, it takes psychic damage and moves away if it can.",
        "Use it to break enemy positioning. A successful save usually halves the damage.",
        "coral",
      ],
      [
        "Healing Word",
        "1ST / BA",
        "Bonus action. Heal one creature in range for 2d4 + your Charisma modifier.",
        "Great for getting a distant downed ally back up. Ask the DM about same-turn spell limits.",
        "gold",
      ],
      [
        "Sleep",
        "1ST / CONC.",
        "Action. Creatures in the area make Wisdom saves. A failed save puts them to sleep or incapacitates them.",
        "Best against weak or weakened enemies. Concentration. Damage or being shaken awake can end it.",
        "coral",
      ],
    ],
    context: {
      surface:
        "Alex has worked as a geology and environmental consultant, evaluating construction safety, disaster risk, development plans, and environmental hazards. She values structure, evidence, and careful investigation, but she is now trying to express things that scientific language cannot quite reach through song and performance.\n\nShe lives in an apartment above a restaurant that hosts local music performances and art events. From downstairs come music, conversation, cooking smells, and the low noise of the town gathering together. Her artistic career is not yet stable, and she feels the daily difficulty of turning art into a life.",
      recent:
        'The owner of the restaurant and building, the "Mollusk lady," is a slow-spoken, dreamy, unassuming old woman. She has always been patient and supportive of Alex\'s art. At one point she gave Alex a bracelet with a cute pearl ornament. Her words stayed with Alex: "It is the artist\'s responsibility to help people realize that there is no them in us versus them."\n\nProfessionally, Alex has worked alongside Vincent several times. She consulted on municipal, public, private, renovation, and new construction projects while Vincent observed and coordinated from higher up the chain of command. They are not close, but they recognize each other, know each other\'s work, and can speak cordially.',
      npcs: [
        [
          "Mollusk lady",
          "Owner of the restaurant and building. Slow, dreamy, unassuming, and warmly supportive of Alex's art. She gave Alex the pearl bracelet.",
        ],
        [
          "Vincent",
          "A professional contact from several local projects. He is higher in the chain of command, so they do not interact heavily, but the relationship is cordial.",
        ],
        [
          "Old research friend",
          "A friend from college and Alex's research career. Still deeply invested in science and unconvinced by Alex's artistic shift.",
        ],
      ],
      places: [
        "The local restaurant that hosts music and art events",
        "Alex's apartment above the restaurant",
        "Municipal and private construction or renovation sites",
        "The unstable day-to-day reality of trying to build an art career",
      ],
      roleplay: [
        "She is pulled between scientific rigor and artistic intuition.",
        "She feels how hard it is to make art into work, but does not want to give up expression.",
        "When her old friend asks about new research or the next geology conference, Alex has to ask where she is really going.",
        "The pearl bracelet reminds her of kindness, responsibility, and art that crosses boundaries.",
      ],
      questions: [
        "Does this spell require concentration?",
        "Is this an action or a bonus action?",
        "Can I use performance, voice, or illusion to change this situation?",
        "Does the target make a save, or do I make an attack roll?",
      ],
    },
    appendix: [
      {
        title: "Cantrips",
        note: "Alex chose Message and Minor Illusion. Cantrips can be used any number of times. Marks: C = concentration.",
        rows: bardCantripRows(),
      },
      {
        title: "1st-Level Spells",
        note: "Alex prepared Bane, Dissonant Whispers, Healing Word, and Sleep. 1st-level spells spend slots. Marks: C = concentration, R = ritual, M = material component, BA = bonus action.",
        rows: bardLevel1Rows(),
      },
    ],
  },
  {
    name: "Vincent Uminashi",
    fileBase: "Vincent Uminashi Player Packet EN Designed",
    subtitle: "Ranger / Folk Hero / Property and development coordinator",
    role: "Scouting and Focus Fire",
    roleText: "Find danger early and keep pressure on the key target.",
    stats: [
      ["Max HP", "11"],
      ["PB", "+2"],
      ["Spell DC", "12"],
      ["Spell Atk", "+4"],
      ["Slots", "1st x2"],
      ["Conc. Save", "+1"],
    ],
    modifiers: ["+0", "+3", "+1", "+1", "+2", "+1"],
    saves: ["+2", "+5", "+1", "+1", "+2", "+1"],
    proficientSaves: ["STR", "DEX"],
    numbers: [
      "Spell attack: d20 + 4. That is proficiency bonus +2 plus Wisdom modifier +2.",
      "Spell save DC: 12. That is 8 + proficiency bonus +2 + Wisdom modifier +2.",
      "Concentration saves are usually Constitution saves, so Vincent rolls +1.",
    ],
    classHeading: "How To Play A Ranger",
    classIntro:
      "Vincent is a ranger who notices danger early, tracks the most important target, and blends weapons, movement, and practical nature magic. His strengths are observation and positioning before the fight fully starts.",
    classSections: [
      {
        title: "Favored Enemy / Hunter's Mark",
        body: [
          "Hunter's Mark is always prepared. If you expect to attack the same enemy multiple times, it is one of your strongest choices.",
          "It requires concentration, so if you cast another concentration spell you must choose which one to keep.",
        ],
      },
      {
        title: "Weapon Mastery",
        body: [
          "Vincent has mastery with the shortsword and handaxe. When you hit, check the weapon's mastery effect and ask the DM if it applies.",
        ],
      },
    ],
    combat: [
      "Pick the most dangerous enemy.",
      "If you can attack that enemy repeatedly, use Hunter's Mark.",
      "Attack with your weapon and reposition.",
      "Watch terrain, exits, and enemy movement, then tell the group what you see.",
    ],
    chosenHeading: "Vincent's Available Spells",
    chosenSpells: [
      [
        "Hunter's Mark",
        "ALWAYS / CONC.",
        "Bonus action. Mark one creature. Each time you hit it with an attack, deal an extra 1d6 force damage.",
        "Concentration. Best against a target you will keep attacking. Also useful for tracking.",
        "coral",
      ],
      [
        "Animal Friendship",
        "1ST",
        "Action. One Beast makes a Wisdom save. On a failure, it is Charmed by you.",
        "Use it to calm or negotiate with animals. Harm from you or allies can break trust fast.",
        "teal",
      ],
      [
        "Longstrider",
        "1ST",
        "Action. Increase one ally's speed by 10 ft. It lasts a while and does not require concentration.",
        "Good before a chase, escape, exploration scene, or fight where distance matters.",
        "gold",
      ],
    ],
    context: {
      surface:
        "Vincent is a local figure connected to an old Hayama family. Through family assets and relationships, he deals with land, buildings, repairs, development, contractors, and coordination.\n\nThe town is not just a backdrop for him. It is where he has lived. He has a local sense for who lives where, which houses are old, which roads people avoid, and what details feel out of place.",
      recent:
        "Through family and work, Vincent has contact with coastal development and construction. The town's problems are starting to look less like isolated incidents and more like connected pressure points.\n\nAs a local, he may notice small wrongness that an outsider would miss.",
      npcs: [
        ["Father", "A businessman with modern influence and money."],
        ["Mother", "Connected to an old Hayama family line and local relationships."],
        [
          "House servant",
          "A calm person who has served the family for a long time. There is an old rumor, but the truth is unclear.",
        ],
        [
          "Town contacts",
          "People he meets through property, repairs, and development coordination.",
        ],
      ],
      places: [
        "Family-managed properties",
        "Coastal development and construction",
        "Old local connections",
        "Small town changes other people overlook",
      ],
      roleplay: [
        "He views change from a stable local perspective.",
        "He moves between family position and personal judgment.",
        "Sometimes local instinct matters more than an outsider's explanation.",
      ],
      questions: [
        "Would I know this place as a local?",
        "Can I tell anything from tracks or movement patterns?",
        "Can I do this while keeping Hunter's Mark up?",
        "Can this weapon mastery apply here?",
      ],
    },
    appendix: [
      {
        title: "Ranger Cantrips",
        note: "A level 1 ranger normally has no cantrips. Later choices may grant druid cantrips.",
        rows: [
          ["Level 1 ranger", "none", "At level 1, weapons and 1st-level spells are the core."],
          ["Level 2 Druidic Warrior", "option", "If chosen later, review druid cantrip options."],
        ],
      },
      {
        title: "1st-Level Spells",
        note: "Hunter's Mark is always prepared. Vincent prepared Animal Friendship and Longstrider. Marks: C = concentration, R = ritual.",
        rows: rangerLevel1Rows(),
      },
    ],
  },
  {
    name: "Aizawa Marin",
    fileBase: "Aizawa Marin Player Packet EN Designed",
    subtitle: "Druid / Acolyte / High school diver",
    role: "Nature Sense and Support",
    roleText: "Read changes in nature and the body, shape the field, and heal when needed.",
    stats: [
      ["Max HP", "9"],
      ["PB", "+2"],
      ["Spell DC", "13"],
      ["Spell Atk", "+5"],
      ["Slots", "1st x2"],
      ["Conc. Save", "+1"],
    ],
    modifiers: ["-1", "+0", "+1", "+0", "+3", "+0"],
    saves: ["-1", "+0", "+1", "+2", "+5", "+0"],
    proficientSaves: ["INT", "WIS"],
    numbers: [
      "Spell attack: d20 + 5. That is proficiency bonus +2 plus Wisdom modifier +3.",
      "Spell save DC: 13. That is 8 + proficiency bonus +2 + Wisdom modifier +3.",
      "Concentration saves are usually Constitution saves, so Marin rolls +1.",
    ],
    classHeading: "How To Play A Druid",
    classIntro:
      "Marin is a druid who reads changes in nature, bodies, weather, animals, and places. In combat she does not only deal damage. She changes terrain and conditions so allies can act.",
    classSections: [
      {
        title: "Druidic",
        body: [
          "You have the secret language of druids and a strong bond to the natural world. Under the 2024 rules, Speak with Animals is always prepared through Druidic.",
        ],
      },
      {
        title: "Prepared Spells",
        body: [
          "After a long rest, druids can change prepared spells of 1st level or higher. You can adjust for the next day's plan or investigation.",
        ],
      },
    ],
    combat: [
      "Decide whether it is better to stop enemies or help allies.",
      "If you must fight up close, use Shillelagh.",
      "If an ally is down or close to danger, consider Healing Word or Cure Wounds.",
      "If the scene involves nature, the sea, animals, or weather, ask what your druid senses notice.",
    ],
    chosenHeading: "Marin's Spells and Preparation Options",
    chosenSpells: [
      [
        "Druidcraft",
        "CANTRIP",
        "Action. Create a small natural sign or sensory effect. You can predict nearby weather or make a flower bloom.",
        "No damage. Useful for checking weather, plants, fire, sea signs, and subtle natural changes.",
        "teal",
      ],
      [
        "Shillelagh",
        "CANTRIP",
        "Bonus action. Enchant a club or quarterstaff so you can attack with Wisdom.",
        "Melee option. Lets Marin use her +3 Wisdom and usually improves the weapon's damage die.",
        "gold",
      ],
      [
        "Speak with Animals",
        "ALWAYS / R",
        "Speak with Beasts. Under the 2024 rules, Druidic keeps this always prepared.",
        "Animals answer from animal priorities: smell, sound, danger, food, territory, and instinct.",
        "teal",
      ],
      [
        "Healing Word",
        "OPTION / BA",
        "Bonus action. Heal one creature in range for 2d4 + your Wisdom modifier.",
        "Good for getting a downed ally up from a distance. Confirm whether it is prepared today.",
        "gold",
      ],
      [
        "Entangle",
        "OPTION / CONC.",
        "Action. Grasping plants or force fill an area. Creatures make Strength saves or become Restrained.",
        "Stops enemies and helps allies hit them. Requires concentration.",
        "coral",
      ],
      [
        "Goodberry",
        "OPTION",
        "Action. Create magical berries. Each restores 1 HP and provides a day's nourishment.",
        "Better for post-fight recovery and survival than emergency combat healing.",
        "gold",
      ],
    ],
    context: {
      surface:
        "Marin is a local high school student who helps with her father's diving instruction on weekends. Her relationship with the sea is not just light admiration. It is discipline, caution, and respect.\n\nFor her, the sea is not a playground first. It is something to face properly.",
      recent:
        "During a dive, the sea suddenly felt different. Pressure, sound, buoyancy, and the feeling of her own body were wrong.\n\nIt did not feel exactly like the sea dragged her down. It felt more like the sea accepted her too completely. After her father pulled her back, land felt strangely heavy.",
      npcs: [
        ["Father", "A diving instructor and the person who taught Marin how to approach the sea."],
        [
          "Friend teaching at Zushi Beach",
          "Relates to the sea in a lighter, freer, more stylish way. Marin feels a little jealous of that freedom.",
        ],
        [
          "The sea",
          "Something she respects. Recently, it feels like it is responding to her as more than nature.",
        ],
        [
          "Ryunnu",
          "A newcomer who joined the diving class and may have seen the strange events from another angle.",
        ],
      ],
      places: [
        "Her father's diving class",
        "The Hayama sea",
        "Zushi Beach",
        "The underwater place where sound and weight changed",
      ],
      roleplay: [
        "She views the sea through both respect and fear.",
        "She feels jealousy and unease toward people who relate to the sea freely.",
        "She is unsure whether she can trust her altered body-sense.",
      ],
      questions: [
        "Is this natural phenomenon normal?",
        "Can I speak with animals or sea life here?",
        "Does this spell require concentration?",
        "After a long rest, can I prepare this spell instead?",
      ],
    },
    appendix: [
      {
        title: "Druid Cantrips",
        note: "Marin chose Druidcraft and Shillelagh. Marks: C = concentration.",
        rows: druidCantripRows(),
      },
      {
        title: "1st-Level Spells",
        note: "Druids can change prepared spells after a long rest. Speak with Animals is always prepared through Druidic. Marks: C = concentration, R = ritual, M = material component, BA = bonus action.",
        rows: druidLevel1Rows(),
      },
    ],
  },
  {
    name: "Ryunnu",
    fileBase: "Ryunnu Player Packet EN Designed",
    subtitle: "Warlock / Noble / Electrical management systems sales",
    role: "Records and Pact Magic",
    roleText: "Catch record mismatches and spend scarce magic at the right moment.",
    stats: [
      ["Max HP", "8"],
      ["PB", "+2"],
      ["Spell DC", "11"],
      ["Spell Atk", "+3"],
      ["Slots", "1st x1"],
      ["Conc. Save", "+0"],
    ],
    modifiers: ["+0", "-2", "+0", "+1", "+0", "+1"],
    saves: ["+0", "-2", "+0", "+1", "+2", "+3"],
    proficientSaves: ["WIS", "CHA"],
    numbers: [
      "Spell attack: d20 + 3. That is proficiency bonus +2 plus Charisma modifier +1.",
      "Spell save DC: 11. That is 8 + proficiency bonus +2 + Charisma modifier +1.",
      "Concentration saves are usually Constitution saves, so Ryunnu rolls +0.",
      "Proficient skills: Arcana +3, History +3, Persuasion +3, Stealth +0.",
      "Devil's Sight requires Warlock level 2+ in the 2024 rules, so it needs to be replaced at level 1.",
    ],
    classHeading: "How To Play A Warlock",
    classIntro:
      "Ryunnu is a warlock who notices mismatches in systems. Where other people feel rumors, moods, or strange pressure, he can look for records, times, power, synchronization, authentication, and machine behavior. In combat, Eldritch Blast is the default, and his single Pact Magic slot should be saved for important moments.",
    classSections: [
      {
        title: "Look At The System",
        body: [
          "Pay attention to electricity, equipment, records, apps, POS systems, security cameras, and timestamps. If human memory and machine records disagree, that can be a major clue.",
        ],
      },
      {
        title: "Pact Magic",
        body: [
          "At level 1, a warlock has one 1st-level spell slot. Pact Magic slots return after a short rest or long rest.",
          "Charm Person and Hellish Rebuke are both legal 1st-level warlock spell choices.",
        ],
      },
      {
        title: "Eldritch Invocation",
        body: [
          "Devil's Sight fits the darkness theme, but in the 2024 rules it requires Warlock level 2+. At level 1, choose a legal invocation such as Armor of Shadows, Eldritch Mind, Pact of the Blade, Pact of the Chain, or Pact of the Tome.",
        ],
      },
    ],
    combat: [
      "Use Eldritch Blast from a safe distance as the default attack.",
      "If someone damages you, consider Hellish Rebuke as a reaction.",
      "If conversation or investigation can change the scene, consider Charm Person.",
      "Ask whether logs or timestamps contradict what people remember.",
    ],
    chosenHeading: "Ryunnu's Chosen Spells And Invocation",
    chosenSpells: [
      [
        "Eldritch Blast",
        "CANTRIP",
        "Action. Ranged spell attack. On a hit, deal 1d10 force damage.",
        "Ryunnu's default attack. His spell attack bonus is +3.",
        "teal",
      ],
      [
        "Mage Hand",
        "CANTRIP",
        "Action. Create a spectral hand that can manipulate light objects, doors, levers, containers, or traps from range.",
        "Strong for investigation and risky objects. No damage, but very useful with clever play.",
        "teal",
      ],
      [
        "Hellish Rebuke",
        "1ST / REACTION",
        "Reaction. A creature that damaged you makes a Dexterity save. Failure takes 2d10 fire; success takes half.",
        "Spends your slot. Because it triggers when you are damaged, watch for the timing.",
        "coral",
      ],
      [
        "Charm Person",
        "1ST",
        "Action. One Humanoid makes a Wisdom save. On a failure, it is Charmed by you.",
        "Useful in conversation or negotiation. When it ends, the target may know you magically influenced it.",
        "gold",
      ],
      [
        "Devil's Sight",
        "REPLACE",
        "A darkness-seeing invocation, but in the 2024 rules it requires Warlock level 2+.",
        "Not legal at level 1. Choose one of the level 1 invocation options in the appendix.",
        "coral",
      ],
    ],
    context: {
      surface:
        "Ryunnu came to Hayama recently. He works in sales with a technical edge around electrical management, monitoring, and infrastructure systems.\n\nHe is an outsider to the town's old stories. Because of that, he may notice things locals dismiss as normal and honestly treat them as strange.",
      recent:
        "People in town often ask him for electrical work or equipment repair. He often has to clarify that he is not actually the installer.\n\nAround cafes and equipment, he has seen behavior that does not look like normal malfunction. Machines may keep recording people or events that human witnesses fail to notice.",
      npcs: [
        [
          "Town residents",
          "They treat him like a convenient equipment person, which is awkward for him.",
        ],
        [
          "Nagisabashi Coffee area",
          "May connect to anomalies in electricity, refrigeration, POS, time, or records.",
        ],
        [
          "A strange Mayor-related pressure",
          "Sometimes he feels pressure or presence that does not seem to belong to him. The meaning is still unclear.",
        ],
        [
          "The other PCs",
          "They notice different kinds of wrongness. Comparing information may change the picture.",
        ],
      ],
      places: [
        "Nagisabashi Coffee",
        "Electrical panels and log-retaining equipment",
        "Devices with mismatched timestamps or records",
        "Everyday electrical systems the town casually asks him about",
      ],
      roleplay: [
        "People treat him like an expert installer, but he is not the installer.",
        "He tries to organize weirdness in technical language.",
        "He gets pulled into records and authentication that should not involve him.",
      ],
      questions: [
        "What do the machine logs or timestamps show?",
        "Does human memory disagree with the records?",
        "Does this look like an ordinary malfunction?",
        "Can I roll Intelligence, Investigation, or work knowledge for this?",
      ],
    },
    appendix: [
      {
        title: "Warlock Cantrips",
        note: "Ryunnu chose Eldritch Blast and Mage Hand. Cantrips can be cast any number of times. Marks: C = concentration.",
        rows: warlockCantripRows(),
      },
      {
        title: "1st-Level Spells",
        note: "Ryunnu chose Hellish Rebuke and Charm Person. A level 1 warlock has one Pact Magic slot. Marks: C = concentration, R = ritual, M = material component.",
        rows: warlockLevel1Rows(),
      },
      {
        title: "Level 1 Invocations",
        note: "Representative invocations available from level 1 in the 2024 Basic Rules. Devil's Sight requires Warlock level 2+, so it is not included here.",
        rows: warlockInvocationRows(),
      },
      {
        title: "Fathomless Expansion Options",
        note: "If using the Fathomless patron, confirm these 1st-level expanded spells against the sheet's rules version.",
        rows: [
          [
            "Create or Destroy Water",
            "",
            "Action. Create or destroy water. Useful for fires, containers, traces, and water problems.",
          ],
          [
            "Thunderwave",
            "",
            "Action. Close-range area. Constitution save; failure takes 2d8 thunder and is pushed. Very loud.",
          ],
        ],
      },
    ],
  },
]

function typ(value) {
  return String(value).replaceAll("\\", "\\\\").replaceAll("[", "\\[").replaceAll("]", "\\]")
}

function content(value) {
  return `[${typ(value)}]`
}

function list(items) {
  return items.map((item) => `- ${typ(item)}`).join("\n")
}

function enumList(items) {
  return items.map((item) => `+ ${typ(item)}`).join("\n")
}

function paragraphs(text) {
  return typ(text).split("\n\n").join("\n\n")
}

function accent(name) {
  return name === "coral" ? "coral" : name === "gold" ? "gold" : "teal"
}

function statGrid(stats) {
  return `#grid(
  columns: (1fr, 1fr, 1fr, 1fr, 1fr, 1fr),
  gutter: 8pt,
${stats.map(([name, value]) => `  key(${content(name)}, ${content(value)}),`).join("\n")}
)`
}

function abilityTable(packet) {
  const headers = ["STR", "DEX", "CON", "INT", "WIS", "CHA"]
  const cells = [
    ...headers.map((h) => `  text(weight: "bold", fill: teal-dark)${content(h)},`),
    "  [Modifier],",
    ...packet.modifiers.map((v) => `  ${content(v)},`),
    "  [Save],",
    ...packet.saves.map((v, i) => {
      const prof = packet.proficientSaves.includes(headers[i])
      return prof ? `  text(weight: "bold", fill: teal-dark)${content(v)},` : `  ${content(v)},`
    }),
  ].join("\n")
  return `#table(
  columns: (27mm, 1fr, 1fr, 1fr, 1fr, 1fr, 1fr),
  inset: (x: 4.5pt, y: 3.6pt),
  stroke: 0.45pt + rule,
  fill: (x, y) => if y == 0 { sea } else { white },
  text(weight: "bold", fill: teal-dark)[Ability],
${cells}
)`
}

function classSections(packet) {
  return packet.classSections
    .map(
      (section) => `=== ${typ(section.title)}

${section.body.map(paragraphs).join("\n\n")}`,
    )
    .join("\n\n")
}

function spellCards(packet) {
  return `#grid(
  columns: (1fr, 1fr),
  gutter: 7pt,
${packet.chosenSpells
  .map(
    ([name, kind, use, note, color]) =>
      `  spell-card(${content(name)}, ${content(kind)}, ${content(use)}, ${content(note)}, accent: ${accent(color)}),`,
  )
  .join("\n")}
)`
}

function npcTable(rows) {
  return `#table(
  columns: (38mm, 1fr),
  inset: (x: 5pt, y: 5pt),
  stroke: 0.45pt + rule,
  fill: (x, y) => if y == 0 { sea } else { white },
  text(weight: "bold", fill: teal-dark)[Person],
  text(weight: "bold", fill: teal-dark)[Reminder],
${rows.flatMap(([a, b]) => [`  ${content(a)},`, `  ${content(b)},`]).join("\n")}
)`
}

function spellRows(rows) {
  return rows
    .map(
      ([name, mark, use, picked = false]) =>
        `  ..spell-row(${content(name)}, ${content(mark)}, ${content(use)}, picked: ${picked ? "true" : "false"}),`,
    )
    .join("\n")
}

function appendix(packet) {
  return packet.appendix
    .map(
      (section) => `=== ${typ(section.title)}

#aside(${content(section.note)})

#compact-spell-table((
${spellRows(section.rows)}
))`,
    )
    .join("\n\n")
}

function buildTypst(packet) {
  return `// Designed English player packet for ${packet.name}.
// Generated by scripts/build-designed-player-packets-en.mjs.

#let ink = rgb("#14232B")
#let muted = rgb("#5B6870")
#let teal = rgb("#0D6F74")
#let teal-dark = rgb("#074C52")
#let sea = rgb("#EAF5F5")
#let pearl = rgb("#FBFCFD")
#let rule = rgb("#C8D8DA")
#let coral = rgb("#C95D4B")
#let gold = rgb("#A57927")

#set document(title: "${typ(packet.fileBase)}")
#set page(
  paper: "a4",
  binding: left,
  margin: (inside: 20mm, outside: 15mm, top: 14mm, bottom: 17mm),
  numbering: "1",
)
#set text(font: "Arial", size: 9.45pt, fill: ink, lang: "en")
#set par(justify: false, leading: 0.58em)
#set list(indent: 10pt, body-indent: 7pt, spacing: 2.2pt)
#set enum(indent: 12pt, body-indent: 8pt, spacing: 3pt)
#set heading(numbering: none)

#show heading.where(level: 1): it => block(above: 0pt, below: 7pt)[#text(size: 24pt, weight: "bold", fill: ink, it.body)]
#show heading.where(level: 2): it => block(above: 15pt, below: 6pt)[#text(size: 13.2pt, weight: "bold", fill: teal-dark, it.body)#line(length: 100%, stroke: 0.75pt + rule)]
#show heading.where(level: 3): it => block(above: 10pt, below: 4pt)[#text(size: 10.5pt, weight: "bold", fill: ink, it.body)]

#let label(body) = text(size: 6.8pt, weight: "bold", fill: teal, tracking: 0.35pt, body)
#let aside(body) = text(size: 8.35pt, fill: muted, body)
#let tag(body, fill-color: teal) = rect(radius: 99pt, inset: (x: 5pt, y: 2pt), fill: fill-color)[#text(size: 6.6pt, weight: "bold", fill: white, body)]
#let key(name, value) = block[#label(name) \\ #text(size: 13.4pt, weight: "bold", fill: ink, value)]
#let note-box(title, body, fill-color: pearl, stroke-color: rule) = rect(width: 100%, radius: 4pt, inset: 8pt, fill: fill-color, stroke: 0.65pt + stroke-color)[#text(size: 9.1pt, weight: "bold", fill: teal-dark, title)#v(3pt)#body]
#let rule-item(title, body) = block[#text(size: 9.7pt, weight: "bold", fill: teal-dark, title) \\ #body]
#let spell-card(name, kind, use, note, accent: teal) = rect(width: 100%, radius: 4pt, inset: 7pt, fill: pearl, stroke: 0.65pt + rule)[
  #grid(columns: (1fr, auto), gutter: 5pt, align: horizon)[#text(size: 10pt, weight: "bold", fill: ink, name)][#tag(kind, fill-color: accent)]
  #v(3pt)
  #text(size: 8.7pt, use)
  #v(2pt)
  #aside(note)
]
#let compact-spell-table(rows) = table(
  columns: (31mm, 18mm, 1fr),
  inset: (x: 4.5pt, y: 3.6pt),
  stroke: 0.45pt + rule,
  fill: (x, y) => if y == 0 { sea } else { white },
  text(weight: "bold", size: 8.2pt, fill: teal-dark)[Spell],
  text(weight: "bold", size: 8.2pt, fill: teal-dark)[Mark],
  text(weight: "bold", size: 8.2pt, fill: teal-dark)[Use],
  ..rows,
)
#let spell-row(name, mark, use, picked: false) = (
  text(size: 8pt, weight: if picked { "bold" } else { "regular" }, fill: if picked { teal-dark } else { ink }, name),
  text(size: 7.6pt, fill: if picked { coral } else { muted }, mark),
  text(size: 7.8pt, fill: ink, use),
)

#rect(width: 100%, radius: 6pt, fill: sea, stroke: 0.75pt + rule, inset: 12pt)[
  #grid(
    columns: (1fr, 45mm),
    gutter: 12pt,
    align: top,
    [
      #label([PLAYER PACKET / HAYAMA])
      #v(4pt)
      #text(size: 26pt, weight: "bold", fill: ink)[${typ(packet.name)}]
      #v(3pt)
      #text(size: 10.2pt, fill: muted)[${typ(packet.subtitle)}]
      #v(7pt)
      This packet helps you remember what you can do and which numbers to add during play. If a number differs from your character sheet, use the sheet.
    ],
    [
      #rect(width: 100%, radius: 5pt, fill: teal-dark, inset: 9pt)[
        #text(size: 7.8pt, fill: white)[TABLE ROLE] \\
        #text(size: 13.2pt, weight: "bold", fill: white)[${typ(packet.role)}] \\
        #v(3pt)
        #text(size: 8.1pt, fill: rgb("#DDEFEF"))[${typ(packet.roleText)}]
      ]
    ],
  )
]

#v(7pt)

== First: Who Am I?

=== Public Face

${paragraphs(packet.context.surface)}

=== Recent Events

${paragraphs(packet.context.recent)}

=== NPCs and Relationships

${npcTable(packet.context.npcs)}

=== Places and Clues

${list(packet.context.places)}

=== Roleplay Anchors

${list(packet.context.roleplay)}

#pagebreak()

== Next: What Can I Do?

${statGrid(packet.stats)}

#v(5pt)
${abilityTable(packet)}
#aside([${typ(packet.proficientSaves.length ? `${packet.proficientSaves.join(" and ")} saves are this class's saving throw proficiencies. ` : "Saving throw proficiencies should be added after checking the character sheet. ")}Ability modifiers are the base numbers for skills, attacks, saves, and many other rolls.])

== Combat Turn Basics

#grid(columns: (1fr, 1fr), gutter: 12pt)[
  #rule-item([Action], [Your main thing on your turn. Common actions include Attack, Cast a Spell, Dash, Disengage, Dodge, Help, Hide, Search, and Use an Object.])
  #v(6pt)
  #rule-item([Bonus Action], [You can use this only when a feature or spell says "Bonus Action." It is not a free extra action every turn. If you have several options, usually choose one.])
][
  #rule-item([Movement], [You can move up to your speed. Movement is separate from your action. You can split it up: move, act, then move again.])
  #v(6pt)
  #rule-item([Reaction], [A response to a trigger, often outside your turn. You usually get one reaction per round. Opportunity attacks and some spells or features use this.])
]

=== Common Actions

#table(
  columns: (31mm, 1fr),
  inset: (x: 5pt, y: 4pt),
  stroke: 0.45pt + rule,
  fill: (x, y) => if y == 0 { sea } else { white },
  text(weight: "bold", fill: teal-dark)[Action],
  text(weight: "bold", fill: teal-dark)[What It Does],
  [Dash],
  [Gain extra movement for this turn. Use it to close distance, flee, or reach cover.],
  [Disengage],
  [Your movement this turn does not provoke opportunity attacks. Use it to leave melee safely.],
  [Dodge],
  [Focus on defense until the start of your next turn. Attacks from enemies you can see are harder to hit, and Dexterity saves have advantage.],
  [Help],
  [Help an ally. If the situation fits, their next ability check or attack can have advantage.],
  [Hide],
  [Try to hide. The DM decides if hiding is possible; usually roll Dexterity (Stealth).],
  [Search],
  [Look carefully, investigate, or notice something. Usually uses Wisdom (Perception) or Intelligence (Investigation).],
  [Use an Object],
  [Use a door, lever, tool, potion, or important item. Magic items may have their own rules.],
)

== Roll Basics

#rule-item([Proficiency Bonus (PB)], [Proficiency means you are trained or practiced with something. At level 1, PB is usually +2. Add it only when you are proficient with the skill, save, weapon, tool, spell attack, or spell save DC involved. Do not add PB more than once to the same roll. When unsure, use checked or circled items on the sheet, or the already calculated attack and spell numbers.])

#grid(columns: (1fr, 1fr), gutter: 12pt)[
  #rule-item([Attack Roll], [To see if an attack hits, roll *d20 + attack bonus*. If the total is at least the target's AC, it hits. Weapon attacks usually add the ability modifier plus proficiency bonus if proficient.])
  #v(6pt)
  #rule-item([Spell Attack Roll], [If a spell says "spell attack," you roll *d20 + spell attack bonus*. If the total is at least the target's AC, it hits.])
][
  #rule-item([Saving Throw], [A defensive roll to avoid or endure danger. If the DM calls for a Dexterity save, for example, roll d20 and add the bonus from that save line.])
  #v(6pt)
  #rule-item([Spell Save DC], [If a spell says the target makes a save, the caster does not roll to hit. The target rolls and tries to meet or beat your *spell save DC*.])
]

#note-box([${typ(packet.name)}'s Numbers], [
${list(packet.numbers)}
])

== ${typ(packet.classHeading)}

${paragraphs(packet.classIntro)}

${classSections(packet)}

=== If You Are Unsure In Combat

${enumList(packet.combat)}

== ${typ(packet.chosenHeading)}

${spellCards(packet)}

== Questions You Can Ask During Play

${list(packet.context.questions)}

#pagebreak()

== Appendix: ${typ(packet.name)} Spell List

${appendix(packet)}
`
}

function bardCantripRows() {
  return [
    [
      "Blade Ward",
      "C",
      "Action. While concentrating, reduce attack rolls against you by 1d4. Defensive option.",
    ],
    [
      "Dancing Lights",
      "C",
      "Action. Create small lights or a humanoid light. Darkness, signals, decoys. Concentration.",
    ],
    [
      "Friends",
      "C",
      "Action. Helps a short social check, but the target may notice the magic afterward.",
    ],
    ["Light", "", "Action. Make a touched object glow. Torch substitute, marker, or thrown light."],
    [
      "Mage Hand",
      "",
      "Action. A spectral hand manipulates light objects, doors, levers, or traps from range.",
    ],
    ["Mending", "", "1 minute. Repair small breaks or tears in tools, clothes, or evidence."],
    [
      "Message",
      "chosen",
      "Action. Whisper to a distant target and receive a reply. Stealth and split-party coordination.",
      true,
    ],
    [
      "Minor Illusion",
      "chosen",
      "Action. Create a small sound or object illusion. Distraction, disguise, line-of-sight tricks.",
      true,
    ],
    [
      "Prestidigitation",
      "",
      "Action. Cleaning, flavor, warming/cooling, small marks, tiny sensory effects.",
    ],
    [
      "Starry Wisp",
      "attack",
      "Action. Ranged spell attack. On hit, 1d8 radiant and the target glows faintly.",
    ],
    [
      "Thunderclap",
      "area",
      "Action. Nearby creatures make Constitution saves; failure takes 1d6 thunder. Loud.",
    ],
    [
      "True Strike",
      "",
      "Action. Make a weapon attack using spellcasting ability; hit can deal radiant damage.",
    ],
    [
      "Vicious Mockery",
      "save",
      "Action. Wisdom save; failure takes 1d6 psychic and has disadvantage on its next attack.",
    ],
  ]
}

function bardLevel1Rows() {
  return [
    [
      "Animal Friendship",
      "",
      "Action. Beast makes a Wisdom save; failure is Charmed. Animal negotiation.",
    ],
    [
      "Bane",
      "chosen/C",
      "Action. Up to 3 creatures make Charisma saves; failure gives -1d4 to attacks and saves. Concentration.",
      true,
    ],
    [
      "Charm Person",
      "",
      "Action. Humanoid makes a Wisdom save; failure is Charmed. Beware the aftermath.",
    ],
    [
      "Color Spray",
      "",
      "Action. Close area. Failed targets are briefly Blinded, helping attacks miss.",
    ],
    [
      "Command",
      "",
      "Action. Wisdom save; one-word command on failure. Cannot directly command self-harm.",
    ],
    [
      "Comprehend Languages",
      "R",
      "Action/ritual. Understand literal spoken or written language, not codes or hidden meaning.",
    ],
    [
      "Cure Wounds",
      "",
      "Action. Touch an ally to heal 2d8 + Charisma modifier. Stronger, but close-range.",
    ],
    [
      "Detect Magic",
      "C/R",
      "Action/ritual. Sense magic nearby and, with concentration, learn its school. Some barriers block it.",
    ],
    [
      "Disguise Self",
      "",
      "Action. Change your appearance with illusion for 1 hour. Touch can reveal contradictions.",
    ],
    [
      "Dissonant Whispers",
      "chosen",
      "Action. One Wisdom save; failure takes 3d6 psychic and forced movement.",
      true,
    ],
    [
      "Faerie Fire",
      "C",
      "Action. Area Dexterity save; failed targets glow and attacks against them have advantage.",
    ],
    ["Feather Fall", "reaction", "Reaction. Slow several falling creatures so they land safely."],
    [
      "Healing Word",
      "chosen/BA",
      "Bonus action. Heal one creature in range for 2d4 + Charisma modifier. Great for downed allies.",
      true,
    ],
    [
      "Heroism",
      "C",
      "Action. One ally ignores fear and gains temporary HP each turn. Concentration.",
    ],
    [
      "Identify",
      "R/M",
      "1 minute/ritual. Learn a magic item's properties, use, and spell effects on a creature or object.",
    ],
    [
      "Illusory Script",
      "R/M",
      "1 minute/ritual. Hide writing with illusion; chosen readers see the true message.",
    ],
    [
      "Longstrider",
      "",
      "Action. For 1 hour, increase speed by 10 ft. No concentration. Before travel or pursuit.",
    ],
    [
      "Silent Image",
      "C",
      "Action. Moving visual illusion with no sound or touch. Investigation can reveal it.",
    ],
    [
      "Sleep",
      "chosen/C",
      "Action. Area Wisdom saves; failures fall asleep or become incapacitated. Concentration.",
      true,
    ],
    [
      "Speak with Animals",
      "R",
      "Action/ritual. Speak with Beasts and gather animal-view information.",
    ],
    [
      "Tasha's Hideous Laughter",
      "C",
      "Action. One Wisdom save; failure is Prone and Incapacitated. Concentration.",
    ],
    [
      "Thunderwave",
      "",
      "Action. Close area. Constitution save; failure takes 2d8 thunder and is pushed. Loud.",
    ],
    [
      "Unseen Servant",
      "R",
      "Action/ritual. Invisible force handles simple tasks: doors, traps, carrying, chores.",
    ],
  ]
}

function rangerLevel1Rows() {
  return [
    [
      "Alarm",
      "R",
      "1 minute/ritual. Ward a door, window, or camp and receive an audible or mental alert.",
    ],
    [
      "Animal Friendship",
      "chosen",
      "Action. Beast makes a Wisdom save; failure is Charmed. Animal negotiation.",
      true,
    ],
    [
      "Cure Wounds",
      "",
      "Action. Touch an ally to heal 2d8 + Wisdom modifier. Close-range healing.",
    ],
    [
      "Detect Magic",
      "C/R",
      "Action/ritual. Sense nearby magic and, with concentration, learn its school.",
    ],
    [
      "Detect Poison and Disease",
      "C/R",
      "Action/ritual. Detect poison, poisonous creatures, and disease. Food, water, bodies.",
    ],
    [
      "Ensnaring Strike",
      "C",
      "Bonus action. Next weapon hit forces a Strength save or Restrained plus ongoing 1d6.",
    ],
    [
      "Entangle",
      "C",
      "Action. Area Strength saves; failures are Restrained. Control and concentration.",
    ],
    [
      "Fog Cloud",
      "C",
      "Action. Heavy fog blocks sight. Escape, cover, breaking line of sight. Concentration.",
    ],
    [
      "Goodberry",
      "",
      "Action. Create 10 berries. Each heals 1 HP and nourishes for a day. Post-fight recovery.",
    ],
    ["Hail of Thorns", "", "Bonus action. Next ranged weapon hit bursts for 1d10 piercing nearby."],
    [
      "Hunter's Mark",
      "always/C",
      "Bonus action. Mark target; each attack hit deals +1d6 force. Helps tracking.",
      true,
    ],
    [
      "Jump",
      "",
      "Action. For 1 minute, improve a creature's jumping distance. Cliffs, roofs, obstacles.",
    ],
    [
      "Longstrider",
      "chosen",
      "Action. For 1 hour, speed +10 ft. No concentration. Chase or escape prep.",
      true,
    ],
    ["Speak with Animals", "R", "Action/ritual. Speak with Beasts. Witnesses, guides, warnings."],
  ]
}

function druidCantripRows() {
  return [
    [
      "Druidcraft",
      "chosen",
      "Action. Predict nearby weather, bloom a flower, snuff/light fire, small nature effects.",
      true,
    ],
    [
      "Elementalism",
      "",
      "Action. Move a small amount of air, earth, fire, or water. Practical and expressive.",
    ],
    [
      "Guidance",
      "C",
      "Action. Add 1d4 to an ally's ability check. Prepare before the roll. Concentration.",
    ],
    ["Mending", "", "1 minute. Repair small breaks or tears in tools, clothes, or evidence."],
    [
      "Message",
      "",
      "Action. Whisper to a distant target and receive a reply. Stealth and coordination.",
    ],
    [
      "Poison Spray",
      "save",
      "Action. Constitution save; failure takes 1d12 poison. Watch for resistance or immunity.",
    ],
    [
      "Produce Flame",
      "attack",
      "Action. Flame in hand for light; throw as ranged spell attack for 1d8 fire.",
    ],
    ["Resistance", "C", "Action. Add 1d4 to an ally's save. Pre-danger support. Concentration."],
    [
      "Shillelagh",
      "chosen",
      "Bonus action. Enchant club/staff, attack with Wisdom, usually 1d8 damage.",
      true,
    ],
    [
      "Spare the Dying",
      "",
      "Action. Stabilize a creature at 0 HP. Does not restore HP, but stops death saves.",
    ],
    [
      "Starry Wisp",
      "attack",
      "Action. Ranged spell attack. On hit, 1d8 radiant and the target glows faintly.",
    ],
    [
      "Thorn Whip",
      "attack",
      "Action. Ranged melee spell attack. 1d6 piercing and can pull the target.",
    ],
    [
      "Thunderclap",
      "area",
      "Action. Nearby creatures make Constitution saves; failure takes 1d6 thunder. Loud.",
    ],
  ]
}

function druidLevel1Rows() {
  return [
    [
      "Animal Friendship",
      "",
      "Action. Beast makes a Wisdom save; failure is Charmed. Animal negotiation.",
    ],
    [
      "Charm Person",
      "",
      "Action. Humanoid makes a Wisdom save; failure is Charmed. Beware the aftermath.",
    ],
    [
      "Create or Destroy Water",
      "",
      "Action. Create or remove water. Fires, containers, traces, water problems.",
    ],
    ["Cure Wounds", "", "Action. Touch an ally to heal 2d8 + Wisdom modifier."],
    [
      "Detect Magic",
      "C/R",
      "Action/ritual. Sense nearby magic and, with concentration, learn its school.",
    ],
    [
      "Detect Poison and Disease",
      "C/R",
      "Action/ritual. Detect poison, poisonous creatures, and disease. Food/water checks.",
    ],
    [
      "Entangle",
      "C",
      "Action. Area Strength saves; failures are Restrained. Control and concentration.",
    ],
    [
      "Faerie Fire",
      "C",
      "Action. Area Dexterity save; failed targets glow and attacks against them have advantage.",
    ],
    [
      "Fog Cloud",
      "C",
      "Action. Heavy fog blocks sight. Escape, cover, breaking line of sight. Concentration.",
    ],
    ["Goodberry", "", "Action. Create 10 berries. Each heals 1 HP and nourishes for a day."],
    [
      "Healing Word",
      "BA",
      "Bonus action. Heal one creature in range for 2d4 + Wisdom modifier. Downed allies.",
    ],
    [
      "Ice Knife",
      "attack",
      "Action. Ranged spell attack for 1d10 piercing; nearby Dexterity save or 2d6 cold.",
    ],
    [
      "Jump",
      "",
      "Action. For 1 minute, improve a creature's jumping distance. Cliffs, roofs, obstacles.",
    ],
    [
      "Longstrider",
      "",
      "Action. For 1 hour, speed +10 ft. No concentration. Chase or escape prep.",
    ],
    [
      "Protection from Evil and Good",
      "C/M",
      "Action. Protect against certain supernatural beings; strong vs attacks, charm, fear, possession.",
    ],
    [
      "Purify Food and Drink",
      "R",
      "Action/ritual. Remove poison and disease from nonmagical food and drink.",
    ],
    [
      "Speak with Animals",
      "always/R",
      "Action/ritual. Speak with Beasts and gather animal-view information.",
      true,
    ],
    [
      "Thunderwave",
      "",
      "Action. Close area. Constitution save; failure takes 2d8 thunder and is pushed. Loud.",
    ],
  ]
}

function warlockCantripRows() {
  return [
    [
      "Blade Ward",
      "C",
      "Action. While concentrating, reduce attack rolls against you by 1d4. Defensive option.",
    ],
    [
      "Chill Touch",
      "attack",
      "Action. Ranged spell attack. 1d10 necrotic and briefly hinders healing.",
    ],
    [
      "Eldritch Blast",
      "chosen/attack",
      "Action. Ranged spell attack. On hit, 1d10 force. Often improved by invocations.",
      true,
    ],
    [
      "Friends",
      "C",
      "Action. Helps a short social check, but the target may notice the magic afterward.",
    ],
    [
      "Mage Hand",
      "chosen",
      "Action. A spectral hand manipulates light objects, doors, levers, or traps from range.",
      true,
    ],
    [
      "Mind Sliver",
      "save",
      "Action. Intelligence save; failure takes 1d6 psychic and subtracts 1d4 from next save.",
    ],
    [
      "Minor Illusion",
      "",
      "Action. Create a small sound or object illusion. Distraction, disguise, sightline tricks.",
    ],
    [
      "Poison Spray",
      "save",
      "Action. Constitution save; failure takes 1d12 poison. Watch resistance or immunity.",
    ],
    [
      "Prestidigitation",
      "",
      "Action. Cleaning, flavor, warming/cooling, small marks, tiny sensory effects.",
    ],
    [
      "Thunderclap",
      "area",
      "Action. Nearby creatures make Constitution saves; failure takes 1d6 thunder. Loud.",
    ],
    [
      "Toll the Dead",
      "save",
      "Action. Wisdom save; failure takes necrotic damage, larger die if target is wounded.",
    ],
    [
      "True Strike",
      "",
      "Action. Make a weapon attack using spellcasting ability; hit can deal radiant damage.",
    ],
  ]
}

function warlockLevel1Rows() {
  return [
    [
      "Armor of Agathys",
      "",
      "Action. Gain 5 temporary HP. While they last, melee attackers take 5 cold.",
    ],
    [
      "Arms of Hadar",
      "",
      "Action. Close area. Strength save; failure takes 2d6 necrotic and loses reactions.",
    ],
    [
      "Bane",
      "C",
      "Action. Up to 3 creatures make Charisma saves; failure gives -1d4 to attacks and saves.",
    ],
    [
      "Charm Person",
      "chosen",
      "Action. Humanoid makes a Wisdom save; failure is Charmed. Beware the aftermath.",
      true,
    ],
    [
      "Comprehend Languages",
      "R",
      "Action/ritual. Understand literal spoken or written language, not codes or hidden meaning.",
    ],
    [
      "Detect Magic",
      "C/R",
      "Action/ritual. Sense nearby magic and, with concentration, learn its school.",
    ],
    [
      "Expeditious Retreat",
      "C",
      "Bonus action. While concentrating, Dash as a bonus action each turn. Escape/chase.",
    ],
    [
      "Hellish Rebuke",
      "chosen/reaction",
      "Reaction. The creature that damaged you makes a Dexterity save; failure takes 2d10 fire.",
      true,
    ],
    [
      "Hex",
      "C",
      "Bonus action. Mark target; attack hits deal +1d6 necrotic. One ability check type has disadvantage.",
    ],
    [
      "Illusory Script",
      "R/M",
      "1 minute/ritual. Hide writing with illusion; chosen readers see true text.",
    ],
    [
      "Protection from Evil and Good",
      "C/M",
      "Action. Protect against certain supernatural beings; strong vs attacks, charm, fear, possession.",
    ],
    [
      "Speak with Animals",
      "R",
      "Action/ritual. Speak with Beasts and gather animal-view information.",
    ],
    [
      "Tasha's Hideous Laughter",
      "C",
      "Action. One Wisdom save; failure is Prone and Incapacitated. Concentration.",
    ],
    [
      "Unseen Servant",
      "R",
      "Action/ritual. Invisible force handles simple tasks: doors, traps, carrying, chores.",
    ],
    [
      "Witch Bolt",
      "C/attack",
      "Action. Ranged spell attack. Hit for 2d12 lightning, then repeat damage while concentrating.",
    ],
  ]
}

function warlockInvocationRows() {
  return [
    [
      "Armor of Shadows",
      "",
      "Cast Mage Armor on yourself without spending a slot. Good for constant defense.",
    ],
    [
      "Eldritch Mind",
      "",
      "Advantage on Constitution saves to maintain concentration. Helps keep Hex and similar spells.",
    ],
    ["Pact of the Blade", "", "Create or bind a magical weapon. For weapon-focused warlocks."],
    [
      "Pact of the Chain",
      "",
      "Find Familiar plus special familiar options. Strong for scouting, Help, and safe information.",
    ],
    [
      "Pact of the Tome",
      "",
      "Book of Shadows grants extra cantrips and ritual flexibility. Problem-solving option.",
    ],
  ]
}

fs.mkdirSync(outputDir, { recursive: true })
const compiler = NodeCompiler.create({ workspace: outputDir })

for (const packet of packets) {
  const typPath = path.join(outputDir, `${packet.fileBase}.typ`)
  const pdfPath = path.join(outputDir, `${packet.fileBase}.pdf`)
  fs.writeFileSync(typPath, buildTypst(packet), "utf8")
  const result = compiler.compile({ mainFilePath: typPath })
  if (result.hasError()) {
    result.printErrors()
    process.exit(1)
  }
  result.printDiagnostics()
  fs.writeFileSync(pdfPath, compiler.pdf(result.result))
  console.log(`Wrote ${path.relative(root, typPath)}`)
  console.log(`Wrote ${path.relative(root, pdfPath)}`)
}
