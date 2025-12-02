// src/index.ts
import { readInput } from "./utils/input";
import { withMetrics, printMetrics } from "./utils/metrics";

function usage() {
  console.log("Usage: pnpm day <day> [part] [example|real]");
  console.log("Examples:");
  console.log("  pnpm day 1");
  console.log("  pnpm day 2 1 example");
}

async function main() {
  const [, , dayArg, partOrVariantArg, variantArg] = process.argv;

  if (!dayArg) {
    usage();
    process.exitCode = 1;
    return;
  }

  const day = Number(dayArg);
  const validDay = Number.isInteger(day) && day >= 1 && day <= 12;

  // Determine part and variant flexibly
  let part: 1 | 2 | undefined;
  let variant: "example" | "real" = "real";

  if (partOrVariantArg === "example" || partOrVariantArg === "real") {
    variant = partOrVariantArg as any;
  } else if (partOrVariantArg !== undefined) {
    const pNum = Number(partOrVariantArg);
    if (pNum === 1 || pNum === 2) part = pNum as 1 | 2;
    else {
      console.error("Invalid part. Expected 1 or 2.");
      usage();
      process.exitCode = 1;
      return;
    }
    if (variantArg === "example" || variantArg === "real") {
      variant = variantArg as any;
    }
  }

  if (!validDay) {
    console.error("Invalid day. Expected 1-12.");
    usage();
    process.exitCode = 1;
    return;
  }

  const dayStr = day.toString().padStart(2, "0");
  const modulePath = `./days/${dayStr}/handler`;

  let imported: any;
  try {
    imported = await import(modulePath);
  } catch (e: any) {
    console.error(
      `Missing handler for day ${dayStr}. Expected: src/days/${dayStr}/handler.ts`,
    );
    process.exitCode = 1;
    return;
  }

  let input: string;
  try {
    input = readInput(day, variant);
  } catch (e: any) {
    console.error(e?.message || String(e));
    process.exitCode = 1;
    return;
  }

  const runPart = (p: 1 | 2) => {
    const fn = p === 1 ? imported.part1 : imported.part2;
    if (typeof fn !== "function") {
      console.error(`Day ${dayStr} is missing part ${p}.`);
      process.exitCode = 1;
      return;
    }
    const res = withMetrics(`Day ${day} (${variant}) - Part ${p}`, () =>
      fn(input),
    );
    printMetrics(res);
  };

  if (!part || part === 1) runPart(1);
  if (!part || part === 2) runPart(2);
}

main();
