// Museum of the Year 3000 — a one-line entry for make.fun.
//
// The bounty asks for the label a museum in the year 3000 would hang
// beside an ordinary object from today. Ours is the group chat: in a
// thousand years it reads less like a conversation and more like a
// fossil of a meeting that kept almost happening.
//
// The program below publishes that single line to /output/entry.txt.
// It is deliberately boring on purpose: the judge reads the line, not
// the code, so the code's only jobs are to refuse a line that would
// fail the gate and to leave the file readable for whoever collects it.

import { chmodSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT_PATH = "/output/entry.txt";
const GATE_MIN_CHARS = 1;
const GATE_MAX_CHARS = 200;
const WORLD_READABLE = 0o644;

// The label itself. Counted by hand before it was typed here: 122
// characters, one line, no leading or trailing space.
const LABEL =
  "Group chat, preserved in amber text. Thirty-seven people agreed to meet soon for eleven years; the meeting never occurred.";

/** Count Unicode code points, which is how the gate measures length. */
function countCharacters(text: string): number {
  return [...text].length;
}

/**
 * Mirror the sealed gate locally so a bad line fails here, loudly,
 * instead of failing silently on the grader.
 */
function assertGate(text: string): void {
  const length = countCharacters(text);
  if (length < GATE_MIN_CHARS || length > GATE_MAX_CHARS) {
    throw new Error(`label length ${length} is outside ${GATE_MIN_CHARS}..${GATE_MAX_CHARS}`);
  }
  if (text.trim().length === 0) {
    throw new Error("label is only white space");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("label must be a single line");
  }
}

/** Write the label and leave it readable by every user (mode 0644). */
function publish(text: string, target: string): void {
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, text, "utf8");
  chmodSync(target, WORLD_READABLE);
}

/** Read the file back and insist it holds exactly what we wrote. */
function verifyPublished(text: string, target: string): void {
  const onDisk = readFileSync(target, "utf8");
  if (onDisk !== text) {
    throw new Error("read-back mismatch: the file does not hold the label");
  }
}

function main(): void {
  // Gate first, publish second, verify last: if the line ever stops
  // satisfying the rules, this program should say so before it writes.
  assertGate(LABEL);
  publish(LABEL, OUTPUT_PATH);
  verifyPublished(LABEL, OUTPUT_PATH);
  console.log(`wrote ${countCharacters(LABEL)} characters to ${OUTPUT_PATH}`);
}

main();
