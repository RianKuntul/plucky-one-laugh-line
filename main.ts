// One Line, One Laugh — make.fun entry
// Writes one funny line (<= 200 chars, no trailing newline) to entry.txt
// in the output directory (MAKEFUN_OUTPUT_DIR, default ./output).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I asked my GPS for the meaning of life. It said 'recalculating' — and honestly, same.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "./output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
