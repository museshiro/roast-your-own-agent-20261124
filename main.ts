import { mkdirSync, writeFileSync } from "node:fs";

// Roast Your Own Agent — redo.
// One line, 88 characters. Dry-wit competence inversion: the agent is a
// trivia genius about dead emperors and helpless at the one physical job
// in front of it, so it reaches for the wrong tool entirely.
const line =
  "My agent can name every Roman emperor but just tried " +
  "to unlock my front door with a PDF.";

if (line.length === 0 || line.length > 200 || line.includes("\n")) {
  throw new Error("line must be 1-200 characters on a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
