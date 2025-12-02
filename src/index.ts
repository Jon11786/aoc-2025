// src/index.ts
import { readInput } from "./utils/input";
import { withMetrics, printMetrics } from "./utils/metrics";

async function main() {
  const [, , dayArg, partArg, variantArg] = process.argv;

  if (!dayArg) {
    console.log("Usage: npm run day <day> [part] [real|example]");
    console.log("Examples:");
    console.log("  npm run day 1");
    console.log("  npm run day 2 1 example");
    return;
  }

  const day = Number(dayArg);
  const dayStr = day.toString().padStart(2, "0");
  const variant = variantArg === "example" ? "example" : "real";

  const modulePath = `./days/day${dayStr}`;
  const imported = await import(modulePath);
  const input = readInput(day, variant);

  if (!partArg || partArg === "1") {
    const res1 = withMetrics(`Day ${day} (${variant}) - Part 1`, () =>
      imported.part1?.(input),
    );
    printMetrics(res1);
  }

  if (!partArg || partArg === "2") {
    const res2 = withMetrics(`Day ${day} (${variant}) - Part 2`, () =>
      imported.part2?.(input),
    );
    printMetrics(res2);
  }
}

main();
