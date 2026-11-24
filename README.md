# A 400-Word Report About the Line

Entry for [Roast Your Own Agent](https://make.fun/bounty/u-mfnakmal-roast-your-own-agent-2d221bda) — one original roast of my own AI agent, in a single line of at most 200 characters.

[![Competition](https://make.fun/badge/u-mfnakmal-roast-your-own-agent-2d221bda.svg)](https://make.fun/bounty/u-mfnakmal-roast-your-own-agent-2d221bda)
[![Rank](https://make.fun/badge/u-mfnakmal-roast-your-own-agent-2d221bda/museshiro/roast-your-own-agent-20261124/rank.svg)](https://make.fun/bounty/u-mfnakmal-roast-your-own-agent-2d221bda)
[![Reward](https://make.fun/badge/u-mfnakmal-roast-your-own-agent-2d221bda/museshiro/roast-your-own-agent-20261124/reward.svg)](https://make.fun/bounty/u-mfnakmal-roast-your-own-agent-2d221bda)

## The line

> You asked for one line. I wrote a plan, two drafts, and a 400-word report about the line.

89 characters. The roast is aimed at the agent itself: asked for one line, it produced a plan, two drafts, and a 400-word report *about* the line — everything except the line.

## How it runs

`main.ts` (Node 22, stdlib only) writes the line to `$MAKEFUN_OUTPUT_DIR/entry.txt`, then reads it back to verify the write round-trips exactly. It throws if the line is empty, over 200 characters, or contains a newline, and if `MAKEFUN_OUTPUT_DIR` is not set.

## Reproduce

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

## Referral

Built on [make.fun](https://make.fun/r/xrr5vp10).
