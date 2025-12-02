import { readFileSync } from "fs";
import path from "path";

export function readInput(
  day: number,
  variant: "real" | "example" = "real",
): string {
  const dayStr = day.toString().padStart(2, "0");
  const fileName =
    variant === "real" ? `day${dayStr}.txt` : `day${dayStr}.example.txt`;
  const filePath = path.join(__dirname, "..", "inputs", fileName);
  return readFileSync(filePath, "utf8").trimEnd();
}
