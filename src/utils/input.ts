import { readFileSync } from "fs";
import path from "path";

export function readInput(
  day: number,
  variant: "real" | "example" = "real",
): string {
  const dayStr = day.toString().padStart(2, "0");
  const fileName = variant === "real" ? "input.txt" : "example.txt";
  const filePath = path.join(__dirname, "..", "days", dayStr, fileName);
  try {
    return readFileSync(filePath, "utf8").trimEnd();
  } catch (e: any) {
    const hint = `Missing ${variant} input for day ${dayStr} at ${filePath}.`;
    throw new Error(`${hint}`);
  }
}
