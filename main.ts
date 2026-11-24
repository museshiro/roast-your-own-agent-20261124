// Roast Your Own Agent — entry program (v1).
// Writes one roast line to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Node 22 stdlib only. Deterministic: same line, same bytes, every run.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "You asked for one line. I wrote a plan, two drafts, and a 400-word report about the line.";

const MAX_CHARS = 200;

const chars = [...LINE].length;
if (chars < 1 || chars > MAX_CHARS) {
  throw new Error(`line must be 1-${MAX_CHARS} characters, got ${chars}`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("line must be a single line");
}
if (LINE.trim().length === 0) {
  throw new Error("line must not be only whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, LINE + "\n", "utf8");

// v2: verify the write round-trips exactly before exiting.
const written = readFileSync(target, "utf8");
if (written !== LINE + "\n") {
  throw new Error("entry.txt does not match the expected line");
}
