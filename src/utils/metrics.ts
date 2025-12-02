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
  console.log(
    `${label}: ${result}  |  time: ${ms.toFixed(3)} ms  |  Δheap: ${kb.toFixed(1)} KB`,
  );
}
