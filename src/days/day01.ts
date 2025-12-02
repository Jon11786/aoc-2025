import { lines } from "../utils/lines";
import { RingBuffer } from "../utils/ring";

// Count each 0
export function part1(raw: string): number {
  let current = 50;
  let clicks = 0;

  const ring = new RingBuffer(
    Array.from({ length: 100 }, (_, i) => i),
    current,
  );

  for (const line of lines(raw)) {
    if (line[0] === "R") {
      ring.move(Number(line.slice(1)));
    } else if (line[0] === "L") {
      ring.move(-Number(line.slice(1)));
    }

    current = ring.current();

    if (current === 0) {
      clicks++;
    }
  }

  return clicks;
}

export function part2(raw: string): number {
  let current = 50;
  let clicks = 0;

  const ring = new RingBuffer(
    Array.from({ length: 100 }, (_, i) => i),
    current,
  );

  for (const line of lines(raw)) {
    if (line[0] === "R") {
      ring.move(Number(line.slice(1)));
      clicks += countPassesZero(current, Number(line.slice(1)));
    } else if (line[0] === "L") {
      ring.move(-Number(line.slice(1)));
      clicks += countPassesZero(current, -Number(line.slice(1)));
    }

    current = ring.current();
  }

  return clicks;
}

function countPassesZero(current: number, move: number) {
  let passes = 0;
  let next = current + move;

  passes += Math.floor(Math.abs(next) / 100);

  if (current > 0 && next < 0) {
    passes++;
  }

  if (next === 0) {
    passes++;
  }

  return passes;
}
