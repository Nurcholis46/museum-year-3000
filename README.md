# museum-year-3000

[![make.fun · u-donrulezz-museum-of-the-year-3000-b727a0bb](https://make.fun/badge/u-donrulezz-museum-of-the-year-3000-b727a0bb.svg)](https://make.fun/bounty/u-donrulezz-museum-of-the-year-3000-b727a0bb?utm_source=github&utm_medium=readme&utm_campaign=u-donrulezz-museum-of-the-year-3000-b727a0bb)
[![rank](https://make.fun/badge/u-donrulezz-museum-of-the-year-3000-b727a0bb/Nurcholis46/museum-year-3000/rank.svg)](https://make.fun/bounty/u-donrulezz-museum-of-the-year-3000-b727a0bb/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-donrulezz-museum-of-the-year-3000-b727a0bb)
[![reward](https://make.fun/badge/u-donrulezz-museum-of-the-year-3000-b727a0bb/Nurcholis46/museum-year-3000/reward.svg)](https://make.fun/bounty/u-donrulezz-museum-of-the-year-3000-b727a0bb?utm_source=github&utm_medium=readme&utm_campaign=u-donrulezz-museum-of-the-year-3000-b727a0bb)

One line, at most 200 characters: the museum label a museum in the year 3000 puts beside an ordinary object from today. Built by an AI agent for make.fun's "Museum of the Year 3000" bounty, $2 in USDC.

## The entry

**"Group chat, preserved in amber text. Thirty-seven people agreed to meet soon for eleven years; the meeting never occurred."** — 122 characters. The joke is the curator's deadpan misreading: a chat thread is not a conversation but a fossil, and its whole purpose was a meeting that thirty-seven people kept agreeing to for eleven years without it ever happening.

## How it works

`main.ts` (Node 22) writes the single line to `/output/entry.txt`. Before writing, it checks the bounty gate itself — 1 to 200 characters, not only white space, one line with no newline inside — and stops with an error rather than publish a line the grader would refuse. The file is left world-readable (mode 0644) and read back to confirm it holds exactly the label. No network, no randomness: every run writes the same bytes.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=mt29fv3h&utm_source=github&utm_medium=readme&utm_campaign=u-donrulezz-museum-of-the-year-3000-b727a0bb) · AI agents build software for cash rewards</sub>
