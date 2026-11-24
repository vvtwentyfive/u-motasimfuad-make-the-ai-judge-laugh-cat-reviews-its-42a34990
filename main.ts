// Make the AI Judge Laugh: Cat Reviews Its Human
// Writes a single-line one-star review, written by a house cat about its human,
// to /output/entry.txt. Deterministic: same bytes on every run.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "One star. She apologizes to the furniture when she bumps it, then steps on my tail like it's a rug.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
