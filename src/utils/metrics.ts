// src/utils/metrics.ts
import { performance } from "node:perf_hooks";

export type MetricsResult<T> = {
  label: string;
  result: T;
  ms: number;
  memoryDiff: number; // in bytes
};

export function withMetrics<T>(label: string, fn: () => T): MetricsResult<T> {
  const memBefore = process.memoryUsage().heapUsed;
  const start = performance.now();

  const result = fn();

  const end = performance.now();
  const memAfter = process.memoryUsage().heapUsed;

  return {
    label,
    result,
    ms: end - start,
    memoryDiff: memAfter - memBefore,
  };
}

export function printMetrics<T>({
  label,
  result,
  ms,
  memoryDiff,
}: MetricsResult<T>) {
  const kb = memoryDiff / 1024;
  // ANSI color helpers
  const reset = "\u001b[0m";
  const bold = "\u001b[1m";
  const dim = "\u001b[2m";
  const cyan = "\u001b[36m";
  const green = "\u001b[32m";
  const yellow = "\u001b[33m";

  const labelStr = `${bold}${cyan}${label}${reset}`;
  const resultStr = `${bold}${green}${result}${reset}`;
  const timeStr = `${dim}time:${reset} ${yellow}${ms.toFixed(3)} ms${reset}`;
  const memStr = `${dim}Δheap:${reset} ${yellow}${kb.toFixed(1)} KB${reset}`;

  console.log(`${labelStr}: ${resultStr}  |  ${timeStr}  |  ${memStr}`);
}
