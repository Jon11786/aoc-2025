import { mkdirSync, writeFileSync, existsSync } from "fs";
import path from "path";

// Usage: pnpm gen <day>
const [, , dayArg] = process.argv;
if (!dayArg) {
  console.error("Usage: pnpm gen <day>");
  process.exit(1);
}

const day = Number(dayArg);
if (!Number.isInteger(day) || day < 1 || day > 12) {
  console.error("Day must be an integer between 1 and 12");
  process.exit(1);
}
const dayStr = day.toString().padStart(2, "0");

const root = path.resolve(__dirname, "..");
const dayDir = path.join(root, "src", "days", dayStr);

if (existsSync(dayDir)) {
  console.error(`Day ${dayStr} already exists at ${dayDir}`);
  process.exit(1);
}

mkdirSync(dayDir, { recursive: true });

const handler = `// src/days/${dayStr}/handler.ts\nexport function part1(raw: string): number | string {\n  // TODO: implement\n  return 0;\n}\n\nexport function part2(raw: string): number | string {\n  // TODO: implement\n  return 0;\n}\n`;

writeFileSync(path.join(dayDir, "handler.ts"), handler);
writeFileSync(path.join(dayDir, "example.txt"), "\n");
writeFileSync(path.join(dayDir, "input.txt"), "\n");

console.log(`Scaffolded day ${dayStr} at ${dayDir}`);
