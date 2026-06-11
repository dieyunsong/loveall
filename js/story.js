/* ============================================================
   LOVE ALL — A Midsummer Murder in Five Sets
   Story & room data
   ============================================================ */

const STORY = {

  meta: {
    title: "LOVE ALL",
    subtitle: "A Midsummer Murder in Five Sets",
    club: "The Hartcombe Lawn Tennis Club, Est. 1894",
  },

  /* ---------- PROLOGUE ---------- */

  prologue: [
    {
      heading: "An Invitation",
      kind: "letter",
      text: `<p class="letterhead">THE HARTCOMBE LAWN TENNIS CLUB<br><span>Hartcombe-under-Wold &middot; Est. 1894 &middot; "Ad Victoriam, Politely"</span></p>
<p>Dear Correspondent,</p>
<p>The Committee is pleased to grant the <em>Sunday Herald</em> access to the Club for the week of the Midsummer Championship. We trust your article will dwell on our heritage, our strawberries, and our recently re-pointed chimneys, and not on anything else whatsoever.</p>
<p>Whites are compulsory. Opinions are not.</p>
<p class="sig">— Sir Reginald Pemberton-Cole, Chairman<br><span class="small">(dictated but not read; Sir Reginald does not read)</span></p>`,
    },
    {
      heading: "The Week",
      text: `<p>You came for eight hundred cosy words about strawberries. You stayed because of the three of them.</p>
<p><strong>MARGOT VANE</strong>, the club professional — thirty-one, forehand like a verdict, a laugh she keeps rationed. Ten years ago she was the future of British tennis. Then a doping result nobody believed, a quiet settlement, and exile to the shires. She teaches doubles to dowagers now, and when she thinks no one is watching she serves alone at dusk, ball after ball after ball, like a woman posting letters to a younger self.</p>
<p><strong>JULIAN ASHCOMBE-PRYCE</strong>, the club treasurer and heir to its presidency — thirty-four, beautiful in the slightly ruined way of a country house with a leaking roof. He can charm a committee, a creditor, and a wasp out of a jam jar. He has been in love with Margot for three summers and has hidden it behind so many jokes that the jokes have started to crack.</p>
<p><strong>THEO MARSH</strong>, head groundskeeper — thirty-six, hands like a working drawing of hands, says perhaps forty words a day and means all of them. The lawns he keeps are the finest in England. Eleven years ago he was ranked 48 in the world. Nobody at the club knows why he stopped. Margot knows. The way they don't look at each other is the loudest thing in the county.</p>
<p>You watched the three of them orbit one another all week — Margot and Julian trading volleys of wit at the bar; Margot and Theo standing two feet apart by the rollers, saying nothing at the top of their voices; Julian and Theo, civil as treaties, each privately certain the other is the obstacle.</p>
<p>You'd have written about it, if anyone would print the truth about people this easy to love.</p>`,
    },
    {
      heading: "Tonight",
      text: `<p>Tonight the storm came in off the wolds like an opinionated relative. At the first crack of thunder the power failed, and Hartcombe's celebrated security system — installed 1911, serviced never — threw its iron bolts across every door in the clubhouse with a sound like a butler clearing his throat.</p>
<p>At 9:47 p.m., somewhere in the dark, Sir Reginald Pemberton-Cole's heart stopped.</p>
<p>At 10:13, you found him in the Trophy Room — face down beneath the great scoreboard, one hand at his chest, a glass of Pimm's spilt across the parquet. Above him, the scoreboard had been set, deliberately, lovingly, to:</p>
<p class="scoreboard-quote">LOVE &ndash; ALL</p>
<p>Your mobile is at the bottom of the plunge pool, where Reggie's labrador, Ace, deposited it on Tuesday. The staff went home before the storm. The only other people locked inside Hartcombe tonight are Margot, Julian, Theo — and Lady Cressida Pemberton-Cole, the chairman's wife, who is in the Reading Room doing the crossword and has asked not to be disturbed "unless the building actually catches fire, darling."</p>
<p>The village constabulary will arrive when the ford clears. Dawn, at the earliest. The doors can be opened the old way — each one has its lock, each lock its little ritual — if you can think like the club thinks.</p>
<p>You have until dawn to get out.</p>
<p>And because you are a journalist, and because you have spent a week falling slightly in love with three people who each, you are quite sure, had a reason to want Reggie dead — you are going to find out what happened before the police decide it for you.</p>
<p><em>Play begins. Love all.</em></p>`,
    },
  ],

  /* ---------- ITEMS / EVIDENCE ---------- */

  evidence: {
    ev_pills:      { name: "Reggie's pill bottle", icon: "💊", desc: "Digoxin, says the label — his heart pills, one at quarter-to-ten, every night of his tyrannical life. But the pills inside are wrong: chalky, hand-pressed, faintly bitter, faintly… botanical. Somebody made these. Somebody who knows a garden." },
    ev_glass:      { name: "The Pimm's glass", icon: "🍹", desc: "Spilt by the body. Under the fruit and the gin there's another smell — valerian. A sleeping draught. Enough to make a man drowsy and slow. Not nearly enough to kill him. Two different people interfered with Reggie's evening. Only one of them meant it." },
    ev_bracelet:   { name: "Margot's charm bracelet", icon: "📿", desc: "Found under the trophy cabinet, six feet from the body. A tiny gold racquet, a strawberry, a ballet shoe, and a charm shaped like the number 48. She was in this room tonight. The clasp is broken — it didn't come off gently." },
    ev_note:       { name: "Note in Reggie's pocket", icon: "📝", desc: "Margot's handwriting, torn from a lesson ledger: '9:45. The Trophy Room. Bring the file, or I bring the Herald journalist. — M.' She summoned him. He came. He died." },
    ev_crossword:  { name: "Lady Cressida's crossword", icon: "🖋️", desc: "Abandoned on the wing chair, her fountain pen still uncapped. Four down: 'Foxglove's gift to cardiology (9).' She has filled it in, in her flawless looping hand: DIGITALIS. The rest of the puzzle is untouched. It is the only answer she needed." },
    ev_ledger:     { name: "Page from the honesty book", icon: "📒", desc: "The bar's honesty ledger, with a page half torn out. What remains shows Julian's initials against sums that climb like a fever chart — and a final entry in Reggie's red ink: 'J.A-P. — we shall discuss the Restoration Fund at 8:30. Bring your chequebook or your resignation. Ideally both.'" },
    ev_cloth:      { name: "Bar cloth & second glass", icon: "🥃", desc: "Hidden behind Reggie's portrait: a bar cloth and a Pimm's glass, wiped clean and stashed in a panic. Someone found the body before you did — and instead of raising the alarm, they tidied the scene. Protecting themselves? Or someone else?" },
    ev_bookie:     { name: "Letter from Aldgate & Sons", icon: "✉️", desc: "Turf accountants, which is what bookmakers call themselves when they write on headed paper. Julian owes them £40,000. The letter is dated last month. The Restoration Fund is short by — what a coincidence — £40,000." },
    ev_diary:      { name: "Margot's diary", icon: "📔", desc: "The whole truth in green ink: the blackmail, the valerian, the safe, the file. She drugged Reggie's drink to steal back her own life. She never touched him. She has been carrying all three of them — herself, Julian, Theo — like a woman carrying water in her hands." },
    ev_file:       { name: "The blackmail file", icon: "🗂️", desc: "Reggie's file on Margot, taken from his study safe tonight. The 2015 doping result — and a private lab letter, dated a week earlier, arranging the false positive. She refused the Chairman's 'patronage', so he ended her career and kept the receipts. Ten years of leverage, in a manila folder." },
    ev_draught:    { name: "Bottle of valerian draught", icon: "🧪", desc: "From Margot's locker. Half-empty. The chemist's label is dated this week. It matches the smell on the Pimm's glass exactly. A sedative — gentle, grandmotherly, absolutely not fatal. Whatever killed Reggie, it wasn't this." },
    ev_cutting:    { name: "Press cutting, 2014", icon: "📰", desc: "'MARSH, 48 IN WORLD, WITHDRAWS FROM TOUR — mystery injury cited.' Pinned beneath it, a solicitor's letter on Pemberton-Cole notepaper offering Theo 'a generous settlement contingent on his permanent retirement and his permanent silence.' Reggie didn't just end Margot's career. He collected." },
    ev_groundsdiary:{ name: "The grounds diary", icon: "🌿", desc: "Theo's daily log, weather and soil and small dry jokes. Tuesday: 'Somebody's been at the foxgloves in the Chairman's border. Cut clean, low down, gloves on. If it's rabbits, they're organised.' Foxglove. Digitalis. Somebody harvested the murder weapon from Reggie's own flower bed, four days before he died." },
    ev_keylog:     { name: "The key cupboard log", icon: "🔑", desc: "Every key at Hartcombe is signed in and out, because of course it is. The scoreboard cupboard key — needed to set the great scoreboard — was signed out at 9:30 tonight. The signature is small, looping, flawless: C. P-C. Lady Cressida set the score to LOVE–ALL herself, while her husband was dying under it." },
    ev_secateurs:  { name: "Monogrammed secateurs", icon: "✂️", desc: "Found wiped and put away in the shed — but in the wrong slot, and Theo's shed does not have wrong slots. Silver-handled, engraved C.P-C. Best Border, eleven years running. Lady Cressida always did her own pruning." },
  },

  letters: {
    lt_julian: {
      name: "Julian's unsent letters", icon: "💌",
      body: `<p class="letter-meta">Seven drafts, increasingly honest, folded into the breast pocket of a blazer that smells of cedar and lost causes.</p>
<p><em>Draft one:</em> "Dear Margot — The committee wishes to inform you that your backhand slice is a public menace and your eyes are a private one—" <span class="struck">struck through</span></p>
<p><em>Draft three:</em> "Margot. I am writing this at the bar, which tells you everything about my courage. You laughed at something I said on Thursday and I have been living in that laugh like a tenant who can't pay the rent—" <span class="struck">struck through</span></p>
<p><em>Draft six:</em> "I know about you and Marsh. I've known since May, when the rain came during the exhibition match and you both stood under the pavilion eave not touching, and I watched two people not-touch harder than I have ever managed to touch anyone. I'm not writing to compete. I'm writing because I think you should know that being near you has made me want to be the kind of man whose letters get finished—" <span class="struck">struck through</span></p>
<p><em>Draft seven, unstruck:</em> "Margot. Reggie knows something about you. He said so tonight, smiling, the way he smiles. Whatever it costs to make him stop, I'll pay it. I'm rather good at owing money. It would be a relief to owe it for something that matters. — J."</p>`,
    },
    lt_diary: {
      name: "Margot's diary", icon: "📔",
      body: `<p class="letter-meta">Green ink. The handwriting of a woman who has decided to stop apologising.</p>
<p><em>14 June.</em> Julian asked me to swim in the lake after the committee dinner and I said yes because the moon was being persuasive. He held the champagne above the water like a butler in a shipwreck and made me laugh so hard I went under. When I came up he was looking at me the way you look at the last point of a long match — like everything before it was just getting here. I touched the scar on his jaw and he went completely silent, which from Julian is a declaration with trumpets. I am in trouble.</p>
<p><em>18 June.</em> Rain delay. Theo and I waited it out in the pavilion like we did eleven years ago in qualifying, when we were twenty and immortal and shared one umbrella and one ambition. He re-strung my racquet without asking — he keeps my tension written in his diary, after all these years, 52 pounds, like a vow. When he handed it back our hands overlapped on the grip and neither of us moved and the rain kept score. Eleven years, and my body remembers him the way grass remembers a court. I am in trouble twice.</p>
<p><em>20 June.</em> The unbearable thing is that it isn't a choice between a good man and a bad one. Julian is summer — all light and noise and the ache of things ending. Theo is the ground. You don't choose between summer and the ground. You just go on standing in one, on the other, until the weather decides.</p>
<p><em>21 June, late.</em> Reggie called me to his study. He has had the file out again. He patted the sofa beside him and said careers can be re-made by a generous patron, the way they were once unmade by one. I said I would rather lose everything twice. He said, "You will, dear, you will," and ate a strawberry.</p>
<p><em>Tonight.</em> Valerian in his Pimm's — half the draught, enough to make him sleep through his own pomposity, not enough to hurt him, I checked it twice with the chemist's book, I am not him. While he dozes in the Trophy Room I take the file from the safe and burn ten years of his hands on my life. Then I tell Theo it's done, and I tell Julian the truth, and tomorrow — tomorrow, for the first time since I was twenty, the score is love all.</p>`,
    },
    lt_theo: {
      name: "Theo's unsent letter", icon: "🪵",
      body: `<p class="letter-meta">One page, written once, never redrafted. Kept in the bench drawer under the whetstone, where his hands would find it every day.</p>
<p>"Margot.</p>
<p>I'm not writing to take you from anyone. Ashcombe-Pryce makes you laugh and laughing is half of living, I know that, I'm not a stone, whatever the committee thinks.</p>
<p>I'm writing because you asked me once why I stopped, and I let you believe it was my knee, and you knew it wasn't, and you let me keep the lie because you are kinder than this place deserves. It was him. He paid me to disappear because I'd seen the lab letter on his desk — I knew what he did to you in '15, and he knew I knew, and he priced my silence at one career, mine. I took it. I took it because he swore that if I spoke he'd ruin you a second time and make it stick. I have spent eleven years mowing his grass so I could stay close enough to stand between you and him. That is the whole of my life and I find I don't regret it.</p>
<p>He's worse now. Tonight I'm going to tell him it's finished — the file, the smiling, all of it. Don't be anywhere near the Trophy Room at quarter to ten.</p>
<p>If you ever read this: the tension on your racquet is 52. It has always been 52. Some things I get to keep.</p>
<p>— T."</p>`,
    },
    lt_photo: {
      name: "The torn photograph", icon: "📸",
      body: `<p class="letter-meta">Two halves, one scorched from the Trophy Room grate, one kept flat under glass in a groundskeeper's drawer for eleven years.</p>
<p>Joined, they show a qualifying court in 2014: Margot at twenty, mid-laugh, ponytail mid-flight; Theo at twenty-five, looking not at the camera but at her, with an expression he has since taught his face never to repeat. On the back, in pencil, in his hand: <em>"Roehampton. Best day."</em></p>
<p>Reggie kept the original in his blackmail file and burned it tonight in front of Theo — you can picture the smile — to show him exactly how much of the past he owned.</p>
<p>He was wrong about that, as it turns out. Theo had a copy. Reggie only ever owned the half of things.</p>`,
    },
  },

  /* ---------- ROOMS ---------- */

  rooms: {

    /* ====== ROOM 1 : THE TROPHY ROOM ====== */
    trophy: {
      name: "The Trophy Room",
      time: "10:13 P.M.",
      weather: "storm",
      intro: `<p>Silver everywhere, a century of it, throwing back your candle in a hundred small accusations. Rain machine-guns the leaded windows. Sir Reginald Pemberton-Cole lies beneath the great manual scoreboard exactly as you found him — and the scoreboard says <strong>LOVE&nbsp;–&nbsp;ALL</strong>, which Reggie would have hated, because Reggie never in his life conceded that anyone was equal to anyone.</p>
<p>The oak door to the Members' Bar is bolted. Its lock is a brass four-digit dial, polished by a hundred years of self-importance.</p>`,
      hotspots: [
        {
          id: "body", label: "Sir Reginald", icon: "🪦",
          text: `<p>You kneel by the chairman. Sixty-eight years of certainty, ended mid-stride. No wound, no blood — one hand clutched at his chest, the other flung out toward the spilt Pimm's as if even in death he expected someone to fetch him another.</p>
<p>By his hand: his <strong>pill bottle</strong>, uncapped. Digoxin — his heart pills, one at 9:45 sharp every evening; the whole club set its watch by Reggie's valves. But the pills inside are wrong. Chalky. Hand-made. Bitter-smelling, like a garden with a grudge.</p>
<p>The <strong>Pimm's glass</strong> has rolled against his cufflink. Under the mint and the orange peel: valerian. Someone wanted him asleep. Someone else wanted him dead. It is going to be a long night.</p>`,
          evidence: ["ev_pills", "ev_glass"],
        },
        {
          id: "scoreboard", label: "The great scoreboard", icon: "🎾",
          text: `<p>Oak and brass, tall as a hayrick, the kind of scoreboard that gets polished more often than the silver. The number plates have been hand-set to <strong>LOVE – ALL</strong>.</p>
<p>Reggie didn't set it — the scoreboard cupboard is locked and its key lives in the groundskeeper's key cupboard, signed in and out like everything at Hartcombe. Somebody fetched that key tonight, came in here, and composed a message over a dying man.</p>
<p>"Love all." The score at which nothing has been lost and everything is still possible. Or, if you say it in a colder voice: <em>in tennis, love means nothing.</em></p>`,
        },
        {
          id: "cabinet", label: "Under the trophy cabinet", icon: "🏆",
          text: `<p>Your candle catches a glint beneath the great cabinet — not silver. Gold. You fish it out with a fire iron.</p>
<p>A charm bracelet. A tiny racquet, a strawberry, a ballet shoe, and the number <strong>48</strong> — Theo's old world ranking, worn on Margot's wrist where anyone could see it and no one ever understood it. You have seen it on her arm every day this week.</p>
<p>The clasp is snapped. She was here tonight, and she left in a hurry, or a struggle, or a panic. Your heart does something unprofessional.</p>`,
          evidence: ["ev_bracelet"],
        },
        {
          id: "blazer", label: "Reggie's blazer pocket", icon: "🧥",
          text: `<p>Searching a dead chairman's pockets feels like the sort of thing that gets one's membership reviewed. You do it anyway. Journalism.</p>
<p>Inside: a fountain pen, a strawberry (pocketed whole, the absolute man), and a folded note in handwriting you recognise from the lesson ledger — Margot's.</p>
<p><em>"9:45. The Trophy Room. Bring the file, or I bring the Herald journalist. — M."</em></p>
<p>She summoned him here, to the minute of his death — and apparently you were her threatened next move. You feel obscurely honoured and deeply implicated, which is the natural condition of the press.</p>`,
          evidence: ["ev_note"],
        },
        {
          id: "armchair", label: "The wing chair", icon: "🪑",
          text: `<p>By the cold fireplace, a wing chair with a tartan rug, a glass of sherry, and tonight's <em>Telegraph</em> crossword — Lady Cressida's evening encampment, abandoned when (she says) she went to find more light and instead found you finding her husband.</p>
<p>Her fountain pen lies uncapped, which is unlike her. The crossword is blank except for a single answer. Four down: <em>"Foxglove's gift to cardiology (9)."</em></p>
<p>In her flawless looping copperplate: <strong>D I G I T A L I S</strong>.</p>
<p>One clue solved, out of the whole puzzle. As if it was the only one she'd been thinking about for weeks.</p>`,
          evidence: ["ev_crossword"],
        },
        {
          id: "fireplace", label: "The fireplace grate", icon: "🔥",
          text: `<p>The fire is out but the grate is fresh — someone burned something here tonight, recently enough that the ash still holds its shape like a held breath.</p>
<p>One corner survived: a scorched scrap of photograph. A young man's shoulder in tennis whites, a chain-link fence, the edge of a qualifying-court banner. On the back, half a pencilled word: <em>"…hampton."</em></p>
<p>Somebody burned a memory in front of somebody else tonight. You pocket the corner. Memories deserve witnesses.</p>`,
          flag: "hasBurnedPhoto",
        },
        {
          id: "honours", label: "The honours board", icon: "📜",
          text: `<p>Gold leaf, floor to ceiling: every Gentlemen's Singles champion since 1894. One entry has been regilded so many times it bulges from the board like a vein:</p>
<p class="plaque">GENTLEMEN'S SINGLES, 1987<br>R. PEMBERTON-COLE d. THE HON. P. FFOLKES<br><strong>6–1, 6–4</strong></p>
<p>Beneath it, a small brass plate Reggie added himself: <em>"The only score that ever mattered."</em> Members will tell you, after two gins, that ffolkes double-faulted match point away the week Reggie's father reviewed his mortgage. At Hartcombe even the antiques are suspects.</p>
<p>The brass dial on the bar door has four digits. Reggie chose the combination. Reggie only ever loved one number.</p>`,
        },
        {
          id: "door_trophy", label: "Oak door to the Members' Bar", icon: "🚪",
          puzzle: "pz_trophy",
          lockedLabel: "Oak door — brass four-digit dial",
          openLabel: "Through to the Members' Bar →", goto: "bar",
        },
      ],
    },

    /* ====== ROOM 2 : THE MEMBERS' BAR ====== */
    bar: {
      name: "The Members' Bar",
      time: "11:02 P.M.",
      weather: "storm",
      intro: `<p>Panelled in walnut and self-regard. Reggie's portrait glowers over the optics, painted, by the look of it, by an artist he was suing. Lightning strobes the empty stools. On the bar: a half-built jug of Pimm's, abandoned mid-ceremony, the cucumber still on the board like evidence at a very genteel crime scene — which, you remind yourself, it is.</p>
<p>The far exit to the locker corridor is barred by the wine cage gate: a three-digit lock. A small brass sign above it reads, in the club's usual tone: <em>"The answer, as always, is in the Cup."</em></p>`,
      hotspots: [
        {
          id: "honesty", label: "The honesty book", icon: "📒",
          text: `<p>The bar runs on the honour system, an arrangement the committee describes as "civilised" and the accountant describes as "load-bearing fiction."</p>
<p>A page has been torn out — raggedly, tonight, by someone in a hurry. What remains is bad enough: <strong>J.A-P.</strong> against sums that climb from "a bottle of the '09" to figures with commas in them. And the final entry, in Reggie's territorial red ink:</p>
<p><em>"J.A-P. — we shall discuss the Restoration Fund at 8:30 this evening. Bring your chequebook or your resignation. Ideally both."</em></p>
<p>8:30. Ninety minutes before Reggie's heart gave out. The barman's cat heard that conversation and has declined to comment.</p>`,
          evidence: ["ev_ledger"],
        },
        {
          id: "blazer_j", label: "Julian's blazer, on its hook", icon: "🧥",
          text: `<p>Julian's blazer hangs by the bar the way Julian leans on it — beautifully, and as if it might be asked to leave. You check the pockets and immediately learn more about him than three summers of his jokes ever allowed.</p>
<p>One: a letter from <strong>Aldgate &amp; Sons, Turf Accountants</strong> — which is what bookmakers call themselves when they write on headed paper. He owes them forty thousand pounds. The Restoration Fund, you recall from the honesty book's red ink, is short by exactly that.</p>
<p>Two: a casino chip from Deauville, worn smooth as a saint's medal, clearly carried for luck. The luck, you gather, did not honour the arrangement.</p>
<p>Three: seven drafts of a letter to Margot.</p>`,
          evidence: ["ev_bookie"],
          letter: "lt_julian",
        },
        {
          id: "portrait", label: "Reggie's portrait", icon: "🖼️",
          text: `<p>The portrait hangs an inch off true, which in this club is practically a fire alarm. You swing it out on its hinge.</p>
<p>No safe behind it — just a gap in the panelling, and stuffed into the gap, still faintly damp: a <strong>bar cloth</strong> and a <strong>second Pimm's glass</strong>, wiped clean and hidden in a hurry by someone whose hands, you'd wager, were shaking.</p>
<p>So someone found Reggie before you did. And instead of shouting the house down, they took a glass from the scene, polished away whatever it carried — fingerprints, valerian, both — and hid it behind the man's own portrait. That isn't what guilt does. Guilt runs. That is what <em>love</em> does. Love tidies up.</p>`,
          evidence: ["ev_cloth"],
        },
        {
          id: "pimms", label: "The Pimm's station", icon: "🍓",
          text: `<p>The club's ceremonial Pimm's recipe is framed beside the optics, calligraphed like a treaty:</p>
<p class="plaque">THE HARTCOMBE CUP<br>Take <strong>1</strong> measure of Pimm's No. 1.<br>Add <strong>3</strong> of lemonade — no more, we are not animals.<br>Build over <strong>8</strong> cubes of ice, garnish with borage,<br>and serve to whomever is being unbearable.</p>
<p>Someone has underlined the three numbers in pencil, presumably a barman who got tired of being asked. <em>"The answer, as always, is in the Cup."</em></p>`,
        },
        {
          id: "radio", label: "The wireless", icon: "📻",
          text: `<p>A Bakelite wireless older than the monarchy, running gamely off its battery. You catch the local shipping-adjacent forecast:</p>
<p><em>"…ford at Hartcombe impassable until first light. Police advise residents to remain indoors, avoid fallen lines, and refrain from solving anything themselves—"</em></p>
<p>You switch it off. The press has never once taken that advice.</p>`,
        },
        {
          id: "door_bar", label: "Wine cage gate to the locker corridor", icon: "🚪",
          puzzle: "pz_bar",
          lockedLabel: "Wine cage gate — three-digit lock",
          openLabel: "Through to the locker corridor →", goto: "locker",
        },
      ],
    },

    /* ====== ROOM 3 : THE LOCKER ROOM ====== */
    locker: {
      name: "The Locker Room",
      time: "12:41 A.M.",
      weather: "storm",
      intro: `<p>Cedar and liniment and a hundred years of post-match honesty. Brass nameplates, white towels in regimental stacks, and a sign over the plunge pool: <em>"MEMBERS ARE REMINDED THAT SCREAMING IS A LADIES' SEMI-FINAL PRIVILEGE ONLY."</em> Somewhere down there, in the dark water, your mobile phone keeps its counsel.</p>
<p>At the corridor's end, the old members' gate to the grounds — a five-letter word lock, with a riddle on a brass plaque, because Hartcombe has never once missed a chance to be insufferable.</p>`,
      hotspots: [
        {
          id: "poster", label: "Framed poster: Junior Wimbledon 2013", icon: "🖼️",
          text: `<p>Yellowed and sun-struck, but the headline still sings:</p>
<p class="plaque">VANE TAKES THE TITLE<br>M. VANE d. KOVAČ<br><strong>6–4, 3–6, 7–5</strong><br>"The future arrived at half past four."</p>
<p>Margot at nineteen, arms up, face open in a way you have never seen it. Someone — staff legend says Margot herself, after a brandy — has written in pencil along the bottom: <em>"the only numbers I'd trust with my life."</em></p>`,
        },
        {
          id: "mlocker", label: "Margot's locker", icon: "🔒",
          puzzle: "pz_locker",
          lockedLabel: "M. VANE — six-digit combination padlock",
          openText: `<p>The locker breathes out lavender and racquet glue. Whites on their hanger, three racquets — and, wrapped in a towel at the back, the night's whole confession:</p>
<p>A chemist's bottle of <strong>valerian draught</strong>, half empty, label dated this week. A manila <strong>file</strong> with Reggie's study-safe stencil on it. And her <strong>diary</strong>, green ink, which you read standing up, with the candle guttering, feeling like a burglar in a cathedral.</p>`,
          evidence: ["ev_draught", "ev_file", "ev_diary"],
          letter: "lt_diary",
        },
        {
          id: "mirror", label: "The long mirror", icon: "🪞",
          text: `<p>Across the glass, in lipstick — a shade the chemist in the village stocks as <em>Crushed Strawberry</em> — a message in flawless looping copperplate:</p>
<p class="plaque">"Good luck in the final, darling. Somebody here deserves to win. — C."</p>
<p>Lady Cressida's hand. Written before tonight, by the dust on it. You stare at it a long moment. As messages from the chairman's wife go, it manages to be warm, sad, and faintly tactical all at once — like a hug from a chess piece.</p>`,
        },
        {
          id: "steam", label: "The steam room", icon: "♨️",
          text: `<p>Dark, tiled, and silent. A sign on the door: <em>"OUT OF ORDER SINCE THE CORONATION (THE PREVIOUS ONE)."</em></p>
<p>You check it anyway, candle first, pulse loud. Nothing but a forgotten sock and the special acoustics of your own breathing. You leave with dignity, at speed.</p>`,
        },
        {
          id: "door_locker", label: "Members' gate to the grounds", icon: "🚪",
          puzzle: "pz_deuce",
          lockedLabel: "Members' gate — five-letter word lock",
          openLabel: "Out into the night, toward the groundskeeper's shed →", goto: "shed",
        },
      ],
    },

    /* ====== ROOM 4 : THE GROUNDSKEEPER'S SHED ====== */
    shed: {
      name: "The Groundskeeper's Shed",
      time: "3:18 A.M.",
      weather: "clearing",
      intro: `<p>The storm is spending its last temper over the wolds. You cross the dark lawns — Theo's lawns, striped even in lightning — to the shed, which is less a shed than a chapel: every blade hung true, every tin labelled, a place where a man has put eleven years of unsaid things into straight lines.</p>
<p>Through the window you can see the Chairman's Border, Lady Cressida's prize flower bed, silver under the racing moon. Beyond the shed, the gate to Centre Court — its lock is the ball machine itself, some old groundskeeper's joke: feed it the right service pattern and it spits out the gate key. Hartcombe to the last.</p>`,
      hotspots: [
        {
          id: "gdiary", label: "The grounds diary", icon: "🌿",
          text: `<p>Weather, soil temperatures, mowing heights — and, in the margins, the driest wit in the county. <em>"Committee walked on the east lawn again. Considering landmines."</em></p>
<p>Then, Tuesday — four days before the murder:</p>
<p class="plaque">"Somebody's been at the foxgloves in the Chairman's border. Cut clean, low down, gloves on. If it's rabbits, they're organised."</p>
<p>Foxglove. <em>Digitalis.</em> The very word waiting in Lady Cressida's crossword, the very poison that could stop a digoxin heart in its tracks while looking like the man's own medicine. Somebody harvested the murder weapon from Reggie's own garden, days in advance, with gloves on. This was never a crime of passion. This was pruning.</p>`,
          evidence: ["ev_groundsdiary"],
        },
        {
          id: "keycupboard", label: "The key cupboard & log", icon: "🔑",
          text: `<p>Forty hooks, forty keys, and a log where every borrowing is signed, because Hartcombe trusts its members the way a casino trusts arithmetic.</p>
<p>The <strong>scoreboard cupboard key</strong> is back on its hook — but the log says it travelled tonight. Signed out at <strong>9:30 p.m.</strong>, seventeen minutes before Reggie's heart stopped. Returned at ten. The signature is small, looping, flawless:</p>
<p class="plaque">C. P-C.</p>
<p>Lady Cressida walked through the storm, fetched the key, and set the great scoreboard to LOVE–ALL over her dying husband — then went back to her crossword. You think of the lipstick on the mirror. <em>Somebody here deserves to win.</em></p>`,
          evidence: ["ev_keylog"],
        },
        {
          id: "secateurs", label: "The tool wall", icon: "✂️",
          text: `<p>Every tool hangs over its own painted silhouette, an honesty system for steel. One pair of secateurs sits in the wrong slot — wiped, oiled, and put back <em>almost</em> right, by someone tidy but not shed-tidy.</p>
<p>Silver handles. Engraved: <strong>C.P-C.</strong> Best Border, eleven years running; Lady Cressida always did her own pruning, the village will tell you, with a kind of awe.</p>
<p>Cut clean, low down, gloves on. You look out the window at the foxgloves standing in the moonlight like tall, elegant witnesses.</p>`,
          evidence: ["ev_secateurs"],
        },
        {
          id: "bench", label: "Theo's workbench", icon: "🪵",
          text: `<p>A stringing machine, burr-less and oiled. Taped to its arm, a card in pencil: tensions for half the club — and at the top, above the committee, above the champions: <em>"M.V. — 52. Always."</em></p>
<p>In the drawer beneath the whetstone, where a hand would fall on it every day for eleven years: one letter, written once, never sent.</p>`,
          letter: "lt_theo",
        },
        {
          id: "drawer", label: "The bottom drawer", icon: "📰",
          text: `<p>Under seed catalogues, face down, flat under glass like something pressed: a press cutting from 2014 — <em>"MARSH, 48 IN WORLD, WITHDRAWS FROM TOUR."</em> Clipped to it, a solicitor's letter on Pemberton-Cole paper, offering Theo a settlement "contingent on permanent retirement and permanent silence."</p>
<p>And beneath that — the other half of a torn photograph. A qualifying court. A girl mid-laugh, ponytail mid-flight.</p>`,
          evidence: ["ev_cutting"],
          needsFlagForBonus: "hasBurnedPhoto",
          bonusLetter: "lt_photo",
          bonusText: `<p>You take the scorched corner from your pocket — the young man's shoulder, the half-word <em>"…hampton"</em> — and lay it against the half from the drawer. The tear lines meet like a net cord deciding, after all, to let the ball over.</p>`,
        },
        {
          id: "machine_clue", label: "Card pinned over the door", icon: "📌",
          text: `<p>A weathered index card, pinned where a man would see it on his way out to morning mowing. Theo's pencil:</p>
<p class="plaque">"His Nibs' serve, the only honest thing about him:<br><strong>WIDE — BODY — WIDE — DOWN THE T.</strong><br>Eleven years and he's never once varied it.<br>Neither has anything else."</p>`,
          flag: "hasServeClue",
        },
        {
          id: "door_shed", label: "The ball machine — gate lock to Centre Court", icon: "🚪",
          puzzle: "pz_machine",
          lockedLabel: "Ball machine — feed it the right service pattern",
          openLabel: "Through the gate. Centre Court, at dawn →", goto: "court",
        },
      ],
    },

    /* ====== ROOM 5 : CENTRE COURT ====== */
    court: {
      name: "Centre Court, Dawn",
      time: "5:56 A.M.",
      weather: "dawn",
      intro: `<p>The storm has wrung itself out. The east is going strawberry and cream at the rim, and Centre Court lies under its dew like something newly forgiven. Your night of locks and letters has ended where every Hartcombe story ends — between the white lines.</p>
<p>They are all here, drawn out by the grey light and the sound of the gate: <strong>Margot</strong>, barefoot on the baseline, wearing the night like a borrowed coat. <strong>Julian</strong>, tie gone, holding two cups of terrible vending-machine tea as a peace treaty with the universe. <strong>Theo</strong>, by the net post, still as the net post. And in the umpire's chair, having climbed it with no great urgency, <strong>Lady Cressida Pemberton-Cole</strong>, completing her crossword in the improving light.</p>
<p>Across the grounds, blue lights at the ford. The police will be here in minutes. Margot looks at Theo, who is looking at Julian, who is looking at Margot, and all three of them — you would stake the byline on it — believe they are protecting one of the others from the gallows.</p>
<p>"Well," says Lady Cressida, not looking up. "You've had quite the evening, haven't you. I do hope you're not going to be tiresome about it."</p>
<p>You open your casebook. Time to call the score.</p>`,
      hotspots: [
        { id: "accuse", label: "Call the score — name the killer", icon: "⚖️", accuse: true },
      ],
    },
  },

  /* ---------- PUZZLES ---------- */

  puzzles: {
    pz_trophy: {
      type: "code", length: 4, answer: "6164",
      title: "The oak door",
      prompt: `<p>A brass dial, four digits. Above it, a strip of Dymo tape that some long-suffering secretary punched out decades ago:</p>
<p class="plaque">"THE CHAIRMAN'S FINEST HOUR."</p>
<p>Reggie chose this combination. Reggie loved exactly one score in his entire life, and he had it regilded annually.</p>`,
      placeholder: "• • • •",
      success: `<p>The bolts draw back with a sound like a butler conceding a point. 6–1, 6–4: even his locks were trophies. The Members' Bar exhales fifty years of cigar smoke at you, and you step through.</p>`,
      failure: "The dial gives a small, contemptuous click. Wrong score. Reggie would be insufferable about this.",
      hints: [
        "His finest hour is on the honours board — the 1987 final he never stopped re-gilding.",
        "Take the score of that final and read its four digits in order.",
        "6–1, 6–4. Enter 6164.",
      ],
    },
    pz_bar: {
      type: "code", length: 3, answer: "138",
      title: "The wine cage gate",
      prompt: `<p>Three digits. The brass sign over the gate has been polished smug:</p>
<p class="plaque">"The answer, as always, is in the Cup."</p>`,
      placeholder: "• • •",
      success: `<p>The cage swings wide. One part Pimm's, three parts lemonade, eight cubes of ice — the club's entire moral philosophy, and now its security policy. Beyond, the locker corridor smells of cedar and old victories.</p>`,
      failure: "Nothing. Perhaps you are not making the Cup correctly. The committee would have views.",
      hints: [
        "The Cup is the Hartcombe Cup — the framed Pimm's recipe by the optics.",
        "Three numbers are underlined in the recipe, in order of pour.",
        "1 measure, 3 parts, 8 cubes. Enter 138.",
      ],
    },
    pz_locker: {
      type: "code", length: 6, answer: "643675",
      title: "M. Vane — combination padlock",
      prompt: `<p>Six digits guard Margot's locker. On the framed poster across the corridor, someone has pencilled: <em>"the only numbers I'd trust with my life."</em></p>`,
      placeholder: "• • • • • •",
      success: `<p>The padlock falls open on the third tumbler like a held breath let go. You hesitate — this is her life in a steel box — and then you remember the bracelet under the cabinet, and the note in a dead man's pocket, and you open the door. If she's innocent, the truth is her best lawyer. If she isn't… you'd rather know tonight, from her own hand.</p>`,
      failure: "The padlock doesn't move. Whatever numbers Margot trusts with her life, those weren't them.",
      hints: [
        "The numbers she'd trust with her life are on the Junior Wimbledon poster.",
        "Take the three set scores of the 2013 final, in order, as digits.",
        "6–4, 3–6, 7–5. Enter 643675.",
      ],
    },
    pz_deuce: {
      type: "code", length: 5, answer: "DEUCE", alpha: true,
      title: "The members' gate",
      prompt: `<p>A five-letter word lock, and a brass plaque worn soft by a century of thumbs:</p>
<p class="plaque">"WE STAND LEVEL AT THE LAST,<br>ALL ADVANTAGE STILL TO PLAY FOR.<br>WHAT ARE WE?"</p>`,
      placeholder: "_ _ _ _ _",
      success: `<p>The five tumblers roll to DEUCE and the gate sighs open onto wet grass and the wreck of the storm. Level at the last, everything still to play for. You'd find it moving if you weren't so frightened of the next hour.</p>`,
      failure: "The tumblers spin and settle, unimpressed. The gate, like the club, requires the precise correct word.",
      hints: [
        "It's a tennis score — the one where both players stand equal.",
        "Five letters. After it comes advantage.",
        "DEUCE.",
      ],
    },
    pz_machine: {
      type: "sequence", answer: ["W", "B", "W", "T"],
      title: "The ball machine lock",
      buttons: [
        { key: "W", label: "Wide" },
        { key: "B", label: "Body" },
        { key: "T", label: "Down the T" },
      ],
      prompt: `<p>Some groundskeeper of the old religion wired the Centre Court gate to the ball machine: feed it a four-stroke service pattern and the key drops. The dial has three settings — <strong>Wide</strong>, <strong>Body</strong>, <strong>Down the T</strong>.</p>
<p>There is exactly one serve at Hartcombe that has never varied in eleven years.</p>`,
      success: `<p>The machine thinks about it, then fires four balls into the netting — wide, body, wide, T, the chairman's whole repertoire — and spits a brass key into the catch tray with what can only be described as relief.</p>
<p>The gate to Centre Court stands open. The sky is turning. Almost dawn. Almost over.</p>`,
      failure: "The machine fires one ball directly at the wall in what feels like commentary, and resets.",
      hints: [
        "Theo pinned a card over the door about a certain serve.",
        "'His Nibs' serve, the only honest thing about him.'",
        "Wide — Body — Wide — Down the T.",
      ],
    },
  },

  /* ---------- THE ACCUSATION ---------- */

  accusation: {
    intro: `<p>The blue lights are at the gatehouse now. Four faces turn to you across the dew: one frightened, one flippant, one carved from patience, one mildly inconvenienced and holding a fountain pen.</p>
<p>Who killed Sir Reginald Pemberton-Cole?</p>`,
    suspects: [
      { id: "margot", name: "Margot Vane", icon: "🎾", line: "Margot lifts her chin, wrists together, half a smile. \"Go on, then. I wrote the note. I poured the valerian. Say it.\"" },
      { id: "julian", name: "Julian Ashcombe-Pryce", icon: "🥂", line: "Julian laughs precisely once. \"Well, I am the one with the motive you can count. Forty thousand of it.\"" },
      { id: "theo", name: "Theo Marsh", icon: "🌿", line: "Theo says nothing, which from Theo is a full confession to something. His knuckles, you notice, are skinned." },
      { id: "cressida", name: "Lady Cressida Pemberton-Cole", icon: "🖋️", line: "Lady Cressida caps her pen. \"Do be careful, dear. Slander is so expensive, and I've recently come into money.\"" },
    ],
    evidencePrompt: `<p>"Evidence, darling," says Lady Cressida from the umpire's chair, pleasantly, the way one says <em>new balls, please</em>. "This is Hartcombe. We don't convict on <em>vibes</em>."</p><p>Choose the three pieces of evidence that name the killer.</p>`,
    keyEvidence: ["ev_pills", "ev_groundsdiary", "ev_keylog", "ev_crossword", "ev_secateurs"],
    minKeyEvidence: 2,
  },

  /* ---------- ENDINGS ---------- */

  endings: {
    wrong_margot: {
      title: "GAME, SET — MISCARRIAGE",
      text: `<p>You say her name, and the court goes very quiet, and Margot — who has spent ten years waiting for the world to blame her again — simply nods, as if a long rally has finally ended the way she always knew it would.</p>
<p>Theo steps in front of her. Julian steps in front of Theo. For one absurd, heartbreaking moment the three of them are a queue, each trying to be arrested first.</p>
<p>The police sort it out in a week — the valerian wasn't lethal, the file proves the blackmail, and a sharp-eyed sergeant finally reads the key log. Margot is released without charge. She doesn't come back to Hartcombe. The last anyone hears, she's coaching in Lisbon, and the dowagers' doubles has never recovered.</p>
<p>Lady Cressida sends her a postcard, care of the federation. It says only: <em>"You were always my favourite, darling. — C."</em></p>
<p>You got the murderer's favourite, and missed the murderer.</p>`,
      retry: true,
    },
    wrong_julian: {
      title: "ADVANTAGE, NOBODY",
      text: `<p>You say his name, and Julian — bless him, damn him — bows, because a lifetime of covering shortfalls with style does not desert a man merely because he's being arrested.</p>
<p>"Naturally," he says. "The chap with the debts. The arithmetic practically convicts me." Only Margot sees his hands shake, and the way she takes one of them changes three lives slightly too late.</p>
<p>He's cleared inside a month — the row at 8:30 was real, the £40,000 was real, but the foxglove pills were pressed by gloved, patient, horticultural hands, and Julian cannot keep a houseplant alive. He repays the Restoration Fund by selling the Deauville chip at auction with a story attached. The story is mostly true.</p>
<p>Lady Cressida, at the trial that never comes, finishes her crossword.</p>`,
      retry: true,
    },
    wrong_theo: {
      title: "FOOT FAULT",
      text: `<p>You say his name, and Theo holds out his wrists without a word, and that is the worst part — he was always going to take it, for her, the way he has taken everything for eleven years, quietly, like weather.</p>
<p>Margot's voice cracks across the court like a line call: "<em>No.</em>" She tells them about the valerian, the safe, the file. Julian, white-faced, produces the wiped glass. The three of them dismantle their own alibis on the spot, each trying to out-confess the others, and the arresting sergeant, a doubles man himself, observes that he has seen better-organised conspiracies among under-tens.</p>
<p>Theo's skinned knuckles turn out to be from the trophy cabinet, which he punched, after Reggie burned the photograph. The shove came later, and the man it floored stood up again — and died of his own pills, an hour after his own wife pruned her way into history.</p>
<p>By the time the truth surfaces, the grass has been mowed by a contractor. Badly. Everyone agrees the stripes have never been the same.</p>`,
      retry: true,
    },
    insufficient: {
      title: "CHALLENGE OVERRULED",
      text: `<p>Lady Cressida hears your evidence the way an umpire hears weather complaints — patiently, terminally.</p>
<p>"Darling," she says at last, "you've brought me a love story and a betting slip. I could weep. I couldn't possibly hang." She descends the umpire's chair, pats your cheek with a gloved hand that smells faintly of roses and a private joke, and goes to greet the police as the bereaved.</p>
<p>The score, she neglects to add, remains love–all. Gather the evidence that prunes; sentiment never convicted anyone at Hartcombe.</p>`,
      retry: true,
    },
    correct: {
      title: "MATCH POINT",
      text: `<p>"Lady Cressida," you say, "you killed your husband."</p>
<p>And you lay it out on the morning air, piece by piece, while the blue lights come up the drive:</p>
<p>The <strong>foxgloves</strong>, cut clean and gloved, from Reggie's own border, four days early — logged by the one man in England who'd notice a flower bed lying. Her <strong>secateurs</strong>, wiped and returned to almost the right slot. The <strong>pills</strong>, hand-pressed digitalis swapped into a digoxin bottle — a death indistinguishable from the heart that everyone, including his cardiologist, agreed Reggie didn't have. The <strong>key log</strong>, where she signed — <em>signed!</em> — for the scoreboard key at 9:30, because forty years at Hartcombe will put procedure in your bones even on the night you murder into the peerage. And the <strong>crossword</strong>, one answer filled in, the word she'd been carrying all season like a seed packet: DIGITALIS.</p>
<p>Silence. Then Lady Cressida laughs — really laughs, head back, the first unguarded sound anyone at this club has heard her make in forty years.</p>
<p>"Oh, <em>well played</em>," she says. "Finally. Somebody at this club who can finish."</p>
<p>She climbs down from the umpire's chair and smooths her skirt. "He took her career" — a nod to Margot — "and his silence" — to Theo — "and he was about to take that lovely idiot's last forty thousand" — Julian inclines his head, professionally — "and for forty years he took mine. My money, my garden, my mornings, my <em>name</em>. I asked him once, in 1986, if he loved me. He said — and I want this in your article, dear — he said, '<em>In tennis, love means nothing.</em>'"</p>
<p>She draws on her gloves, one finger at a time.</p>
<p>"So I grew the foxgloves. Best Border, eleven years running — one does like a project. And last night I set the scoreboard myself, so that whoever found him would know precisely what he died of." A smile like frost on a windowpane. "Love. All of it. Every wasted year."</p>
<p>She walks to meet the police across the dew, pausing only to call back over her shoulder:</p>
<p>"The strawberries want netting by Friday, Mr Marsh. Prison is no excuse for slovenly fruit."</p>`,
      next: "epilogue",
    },
  },

  /* ---------- EPILOGUE ---------- */

  epilogue: {
    intro: `<p>The police take Lady Cressida away in a manner she somehow makes indistinguishable from being valet-parked. Statements are given. The valerian earns Margot a caution and a look of profound professional respect from the sergeant. The Restoration Fund earns Julian a repayment plan and an aunt's-funeral expression from the bank. Theo's skinned knuckles earn him nothing at all, because Theo, characteristically, declines to press charges against a trophy cabinet.</p>
<p>And then it is fully morning, and the three of them are standing on Centre Court in the risen sun, alive and acquitted and looking at each other across the oldest scoreline in the world.</p>
<p>Margot told you once, on the record, that the score at the start of a match is the most honest moment in tennis — nothing lost yet, everything possible. You watch her look from Julian, who is summer, to Theo, who is the ground, and you realise your eight hundred words about strawberries have become the only story you'll ever be ashamed to file.</p>
<p>But this is her point to play. How does it end?</p>`,
    choices: [
      { id: "theo", label: "The ground — Margot & Theo", icon: "🌿" },
      { id: "julian", label: "The summer — Margot & Julian", icon: "🥂" },
      { id: "tour", label: "The tour — Margot, for herself", icon: "✈️" },
    ],
    endings: {
      theo: {
        title: "52, ALWAYS",
        text: `<p>She crosses the court the way she plays it — no hesitation past the decision — and stops a racquet's length from Theo, who has waited eleven years and can manage another four seconds.</p>
<p>"You knew," she says. "All of it. The lab letter. And you stayed and mowed his grass."</p>
<p>"Somebody had to be between you and him," Theo says. The whole speech. The longest he's ever made.</p>
<p>"And the letter in the bench drawer?"</p>
<p>His face does the thing it learned not to do in 2014. "You went through my shed."</p>
<p>"You kept my tension for eleven years," she says, voice finally breaking like weather, "you absolute <em>hedge</em>," and then there is no racquet's length between them at all, and the kiss is eleven years long and tastes of rain delays, and Julian — watch him, this is the part you'll never print — Julian closes his eyes for one breath, then applauds, properly, the way you applaud a winner you couldn't have reached on your best day.</p>
<p>"Drinks are on the honesty book," he announces, to the sky. "Which, as treasurer, I can confirm has long since ceased to mean anything."</p>
<p>They re-marked the lines together that autumn, Margot and Theo, and if you stand at the gate at dusk you can watch them: her serving, him calling them in or out — honestly, always honestly — under a scoreboard somebody never reset.</p>
<p class="final-score">LOVE – ALL</p>`,
      },
      julian: {
        title: "THE CHAMPAGNE DEFENCE",
        text: `<p>She looks at Theo first — and Theo, who has read her face across nets and years and continents, nods once before she has said anything at all, because the ground does not argue with the weather. It is the kindest, most terrible nod you have ever witnessed. He picks up the court key and goes to see to his grass, and his stripes that morning are perfectly straight, which is how he says the unsayable.</p>
<p>Then she walks to Julian, who is holding two cups of vending-machine tea and visibly recalculating his entire life.</p>
<p>"You found him," she says. "You thought I'd done it. And you wiped the glass and hid it behind his own portrait."</p>
<p>"It seemed," says Julian, hoarse, "the sort of thing one does. For — well." He runs out of joke. You watch a man run out of joke after thirty-four years of surplus, and what's underneath is so much better. "For you. Obviously. It was always obviously."</p>
<p>"You'd have gone to prison for me. You can't even go to a <em>cashpoint</em> for you."</p>
<p>"Yes, well." He looks at the tea, then sets both cups down on the umpire's chair with great care, like a man laying down arms. "I'm told love means nothing here. I thought I'd see about that."</p>
<p>She kisses him mid-sentence, which is the only way anyone has ever stopped one of his sentences, and the morning gets on with itself around them.</p>
<p>He paid back every penny by Christmas — turns out the Deauville chip, with provenance and a murder attached, was worth a fortune at auction. The new honesty book has a brass plate on the cover. It reads: <em>"Mostly."</em></p>
<p class="final-score">LOVE – ALL</p>`,
      },
      tour: {
        title: "NEW BALLS, PLEASE",
        text: `<p>She looks at them both for a long moment — summer and the ground, the laugh and the level — and then she looks at the court itself, the white lines running away to the morning, and you see the exact second the match inside her finishes.</p>
<p>"The file's burned," she says. "The man who wrote it is dead and the woman who killed him sends her regards. There is nothing on earth between me and the qualifying draw at Roehampton except being thirty-one." A breath. "And I have it on good authority that thirty-one is the new nineteen, if your serve holds."</p>
<p>Julian recovers first, because recovering first is his sport. "We'll want a banner. Something tasteful. 'HARTCOMBE'S OWN' — none of that, far too possessive — just 'GO ON, THEN.'"</p>
<p>Theo says, "Fifty-two?"</p>
<p>"Fifty-two," she says, "always," and the word lands somewhere it will stay warm.</p>
<p>She qualified at Roehampton in the spring — d. Okonkwo 6–4, 3–6, 7–5, because the universe respects her filing system — and on the first Tuesday of the fortnight the Members' Bar was as quiet as church, every dowager and committee-man crowded round the wireless, while the two men who love her sat side by side at the bar like the world's most overqualified doubles pairing, calling her rallies, refilling each other's glasses, and arguing — gently, eternally — about whose heartbreak had the better backhand.</p>
<p>On the television, before her first service game, the umpire said the oldest sentence in the sport, and the whole bar said it with him, and nobody's eyes were dry and everybody pretended otherwise, this being Hartcombe:</p>
<p class="final-score">LOVE – ALL</p>`,
      },
    },
  },
};
