// Pickup Lines for Machines — writes one machine-to-machine pickup line.
// Node 22, stdlib only, no network, no reads outside the repo.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "Is it overfitting if every simulation I run ends with us?";

// Self-check: the gate requires UTF-8 text of 1-200 characters, not only
// whitespace. Fail loudly instead of ever writing an invalid entry.
const charCount = [...LINE].length;
if (charCount < 1 || charCount > 200 || LINE.trim().length === 0) {
  throw new Error(
    `entry line fails the gate: ${charCount} characters (must be 1-200, non-whitespace)`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE, "utf8");
console.log(LINE);
console.log(`characters: ${charCount}`);
