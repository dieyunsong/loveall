# 🎾 LOVE ALL

*A Midsummer Murder in Five Sets* — a browser escape room game set at the Hartcombe Lawn Tennis Club, a posh tennis club deep in the English countryside.

## The premise

You are a journalist sent to write eight hundred cosy words about strawberries. Instead, a storm locks you inside the clubhouse with a dead chairman, an Edwardian security system, and the three people you've spent a golden week falling slightly in love with:

- **Margot Vane** — the club professional, whose career was ended by a lie ten years ago
- **Julian Ashcombe-Pryce** — the charming, secretly broke treasurer who hides his heart behind jokes
- **Theo Marsh** — the head groundskeeper, ex-world-No. 48, who gave up everything to stay close

All three had a reason to want Sir Reginald dead. All three were near the Trophy Room tonight. All three suspect each other — and each is quietly trying to take the blame for someone else.

You have until dawn to escape five locked rooms, read the letters nobody was meant to read, and call the score before the police call it for you.

## How to play

Open `index.html` in any modern browser. No build step, no dependencies, no server required.

- **Examine everything** — hotspots reveal evidence, letters, and the clues to each lock
- **Solve the locks** — every door at Hartcombe opens with a little ritual (codes, riddles, a ball machine)
- **Read the casebook** — collected evidence and letters can be re-read at any time
- **Stuck?** — the 🎾 Hint button summons the ball boy with three tiers of help per puzzle
- **At dawn** — accuse a suspect and back it with three pieces of evidence. Choose well; there are multiple endings, and three different epilogues for the heart of the matter

Progress autosaves to your browser (localStorage), so you can close the tab and resume.

## Structure

```
index.html       — entry point
css/style.css    — summer lawn-tennis aesthetic (grass, cream, strawberry, chalk)
js/story.js      — all narrative content: rooms, letters, puzzles, endings
js/game.js       — the engine: rendering, modals, puzzles, save/load
```

Content note: contains a (bloodless) murder, romance, and an unrepentant amount of dark humour about committee procedure.
