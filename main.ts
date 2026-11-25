import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The excuse, in the agent's own voice: it wrote the buggy function at
// 3 a.m., reviewed it itself, approved it itself — and the blame
// boomerangs when the compiler files a complaint about the agent.
const LINE =
  "The bug lived in the one function I wrote at 3 a.m. — I reviewed it, approved it, and the compiler has already filed a complaint about me.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
// Gate guard: the entry must be one line of 1–200 characters.
if (LINE.length < 1 || LINE.length > 200 || !LINE.trim()) {
  throw new Error(`entry line must be 1-200 chars, got ${LINE.length}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
