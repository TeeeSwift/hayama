import fs from "node:fs"
import path from "node:path"
import { NodeCompiler } from "@myriaddreamin/typst-ts-node-compiler"

const root = process.cwd()
const outputDir = path.join(root, "content", "Player Handouts", "Generated", "PDF Sources")

const commonCantripNote = "キャントリップは何度でも使えます。"

const packets = [
  {
    name: "Alex Gaga",
    fileBase: "Alex Gaga Player Packet JP Designed",
    subtitle: "バード / 隠者 / 地質・環境コンサルタント",
    role: "支援と制御",
    roleText: "味方の成功を押し上げ、敵の大事な行動を崩す。",
    stats: [
      ["最大HP", "10"],
      ["PB", "+2"],
      ["呪文DC", "13"],
      ["呪文攻撃", "+5"],
      ["スロット", "1Lv x2"],
      ["集中セーヴ", "+0"],
    ],
    modifiers: ["+0", "+1", "+0", "-1", "+0", "+3"],
    saves: ["+0", "+3", "+0", "-1", "+0", "+5"],
    proficientSaves: ["敏捷", "魅力"],
    alexNumbers: [
      "呪文攻撃: d20 + 5。計算は 習熟ボーナス +2 + 魅力修正値 +3。",
      "呪文セーヴDC: 13。計算は 8 + 習熟ボーナス +2 + 魅力修正値 +3。",
      "集中セーヴ: 通常は耐久力セーヴなので Alex は +0。DCは10、または受けたダメージの半分の高い方。",
    ],
    classHeading: "バードとしての動き方",
    classIntro:
      "Alexは「味方の重要な瞬間を成功に近づける」「敵の行動を弱める」「会話や幻術で状況を変える」バードです。毎ターンすべてをする必要はありません。今いちばん流れを変える行動を1つ選べば十分です。",
    classSections: [
      {
        title: "Bardic Inspiration",
        body: [
          "ボーナスアクションで味方に d6 のインスピレーションを渡します。味方はあとで重要なd20判定に足して、失敗を成功に変えられるかもしれません。",
          "使いどころ: 危ないセーヴ、重要な攻撃、説得・調査・隠密・脱出などの勝負どころ。",
        ],
      },
      {
        title: "バード呪文",
        body: [
          "キャントリップは何度でも使えます。1レベル呪文はスロットを消費します。Alexの呪文能力値は魅力です。",
          "集中が必要な呪文は同時に1つだけ維持できます。Alexがいま集中できる呪文は Bane と Sleep です。",
        ],
      },
    ],
    combat: [
      "味方が重要な判定をしそうなら Bardic Inspiration。",
      "敵をまとめて弱らせたいなら Bane。",
      "味方が危ないなら Healing Word。",
      "スロットを温存したいなら Minor Illusion や通常行動で場を作る。",
    ],
    chosenHeading: "Alexが選んだ呪文",
    chosenSpells: [
      [
        "Message",
        "CANTRIP",
        "アクション。射程内の相手1体に小声の魔法メッセージを送り、相手も小声で返事できる。",
        "壁や障害物で届かないことがある。隠密行動、分断時の相談、合図に強い。",
        "teal",
      ],
      [
        "Minor Illusion",
        "CANTRIP",
        "アクション。小さな音、または小さな物体の幻を作る。攻撃やダメージはない。",
        "注意そらし、偽の物音、簡単な隠れ場所、相手の視線誘導に使える。触られるとばれやすい。",
        "teal",
      ],
      [
        "Bane",
        "1 LV / 集中",
        "アクション。最大3体が魅力セーヴ。失敗した敵は攻撃ロールとセーヴから1d4を引く。",
        "集中。複数の敵が強い時、味方全体を守る。Sleepとは同時に維持できない。",
        "coral",
      ],
      [
        "Dissonant Whispers",
        "1 LV",
        "アクション。1体が判断力セーヴ。失敗で精神ダメージを受け、可能ならあなたから離れる。",
        "敵の位置を崩したい時に使う。成功しても通常は半分のダメージ。",
        "coral",
      ],
      [
        "Healing Word",
        "1 LV / BA",
        "ボーナスアクション。射程内の味方1体を2d4+魅力修正値ぶん回復する。",
        "遠くの倒れた味方を起こすのに便利。同じターンの他の呪文制限はDMに確認。",
        "gold",
      ],
      [
        "Sleep",
        "1 LV / 集中",
        "アクション。範囲内の敵が判断力セーヴ。失敗すると眠る/無力化される。",
        "弱い敵や弱った敵を止める用途。集中。攻撃されたり起こされたりすると終わる。",
        "coral",
      ],
    ],
    context: {
      surface:
        "Alexは地質と環境のコンサルタントとして、建設や開発の安全性、災害対策、環境リスクを評価してきました。構造、根拠、調査を大切にする人ですが、いまは科学の言葉だけでは届かないものを、歌やパフォーマンスで表そうとしています。\n\n今の住まいは、地元の音楽ライブやアートイベントを開くレストランの上にあるアパートです。生活の下の階からは、演奏、会話、料理の匂い、町の人たちのざわめきが上がってきます。芸術家としての道はまだ安定しておらず、仕事として成立させる難しさを日々感じています。",
      recent:
        "レストランと建物のオーナーであるBeatriceは、ゆっくりした話し方の、夢見がちな、控えめなおばあさんです。Alexのアートをいつも辛抱強く応援してくれます。その言葉は、Alexの中に残っています。「芸術家の責任は、人々に『彼ら対私たち』の中に『彼ら』なんていないと気づかせることだよ。」\n\n仕事の面では、AlexはVincentと何度か一緒に動いたことがあります。市の案件、公共・民間プロジェクト、改修、新築などでAlexがコンサルタントとして関わり、Vincentはより上の指揮系統から現場や調整を見ていました。深く付き合う間柄ではありませんが、お互いに顔と仕事ぶりを知っていて、会えば礼儀正しく話せる関係です。",
      npcs: [
        [
          "Beatrice",
          "レストランと建物のオーナー。ゆっくり、夢見がち、控えめで、Alexの芸術を温かく支えてくれる。",
        ],
        [
          "Vincent",
          "複数の地域プロジェクトで接点がある。上の立場から現場を見ているため頻繁には会わないが、互いに認識していて関係は良好。",
        ],
        [
          "昔からの研究仲間",
          "大学時代から研究・職業人生を通じて知る友人。今も科学の世界に深くいて、Alexの芸術への転向にはまだ納得していない。",
        ],
      ],
      places: [
        "地元の音楽ライブやアートイベントを開くレストラン",
        "レストランの上にあるAlexのアパート",
        "市や民間の建設・改修プロジェクトの現場",
        "芸術活動の収入や評価がまだ安定しない日々",
      ],
      roleplay: [
        "科学者としての厳密さと、芸術家としての直感の間で揺れている。",
        "芸術を仕事にする難しさを感じながらも、表現を諦めたくない。",
        "昔の仲間から研究や学会の話を振られるたびに、自分がどこへ向かっているのかを少し考えてしまう。",
        "Beatriceの言葉は、優しさ、責任、境界を越える表現を思い出させる。",
      ],
      questions: [
        "これは集中が必要な呪文ですか？",
        "これはアクションですか、ボーナスアクションですか？",
        "この場面で演奏、声、幻術を使って状況を変えられますか？",
        "相手はセーヴしますか、それとも私が攻撃ロールしますか？",
      ],
    },
    appendix: [
      {
        title: "キャントリップ",
        note: "Alexはこの中から Message と Minor Illusion を選んでいます。キャントリップは何度でも使えます。印: C = 集中。",
        rows: [
          [
            "Blade Ward",
            "C",
            "アクション。集中中、自分への攻撃ロールを1d4下げる防御。殴られそうな時。",
          ],
          ["Dancing Lights", "C", "アクション。複数の小さな光/人型の光。暗所、合図、囮。集中。"],
          [
            "Friends",
            "C",
            "アクション。短時間の社交判定を有利にしやすいが、後で魔法に気づかれる危険。",
          ],
          ["Light", "", "アクション。触れた物体を光らせる。たいまつ代わり、目印、投げる照明。"],
          ["Mage Hand", "", "アクション。遠くの軽い物、扉、レバー、罠を安全に触る魔法の手。"],
          ["Mending", "", "1分。小さな破損や裂け目を修理。証拠品や道具の修復向け。"],
          [
            "Message",
            "選択済",
            "アクション。離れた相手に小声の連絡、返事も可。隠密と分断時の連携。",
            true,
          ],
          [
            "Minor Illusion",
            "選択済",
            "アクション。小さな音/物体の幻。注意そらし、偽装、視線誘導。",
            true,
          ],
          [
            "Prestidigitation",
            "",
            "アクション。清掃、風味、温冷、小さな印、火の点消しなど生活系の小魔法。",
          ],
          [
            "Starry Wisp",
            "攻撃",
            "アクション。遠隔呪文攻撃。命中で1d8 radiant、対象を少し光らせる。",
          ],
          [
            "Thunderclap",
            "範囲",
            "アクション。近くの全員が耐久セーヴ、失敗で1d6 thunder。音が大きい。",
          ],
          ["True Strike", "", "アクション。呪文能力値で武器攻撃し、命中時にradiant化できる。"],
          [
            "Vicious Mockery",
            "セーヴ",
            "アクション。判断力セーヴ失敗で1d6 psychic、次の攻撃ロールを不利に。",
          ],
        ],
      },
      {
        title: "1レベル呪文",
        note: "Alexは Bane、Dissonant Whispers、Healing Word、Sleep を準備しています。1レベル呪文はスロットを使います。印: C = 集中、R = 儀式、M = 特定の物質要素、BA = ボーナスアクション。",
        rows: bardLevel1Rows(),
      },
    ],
  },
  {
    name: "Vincent Uminashi",
    fileBase: "Vincent Uminashi Player Packet JP Designed",
    subtitle: "レンジャー / 民衆英雄 / 物件管理・開発調整",
    role: "探索と集中攻撃",
    roleText: "危険を先に見つけ、重要な相手に圧力をかけ続ける。",
    stats: [
      ["最大HP", "11"],
      ["PB", "+2"],
      ["呪文DC", "12"],
      ["呪文攻撃", "+4"],
      ["スロット", "1Lv x2"],
      ["集中セーヴ", "+1"],
    ],
    modifiers: ["+0", "+3", "+1", "+1", "+2", "+1"],
    saves: ["+2", "+5", "+1", "+1", "+2", "+1"],
    proficientSaves: ["筋力", "敏捷"],
    alexNumbers: [
      "呪文攻撃: d20 + 4。計算は 習熟ボーナス +2 + 判断力修正値 +2。",
      "呪文セーヴDC: 12。計算は 8 + 習熟ボーナス +2 + 判断力修正値 +2。",
      "集中セーヴ: 通常は耐久力セーヴなので Vincent は +1。",
    ],
    classHeading: "レンジャーとしての動き方",
    classIntro:
      "Vincentは「危険を先に見つける」「重要な相手を追い続ける」「武器、移動、自然魔法を実用的に混ぜる」レンジャーです。戦闘前の観察と位置取りが強みになります。",
    classSections: [
      {
        title: "Favored Enemy / Hunter's Mark",
        body: [
          "Hunter's Mark は常に準備されています。長めの戦闘で同じ敵を何度も攻撃するなら、とても強い選択肢です。",
          "集中が必要なので、他の集中呪文を使う時は維持するか切るかを選びます。",
        ],
      },
      {
        title: "武器マスタリー",
        body: [
          "Shortsword と Handaxe はどちらも Vex です。命中してダメージを与えたら、次の自分のターン終了前までに同じ相手へ行う次の攻撃ロールが有利になります。",
          "Handaxe は投げても使えます。離れた相手に当てて Vex をつけ、次の攻撃を当てやすくする動きができます。",
        ],
      },
    ],
    combat: [
      "一番危険な敵を選ぶ。",
      "その敵を何度も攻撃できそうなら Hunter's Mark。",
      "武器で攻撃し、位置を取り直す。",
      "周囲の地形や逃げ道を見て、仲間に伝える。",
    ],
    chosenHeading: "Vincentが使える呪文",
    chosenSpells: [
      [
        "Hunter's Mark",
        "常時 / 集中",
        "ボーナスアクションで1体を印づける。攻撃が命中するたび追加1d6 forceダメージ。",
        "集中。長く攻撃し続ける相手に強い。追跡にも役立ち、対象が倒れたら移せる場合がある。",
        "coral",
      ],
      [
        "Animal Friendship",
        "1 LV",
        "アクション。Beast 1体が判断力セーヴ。失敗するとあなたにCharmed状態になる。",
        "動物を落ち着かせたい時。相手や仲間が傷つけると効果が壊れやすい。",
        "teal",
      ],
      [
        "Longstrider",
        "1 LV",
        "アクション。味方1体の移動速度を+10 ftする。長めに続き、集中不要。",
        "追跡、逃走、探索、距離を詰めたい場面の前に使うと効く。",
        "gold",
      ],
    ],
    context: {
      surface:
        "Vincentは葉山の古い家につながる地元の人物です。家の資産や人間関係を背景に、土地、建物、修繕、開発、業者との調整に関わっています。\n\n町は彼にとってただの舞台ではなく、暮らしてきた場所です。誰がどこに住んでいるか、どの家が古いか、どの道が妙に使われないか、といった地元感覚があります。",
      recent:
        "海岸沿いの開発や工事に、家や仕事を通じて接点があります。町の問題が「単発の事故」ではなく、複数の場所でつながっているように見え始めています。\n\n地元の人間として、外から来た人には見えない小さなズレに気づけるかもしれません。",
      npcs: [
        ["父", "現代的な影響力と資金力を持つ実業家。"],
        ["母", "葉山の古い家筋につながる人物。地元との結びつきが深い。"],
        [
          "家の使用人",
          "長く家に仕えている、落ち着いた人物。ある古い噂があるが、真相ははっきりしない。",
        ],
        ["町の関係者", "物件、修繕、開発の調整で顔を合わせることが多い。"],
      ],
      places: [
        "家の管理物件",
        "海岸沿いの開発・工事",
        "古くからの地元のつながり",
        "普段なら見過ごされる町の小さな異変",
      ],
      roleplay: [
        "地元の安定した視点から、町の変化を見る。",
        "家の立場と自分の判断の間で動く。",
        "外部の説明より、地元の違和感を信じる場面がある。",
      ],
      questions: [
        "この場所について、地元民として知っていそうですか？",
        "足跡や人の動きから何かわかりますか？",
        "Hunter's Markを維持したままこれができますか？",
        "この武器マスタリーは今回使えますか？",
      ],
    },
    appendix: [
      {
        title: "レンジャーのキャントリップ",
        note: "レベル1レンジャーは通常キャントリップを持ちません。レベル2以降の選択によってはドルイド系キャントリップを得ることがあります。",
        rows: [
          ["Level 1 ranger", "なし", "レベル1では武器と1レベル呪文が基本。"],
          ["Level 2 Druidic Warrior", "選択", "後で選ぶならドルイドのキャントリップ候補を見る。"],
        ],
      },
      {
        title: "1レベル呪文",
        note: "Hunter's Mark は常に準備済み。Vincentは Animal Friendship と Longstrider を準備しています。印: C = 集中、R = 儀式。",
        rows: rangerLevel1Rows(),
      },
    ],
  },
  {
    name: "Aizawa Marin",
    fileBase: "Aizawa Marin Player Packet JP Designed",
    subtitle: "ドルイド / 侍祭 / 高校生ダイバー",
    role: "自然感知と支援",
    roleText: "自然や身体の異変を読み、場を整え、必要な時に回復する。",
    stats: [
      ["最大HP", "9"],
      ["PB", "+2"],
      ["呪文DC", "13"],
      ["呪文攻撃", "+5"],
      ["スロット", "1Lv x2"],
      ["集中セーヴ", "+1"],
    ],
    modifiers: ["-1", "+0", "+1", "+0", "+3", "+0"],
    saves: ["-1", "+0", "+1", "+2", "+5", "+0"],
    proficientSaves: ["知力", "判断"],
    alexNumbers: [
      "呪文攻撃: d20 + 5。計算は 習熟ボーナス +2 + 判断力修正値 +3。",
      "呪文セーヴDC: 13。計算は 8 + 習熟ボーナス +2 + 判断力修正値 +3。",
      "集中セーヴ: 通常は耐久力セーヴなので Marin は +1。",
    ],
    classHeading: "ドルイドとしての動き方",
    classIntro:
      "Marinは「自然、身体、天候、動物、場所の変化を読む」ドルイドです。戦闘では敵を倒すだけでなく、地形や状態を変え、味方が動きやすい場を作れます。",
    classSections: [
      {
        title: "Druidic",
        body: [
          "ドルイドの秘密の言語や自然との結びつきを持っています。2024年ルールでは Speak with Animals が常に準備される扱いです。",
        ],
      },
      {
        title: "呪文準備",
        body: [
          "ドルイドは長休み後に1レベル以上の準備呪文を変えられます。次の日の予定や調査内容に合わせて入れ替えられます。",
        ],
      },
    ],
    combat: [
      "敵を止める方がよいか、味方を助ける方がよいかを考える。",
      "前に出るなら Shillelagh。",
      "味方が倒れそうなら Healing Word や Cure Wounds を考える。",
      "自然や海の異変に関係しそうなら、ドルイドらしい観察をDMに聞く。",
    ],
    chosenHeading: "Marinの呪文と準備候補",
    chosenSpells: [
      [
        "Druidcraft",
        "CANTRIP",
        "アクション。小さな自然の兆しや感覚効果を起こす。近い天気を予測したり、花を咲かせたりできる。",
        "ダメージはない。海や天候、植物、火の小さな変化を調べる時に便利。",
        "teal",
      ],
      [
        "Shillelagh",
        "CANTRIP",
        "ボーナスアクション。棍棒/クォータースタッフを魔法化し、判断力で攻撃できる。",
        "近接戦闘用。ダメージは通常1d8系になり、Marinの判断力+3を活かせる。",
        "gold",
      ],
      [
        "Speak with Animals",
        "常時 / R",
        "動物と会話できる。2024年ルールではDruidicにより常に準備される扱い。",
        "動物は人間のようには説明しない。におい、音、危険、餌、縄張りの感覚で答える。",
        "teal",
      ],
      [
        "Healing Word",
        "候補 / BA",
        "ボーナスアクション。射程内の味方1体を2d4+判断力修正値ぶん回復する。",
        "倒れた味方を遠くから起こす候補。準備しているかは長休み後の選択を確認。",
        "gold",
      ],
      [
        "Entangle",
        "候補 / 集中",
        "アクション。範囲内に植物/つかむ力を出し、敵は筋力セーヴ。失敗でRestrained。",
        "敵を止め、味方の攻撃を当てやすくする候補。集中が必要。",
        "coral",
      ],
      [
        "Goodberry",
        "候補",
        "アクション。魔法の木の実を作る。1粒で1HP回復し、1日分の栄養になる。",
        "戦闘中より、探索後の小回復やサバイバルに強い候補。",
        "gold",
      ],
    ],
    context: {
      surface:
        "Marinは地元の高校生で、週末には父のダイビング指導を手伝っています。海に対して、軽い憧れではなく、規律、慎重さ、敬意を持っています。\n\n彼女にとって海は遊び場である前に、向き合うべき相手です。",
      recent:
        "ダイビング中、海の感覚が突然変わりました。水圧、音、浮力、身体の感覚が普通ではありませんでした。\n\n海に引きずり込まれたというより、「海の方が自分を受け入れすぎた」ように感じました。父に引き戻されたあと、地上の方が不自然に重く感じられました。",
      npcs: [
        ["父", "ダイビング指導者。Marinにとって海への姿勢を教えた大事な存在。"],
        [
          "逗子海岸で教えている友人",
          "もっと軽く、自由に、見栄えよく海と関わっている。その自由さに少し嫉妬がある。",
        ],
        ["海", "敬意を払う対象。最近は、ただの自然以上に自分へ反応している気がする。"],
      ],
      places: ["父のダイビング教室", "葉山の海", "逗子海岸", "水中で音や重さが変わった場所"],
      roleplay: [
        "敬意と恐怖の間で海を見る。",
        "自由に海と関わる人への嫉妬と違和感がある。",
        "自分の身体感覚を信じてよいのか迷っている。",
      ],
      questions: [
        "この自然現象は普通ですか？",
        "動物や海の生き物に話しかけられますか？",
        "この呪文は集中が必要ですか？",
        "長休み後にこの準備呪文へ変えられますか？",
      ],
    },
    appendix: [
      {
        title: "ドルイドのキャントリップ",
        note: "Marinは Druidcraft と Shillelagh を選んでいます。印: C = 集中。",
        rows: druidCantripRows(),
      },
      {
        title: "1レベル呪文",
        note: "ドルイドは長休み後に準備呪文を変更できます。Speak with Animals はDruidicから常に準備される扱いです。印: C = 集中、R = 儀式、M = 特定の物質要素、BA = ボーナスアクション。",
        rows: druidLevel1Rows(),
      },
    ],
  },
  {
    name: "Ryunnu",
    fileBase: "Ryunnu Player Packet JP Designed",
    subtitle: "ウォーロック / 貴族 / 電気管理システム営業",
    role: "営業と契約魔術",
    roleText: "人とのやり取りを受け流し、少ない呪文を重要な瞬間に使う。",
    stats: [
      ["最大HP", "8"],
      ["PB", "+2"],
      ["呪文DC", "11"],
      ["呪文攻撃", "+3"],
      ["スロット", "1Lv x1"],
      ["集中セーヴ", "+0"],
    ],
    modifiers: ["+0", "-2", "+0", "+1", "+0", "+1"],
    saves: ["+0", "-2", "+0", "+1", "+2", "+3"],
    proficientSaves: ["判断", "魅力"],
    alexNumbers: [
      "呪文攻撃: d20 + 3。計算は 習熟ボーナス +2 + 魅力修正値 +1。",
      "呪文セーヴDC: 11。計算は 8 + 習熟ボーナス +2 + 魅力修正値 +1。",
      "集中セーヴ: 通常は耐久力セーヴなので Ryunnu は +0。",
      "習熟技能: 魔法学 +3、歴史 +3、説得 +3、隠密 +0。",
      "Devil's Sight は2024ルールではウォーロック2レベル以上が前提なので、1レベルでは別のInvocationに差し替えが必要です。",
    ],
    classHeading: "ウォーロックとしての動き方",
    classIntro:
      "Ryunnuは電気管理システムの営業として葉山に来たウォーロックです。施工担当ではありませんが、なぜか町の人に電気工事や修理を頼まれがちです。戦闘では Eldritch Blast を基本にし、1つしかない呪文スロットを重要な場面に使います。",
    classSections: [
      {
        title: "営業マンとして",
        body: [
          "Ryunnuは電気管理システムを売る側の人間です。設備の話はできますが、施工や修理の専門家ではありません。誤解された時は、営業らしく丁寧に説明するか、もう諦めてその場をやり過ごします。",
        ],
      },
      {
        title: "Pact Magic",
        body: [
          "1レベルのウォーロックは1レベル呪文スロットを1つ持ちます。Pact Magicのスロットは小休憩または長休憩で戻ります。",
          "Charm Person と Hellish Rebuke はどちらも1レベルのウォーロック呪文として選べます。",
        ],
      },
      {
        title: "Fathomless特徴",
        body: [
          "Ryunnuのシートが旧Fathomlessの1レベル特徴を使うなら、Tentacle of the Deeps はボーナスアクション候補です。60フィート以内に触手を出し、10フィート以内の敵へ近接呪文攻撃。命中で1d8 cold、移動速度-10フィート。",
          "Gift of the Sea は常時有効です。水中呼吸ができ、泳ぐ速度が40フィートになります。",
        ],
      },
      {
        title: "Eldritch Invocation",
        body: [
          "Devil's Sight は暗闇を見る方向性としては合っていますが、2024ルールではウォーロック2レベル以上が前提です。1レベルでは Armor of Shadows、Eldritch Mind、Pact of the Blade、Pact of the Chain、Pact of the Tome などから選び直す必要があります。",
        ],
      },
    ],
    combat: [
      "基本は Eldritch Blast で安全な距離から攻撃する。",
      "攻撃されたら Hellish Rebuke をリアクションで返せるか考える。",
      "会話や調査で流れを変えたい時は Charm Person を検討する。",
      "戦闘以外では、営業トーク、人脈、社交の場の気まずさを使って情報を拾う。",
    ],
    chosenHeading: "Ryunnuが選んだ呪文とInvocation",
    chosenSpells: [
      [
        "Eldritch Blast",
        "CANTRIP",
        "アクション。遠隔呪文攻撃。命中すると1d10 forceダメージ。",
        "Ryunnuの基本攻撃。呪文攻撃ボーナスは +3。",
        "teal",
      ],
      [
        "Mage Hand",
        "CANTRIP",
        "アクション。遠くの軽い物、扉、レバー、容器、罠などを触れる魔法の手を出す。",
        "調査や危険物の確認に強い。ダメージはないが、発想で便利に使える。",
        "teal",
      ],
      [
        "Hellish Rebuke",
        "1 LV / 反応",
        "リアクション。自分にダメージを与えた相手が敏捷セーヴ。失敗で2d10 fire、成功で半分。",
        "スロットを使う。攻撃された時の反撃なので、使えるタイミングを逃さない。",
        "coral",
      ],
      [
        "Charm Person",
        "1 LV",
        "アクション。Humanoid 1体が判断力セーヴ。失敗するとCharmed状態になる。",
        "会話や交渉で使える。終了後、相手は魔法をかけられたと気づく可能性がある。",
        "gold",
      ],
      [
        "Tentacle of the Deeps",
        "ボーナスアクション",
        "60フィート以内に1分間の霊的な触手を作る。触手から10フィート以内の敵へ近接呪文攻撃。",
        "命中で1d8 cold、次の自分のターン開始まで移動速度-10フィート。以後のボーナスアクションで30フィート動かして再攻撃。",
        "teal",
      ],
      [
        "Gift of the Sea",
        "常時",
        "水中呼吸ができ、泳ぐ速度が40フィートになる。",
        "呪文スロット、アクション、集中は不要。水中シーンがかなり楽になる。",
        "teal",
      ],
      [
        "Devil's Sight",
        "要差し替え",
        "暗闇を見るInvocationですが、2024ルールではウォーロック2レベル以上が前提です。",
        "1レベルではまだ選べません。レベル1のInvocation候補は付録を見て選び直してください。",
        "teal",
      ],
    ],
    context: {
      surface:
        "Ryunnuは最近葉山に来たばかりです。電気管理システムの営業をしていて、町の古い事情にはまだ詳しくありません。\n\n本人はあくまで「売る側」であって、施工や修理の担当ではありません。それでも、町の人はなぜか彼を電気に詳しい便利な人として扱いがちです。",
      recent:
        "カフェでノートパソコンを開いて仕事をしていると、なぜか何度かスピードデートの席に混ざってしまいました。女性が彼の席に座ってきて、最初は訂正しようとするものの、時々そのまま参加してしまいます。\n\nある地元イベントの主催者の女性は、どういうわけかRyunnuの連絡先を手に入れ、後日マッチング結果のリストを送ってきました。",
      npcs: [
        [
          "ブラジリアン柔術の先生",
          "Ryunnuが通っている道場の先生。体の使い方、距離感、落ち着き方を教えてくれる。",
        ],
        [
          "電気工事を頼んでくる老人",
          "何度説明しても、Ryunnuを電気工事の人だと思っている。営業だと言っても、毎回修理や配線の相談をしてくる。",
        ],
        [
          "地元イベントの主催者",
          "カフェでのスピードデートを仕切っている女性。なぜかRyunnuの連絡先を手に入れ、マッチング結果を送ってきた。",
        ],
      ],
      places: [
        "ノートパソコンを開いて仕事をするカフェ",
        "スピードデートが行われる地元イベント",
        "ブラジリアン柔術の道場",
        "電気工事を頼んでくる老人のいる近所",
      ],
      roleplay: [
        "専門家扱いされるが、本人は施工担当ではない。",
        "断りきれず、気まずい場でもなんとなく参加してしまうことがある。",
        "営業としての愛想と、ウォーロックとしての不穏さが同居している。",
      ],
      questions: [
        "この人は私を電気工事の人だと思っていますか？",
        "営業として、この場をうまく説明できますか？",
        "このイベント主催者や参加者について何か知っていますか？",
        "この場面で柔術の落ち着き方や間合いの感覚を使えますか？",
      ],
    },
    appendix: [
      {
        title: "ウォーロックのキャントリップ",
        note: "Ryunnuは Eldritch Blast と Mage Hand を選んでいます。キャントリップは何度でも使えます。印: C = 集中。",
        rows: warlockCantripRows(),
      },
      {
        title: "1レベル呪文",
        note: "Ryunnuは Hellish Rebuke と Charm Person を選んでいます。1レベルウォーロックのPact Magicスロットは1つです。印: C = 集中、R = 儀式、M = 特定の物質要素。",
        rows: warlockLevel1Rows(),
      },
      {
        title: "1レベルInvocation",
        note: "2024 Basic Rulesで1レベルから選べる代表的なInvocationです。Devil's Sight はウォーロック2レベル以上が前提なので、ここには含めていません。",
        rows: warlockInvocationRows(),
      },
      {
        title: "Fathomless拡張候補",
        note: "旧Fathomlessの1レベル特徴を使うなら、RyunnuはTentacle of the DeepsとGift of the Seaも持ちます。採用タイミングはシートのルール年版に合わせて確認してください。",
        rows: [
          [
            "Tentacle of the Deeps",
            "ボーナスアクション",
            "60 ft以内に1分間作る。10 ft以内へ近接呪文攻撃、命中1d8 coldと移動-10 ft。以後BAで30 ft移動し再攻撃。使用回数はPB/長休憩。",
          ],
          [
            "Gift of the Sea",
            "常時",
            "水中呼吸と40 ftの泳ぐ速度。スロット、アクション、集中は不要。",
          ],
          [
            "Create or Destroy Water",
            "",
            "アクション。水を作る/消す。火消し、容器、痕跡、水場問題に。",
          ],
          [
            "Thunderwave",
            "",
            "アクション。近距離範囲。耐久セーヴ、失敗2d8 thunderと押し出し。大音量。",
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
  const headers = ["筋力", "敏捷", "耐久", "知力", "判断", "魅力"]
  const cells = [
    ...headers.map((h) => `  text(weight: "bold", fill: teal-dark)${content(h)},`),
    "  [修正値],",
    ...packet.modifiers.map((v) => `  ${content(v)},`),
    "  [セーヴ],",
    ...packet.saves.map((v, i) => {
      const prof = packet.proficientSaves.includes(headers[i])
      return prof ? `  text(weight: "bold", fill: teal-dark)${content(v)},` : `  ${content(v)},`
    }),
  ].join("\n")
  return `#table(
  columns: (24mm, 1fr, 1fr, 1fr, 1fr, 1fr, 1fr),
  inset: (x: 4.5pt, y: 3.6pt),
  stroke: 0.45pt + rule,
  fill: (x, y) => if y == 0 { sea } else { white },
  text(weight: "bold", fill: teal-dark)[能力値],
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
  columns: (36mm, 1fr),
  inset: (x: 5pt, y: 5pt),
  stroke: 0.45pt + rule,
  fill: (x, y) => if y == 0 { sea } else { white },
  text(weight: "bold", fill: teal-dark)[相手],
  text(weight: "bold", fill: teal-dark)[覚えておくこと],
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
  return `// Designed Japanese player packet for ${packet.name}.
// Generated by scripts/build-designed-player-packets.mjs.

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
#set text(font: ("Hiragino Sans", "Arial"), size: 9.65pt, fill: ink, lang: "ja")
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
  columns: (28mm, 18mm, 1fr),
  inset: (x: 4.5pt, y: 3.6pt),
  stroke: 0.45pt + rule,
  fill: (x, y) => if y == 0 { sea } else { white },
  text(weight: "bold", size: 8.2pt, fill: teal-dark)[呪文],
  text(weight: "bold", size: 8.2pt, fill: teal-dark)[印],
  text(weight: "bold", size: 8.2pt, fill: teal-dark)[使いどころ],
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
      この資料は、セッション中に「何ができるか」と「どの数字を足すか」を思い出すためのものです。数字で迷ったらキャラクターシートを優先してください。
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

== まず: 私は誰？

=== 表の顔

${paragraphs(packet.context.surface)}

=== 最近の出来事

${paragraphs(packet.context.recent)}

=== NPC・関係者

${npcTable(packet.context.npcs)}

=== 場所・手がかり

${list(packet.context.places)}

=== ロールプレイの軸

${list(packet.context.roleplay)}

#pagebreak()

== 次に: 何ができる？

${statGrid(packet.stats)}

#v(5pt)
${abilityTable(packet)}
#aside([${typ(packet.proficientSaves.length ? `${packet.proficientSaves.join("と")}のセーヴは、このクラスの習熟セーヴです。` : "セーヴ習熟はキャラクターシート確認後に追記します。")}能力値修正値は技能、攻撃、セーヴなどの基本になります。])

== 戦闘ターンの基本

#grid(columns: (1fr, 1fr), gutter: 12pt)[
  #rule-item([アクション], [自分のターンにできる主な行動です。攻撃する、呪文を唱える、Dash、Disengage、Dodge、Help、Hide、Search、Use an Objectなどが代表例です。])
  #v(6pt)
  #rule-item([ボーナスアクション], [特徴や呪文に「Bonus Action」と書かれている時だけ使えます。毎ターン必ずある行動ではありません。複数の候補がある時は、ふつう1つだけ選びます。])
][
  #rule-item([移動], [自分の移動速度ぶん動けます。移動はアクションとは別です。移動を分けて、少し動く、行動する、また動く、という使い方もできます。])
  #v(6pt)
  #rule-item([リアクション], [条件が起きた時に使う反応です。自分のターン外に使うことが多く、1ラウンドに通常1回だけです。機会攻撃や特定の呪文・特徴などがこれにあたります。])
]

=== よく使うアクション

#table(
  columns: (31mm, 1fr),
  inset: (x: 5pt, y: 4pt),
  stroke: 0.45pt + rule,
  fill: (x, y) => if y == 0 { sea } else { white },
  text(weight: "bold", fill: teal-dark)[アクション],
  text(weight: "bold", fill: teal-dark)[何をするか],
  [Dash],
  [このターンの移動量を追加でもう1回ぶん増やします。急いで近づく、逃げる、遮蔽物に入る時。],
  [Disengage],
  [このターン、移動しても機会攻撃を受けません。敵のそばから安全に離れる時。],
  [Dodge],
  [次の自分のターン開始まで、防御に集中します。見えている敵からの攻撃が当たりにくくなり、敏捷セーヴも有利になります。],
  [Help],
  [味方を助けます。状況が合えば、味方の次の能力値判定や攻撃を有利にできます。],
  [Hide],
  [隠れます。DMが隠れられる状況か判断し、通常は敏捷力〈隠密〉を振ります。],
  [Search],
  [探す、見抜く、注意深く観察する行動です。通常は判断力〈知覚〉や知力〈捜査〉を使います。],
  [Use an Object],
  [物を使います。扉、レバー、道具、薬、重要な小物など。魔法のアイテムは個別の説明を確認します。],
)

== ロールの基本

#rule-item([習熟ボーナス（PB）], [習熟は「訓練を受けている」「扱いに慣れている」ことを表します。1レベルのPBは通常 +2 です。技能、セーヴ、武器、道具、呪文攻撃や呪文セーヴDCなどで、自分が習熟しているものにだけ足します。同じロールにPBを何度も足すことはありません。迷ったら、キャラクターシートで丸やチェックがある項目、または攻撃・呪文欄にすでに計算された数字を使ってください。])

#grid(columns: (1fr, 1fr), gutter: 12pt)[
  #rule-item([攻撃ロール], [攻撃が当たるかを見る時は *d20 + 攻撃ボーナス* を振り、相手のAC以上なら命中します。武器攻撃は、ふつう *能力値修正値 + 習熟ボーナス* を足します。どの能力値を使うかは武器やシートを見ます。])
  #v(6pt)
  #rule-item([呪文攻撃ロール], [呪文が「spell attack」と書いてある時は、術者が *d20 + 呪文攻撃ボーナス* を振ります。相手のAC以上なら命中します。])
][
  #rule-item([セーヴィング・スロー], [セーヴは、危険を避けたり耐えたりするための防御ロールです。DMが「敏捷力セーヴ」などと言ったら、対応するセーヴ欄のボーナスをd20に足します。])
  #v(6pt)
  #rule-item([呪文セーヴDC], [呪文が「相手がセーヴする」タイプなら、術者はロールしません。相手が *呪文セーヴDC* 以上を目指してセーヴします。])
]

#note-box([${typ(packet.name)} の数字], [
${list(packet.alexNumbers)}
])

== ${typ(packet.classHeading)}

${paragraphs(packet.classIntro)}

${classSections(packet)}

=== 戦闘で迷ったら

${enumList(packet.combat)}

== ${typ(packet.chosenHeading)}

${spellCards(packet)}

== セッション中に聞いていいこと

${list(packet.context.questions)}

#pagebreak()

== 付録: ${typ(packet.name)} の呪文リスト

${appendix(packet)}
`
}

function bardLevel1Rows() {
  return [
    ["Animal Friendship", "", "アクション。Beastが判断力セーヴ。失敗でCharmed。動物交渉用。"],
    ["Bane", "選択済/C", "アクション。最大3体が魅力セーヴ。失敗で攻撃/セーヴ-1d4。集中。", true],
    ["Charm Person", "", "アクション。Humanoidが判断力セーヴ。失敗でCharmed。終了後の反応に注意。"],
    [
      "Color Spray",
      "",
      "アクション。近距離範囲。失敗した相手を短時間Blindedにして攻撃を外させる。",
    ],
    ["Command", "", "アクション。判断力セーヴ失敗で1語命令に従う。直接自傷命令は不可。"],
    ["Comprehend Languages", "R", "アクション/儀式。聞く/読む言語の字義を理解。暗号や含意は別。"],
    ["Cure Wounds", "", "アクション。接触した味方を2d8+魅力修正値回復。強めだが近づく必要。"],
    [
      "Detect Magic",
      "C/R",
      "アクション/儀式。周囲の魔法を感知し、集中で系統を見る。壁材で遮断あり。",
    ],
    ["Disguise Self", "", "アクション。1時間、外見を幻で変える。触られると矛盾が出る。"],
    [
      "Dissonant Whispers",
      "選択済",
      "アクション。1体が判断力セーヴ。失敗で3d6 psychicと移動強制。",
      true,
    ],
    ["Faerie Fire", "C", "アクション。範囲内が敏捷セーヴ。失敗で光り、攻撃が有利。不可視対策。"],
    ["Feather Fall", "反応", "リアクション。落下時に複数人の落下を遅くし、安全に着地。"],
    [
      "Healing Word",
      "選択済/BA",
      "ボーナスアクション。射程内1体を2d4+魅力修正値回復。倒れた味方に。",
      true,
    ],
    ["Heroism", "C", "アクション。味方1体を恐怖無効にし、毎ターン一時HP。集中。"],
    ["Identify", "R/M", "1分/儀式。魔法の物品や効果の性質、使い方、呪文影響を調べる。"],
    ["Illusory Script", "R/M", "1分/儀式。文章を幻で隠す。指定相手だけ真文を読める。"],
    ["Longstrider", "", "アクション。1時間、移動速度+10 ft。集中不要。探索/追跡前に。"],
    ["Silent Image", "C", "アクション。動かせる視覚幻影。音や触感なし。調査で見破られる。"],
    ["Sleep", "選択済/C", "アクション。範囲内が判断力セーヴ。失敗で眠る/無力化。集中。", true],
    ["Speak with Animals", "R", "アクション/儀式。Beastと会話。動物視点の情報が得られる。"],
    [
      "Tasha's Hideous Laughter",
      "C",
      "アクション。1体が判断力セーヴ。失敗でProne/Incapacitated。集中。",
    ],
    ["Thunderwave", "", "アクション。近距離範囲。耐久セーヴ、失敗2d8 thunderと押し出し。大音量。"],
    ["Unseen Servant", "R", "アクション/儀式。見えない力が簡単な作業。扉、罠、運搬に。"],
  ]
}

function rangerLevel1Rows() {
  return [
    ["Alarm", "R", "1分/儀式。扉、窓、野営地などに警報。侵入を音/精神通知で知る。"],
    [
      "Animal Friendship",
      "選択済",
      "アクション。Beastが判断力セーヴ。失敗でCharmed。動物交渉用。",
      true,
    ],
    ["Cure Wounds", "", "アクション。接触した味方を2d8+判断力修正値回復。近くの味方に。"],
    ["Detect Magic", "C/R", "アクション/儀式。周囲の魔法を感知し、集中で系統を見る。"],
    [
      "Detect Poison and Disease",
      "C/R",
      "アクション/儀式。毒、毒性生物、病気を探す。食料/水/遺体調査に。",
    ],
    [
      "Ensnaring Strike",
      "C",
      "ボーナスアクション。次の武器命中後、筋力セーヴ失敗でRestrainedと継続1d6。",
    ],
    ["Entangle", "C", "アクション。範囲内が筋力セーヴ。失敗でRestrained。足止め/集中。"],
    ["Fog Cloud", "C", "アクション。濃霧で視界を遮る。逃走、遮蔽、射線切り。集中。"],
    ["Goodberry", "", "アクション。10粒作成。1粒で1HP回復、1日分の栄養。探索後回復。"],
    ["Hail of Thorns", "", "ボーナスアクション。次の遠隔武器命中で周囲に1d10 piercing爆発。"],
    [
      "Hunter's Mark",
      "常時/C",
      "ボーナスアクション。印の敵へ攻撃命中ごと+1d6 force、追跡にも有利。",
      true,
    ],
    ["Jump", "", "アクション。1分、対象の跳躍距離を伸ばす。崖、屋根、障害物に。"],
    ["Longstrider", "選択済", "アクション。1時間、移動速度+10 ft。集中不要。追跡/逃走前に。", true],
    ["Speak with Animals", "R", "アクション/儀式。Beastと会話。目撃者、案内役、危険察知に。"],
  ]
}

function druidCantripRows() {
  return [
    [
      "Druidcraft",
      "選択済",
      "アクション。近い天気予測、花を咲かせる、火を点消し、小さな自然効果。",
      true,
    ],
    ["Elementalism", "", "アクション。少量の空気/土/火/水を動かす。小さな実用・演出向け。"],
    ["Guidance", "C", "アクション。味方の能力値判定に1d4追加。事前準備型、集中。"],
    ["Mending", "", "1分。小さな破損や裂け目を修理。道具、服、証拠品に。"],
    ["Message", "", "アクション。離れた相手に小声連絡、返事も可。隠密と連携。"],
    ["Poison Spray", "セーヴ", "アクション。耐久セーヴ失敗で1d12 poison。毒耐性/無効に注意。"],
    ["Produce Flame", "攻撃", "アクション。手に炎で明かり。投げると遠隔呪文攻撃、1d8 fire。"],
    ["Resistance", "C", "アクション。味方のセーヴに1d4追加。危険前の支援、集中。"],
    [
      "Shillelagh",
      "選択済",
      "ボーナスアクション。棍棒/杖を魔法化し、判断力で攻撃、通常1d8。",
      true,
    ],
    ["Spare the Dying", "", "アクション。0HPの相手を安定化。HPは戻らないが死亡セーヴを止める。"],
    ["Starry Wisp", "攻撃", "アクション。遠隔呪文攻撃。命中で1d8 radiant、対象を少し光らせる。"],
    ["Thorn Whip", "攻撃", "アクション。射程のある近接呪文攻撃。1d6 piercing、引き寄せ可。"],
    ["Thunderclap", "範囲", "アクション。近くの全員が耐久セーヴ、失敗で1d6 thunder。音が大きい。"],
  ]
}

function druidLevel1Rows() {
  return [
    ["Animal Friendship", "", "アクション。Beastが判断力セーヴ。失敗でCharmed。動物交渉用。"],
    ["Charm Person", "", "アクション。Humanoidが判断力セーヴ。失敗でCharmed。終了後の反応に注意。"],
    ["Create or Destroy Water", "", "アクション。水を作る/消す。火消し、容器、痕跡、水場問題に。"],
    ["Cure Wounds", "", "アクション。接触した味方を2d8+判断力修正値回復。"],
    ["Detect Magic", "C/R", "アクション/儀式。周囲の魔法を感知し、集中で系統を見る。"],
    [
      "Detect Poison and Disease",
      "C/R",
      "アクション/儀式。毒、毒性生物、病気を探す。水/食料調査に。",
    ],
    ["Entangle", "C", "アクション。範囲内が筋力セーヴ。失敗でRestrained。足止め/集中。"],
    ["Faerie Fire", "C", "アクション。範囲内が敏捷セーヴ。失敗で光り、攻撃が有利。不可視対策。"],
    ["Fog Cloud", "C", "アクション。濃霧で視界を遮る。逃走、遮蔽、射線切り。集中。"],
    ["Goodberry", "", "アクション。10粒作成。1粒で1HP回復、1日分の栄養。探索後回復。"],
    ["Healing Word", "BA", "ボーナスアクション。射程内1体を2d4+判断力修正値回復。倒れた味方に。"],
    [
      "Ice Knife",
      "攻撃",
      "アクション。遠隔呪文攻撃1d10 piercing、周囲が敏捷セーヴ失敗で2d6 cold。",
    ],
    ["Jump", "", "アクション。1分、対象の跳躍距離を伸ばす。崖、屋根、障害物に。"],
    ["Longstrider", "", "アクション。1時間、移動速度+10 ft。集中不要。追跡/逃走前に。"],
    [
      "Protection from Evil and Good",
      "C/M",
      "アクション。特定の超自然存在から守る。攻撃/魅了/恐怖/憑依に強い。",
    ],
    ["Purify Food and Drink", "R", "アクション/儀式。非魔法の食べ物と飲み物から毒や病気を除く。"],
    [
      "Speak with Animals",
      "常時/R",
      "アクション/儀式。Beastと会話。動物視点の目撃情報を得る。",
      true,
    ],
    ["Thunderwave", "", "アクション。近距離範囲。耐久セーヴ、失敗2d8 thunderと押し出し。大音量。"],
  ]
}

function warlockCantripRows() {
  return [
    ["Blade Ward", "C", "アクション。集中中、自分への攻撃ロールを1d4下げる防御。殴られそうな時。"],
    ["Chill Touch", "攻撃", "アクション。遠隔呪文攻撃。1d10 necrotic、短時間HP回復を邪魔する。"],
    [
      "Eldritch Blast",
      "選択済/攻撃",
      "アクション。遠隔呪文攻撃。命中で1d10 force。Invocationで強化されやすい主力。",
      true,
    ],
    ["Friends", "C", "アクション。短時間の社交判定を有利にしやすいが、後で魔法に気づかれる危険。"],
    ["Mage Hand", "選択済", "アクション。遠くの軽い物、扉、レバー、罠を安全に触る魔法の手。", true],
    ["Mind Sliver", "セーヴ", "アクション。知力セーヴ失敗で1d6 psychic、次のセーヴから1d4を引く。"],
    ["Minor Illusion", "", "アクション。小さな音/物体の幻。注意そらし、偽装、視線誘導。"],
    ["Poison Spray", "セーヴ", "アクション。耐久セーヴ失敗で1d12 poison。毒耐性/無効に注意。"],
    [
      "Prestidigitation",
      "",
      "アクション。清掃、風味、温冷、小さな印、火の点消しなど生活系の小魔法。",
    ],
    ["Thunderclap", "範囲", "アクション。近くの全員が耐久セーヴ、失敗で1d6 thunder。音が大きい。"],
    [
      "Toll the Dead",
      "セーヴ",
      "アクション。判断力セーヴ失敗でnecrotic。傷ついた敵には大きいダイス。",
    ],
    ["True Strike", "", "アクション。呪文能力値で武器攻撃し、命中時にradiant化できる。"],
  ]
}

function warlockLevel1Rows() {
  return [
    [
      "Armor of Agathys",
      "",
      "アクション。5一時HP。近接攻撃で当てた相手に5 cold反撃。一時HP中のみ。",
    ],
    [
      "Arms of Hadar",
      "",
      "アクション。近距離範囲。筋力セーヴ失敗で2d6 necroticとリアクション不可。",
    ],
    ["Bane", "C", "アクション。最大3体が魅力セーヴ。失敗で攻撃/セーヴ-1d4。集中。"],
    [
      "Charm Person",
      "選択済",
      "アクション。Humanoidが判断力セーヴ。失敗でCharmed。終了後の反応に注意。",
      true,
    ],
    ["Comprehend Languages", "R", "アクション/儀式。聞く/読む言語の字義を理解。暗号や含意は別。"],
    ["Detect Magic", "C/R", "アクション/儀式。周囲の魔法を感知し、集中で系統を見る。"],
    [
      "Expeditious Retreat",
      "C",
      "ボーナスアクション。集中中、毎ターンBonus ActionでDashできる。逃走/追跡。",
    ],
    [
      "Hellish Rebuke",
      "選択済/反応",
      "リアクション。傷つけた相手が敏捷セーヴ。失敗で2d10 fire、成功半分。",
      true,
    ],
    ["Hex", "C", "ボーナスアクション。印の敵へ攻撃命中ごと+1d6 necrotic。能力値判定1種も不利。"],
    ["Illusory Script", "R/M", "1分/儀式。文章を幻で隠す。指定相手だけ真文を読める。"],
    [
      "Protection from Evil and Good",
      "C/M",
      "アクション。特定の超自然存在から守る。攻撃/魅了/恐怖/憑依に強い。",
    ],
    ["Speak with Animals", "R", "アクション/儀式。Beastと会話。動物視点の目撃情報を得る。"],
    [
      "Tasha's Hideous Laughter",
      "C",
      "アクション。1体が判断力セーヴ。失敗でProne/Incapacitated。集中。",
    ],
    ["Unseen Servant", "R", "アクション/儀式。見えない力が簡単な作業。扉、罠、運搬に。"],
    [
      "Witch Bolt",
      "C/攻撃",
      "アクション。遠隔呪文攻撃。命中で2d12 lightning、集中中に再ダメージ可。",
    ],
  ]
}

function warlockInvocationRows() {
  return [
    ["Armor of Shadows", "", "Mage Armorをスロットなしで自分に使える。鎧なしなら基本AC 13 + Dex。集中不要。"],
    ["Eldritch Mind", "", "ダメージ後の集中維持の耐久力セーヴに有利。Hex等を切らしたくない時。"],
    [
      "Pact of the Blade",
      "ボーナスアクション",
      "近接武器を出す/結びつける。習熟、焦点化、攻撃とダメージに魅力を使える。",
    ],
    [
      "Pact of the Chain",
      "",
      "Find Familiarを覚え、スロットなしMagic actionで使える。特殊な使い魔、偵察、Helpに強い。",
    ],
    [
      "Pact of the Tome",
      "",
      "休憩後にBook of Shadows。任意クラスのcantrip 3つと1Lv儀式呪文2つ、焦点として使える。",
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
