# Advent of Code 2025

This repository contains solutions for Advent of Code 2025, implemented in TypeScript. Each day's solution is organized for easy execution and testing.

## Project Structure

```
src/
  index.ts           # CLI runner (pnpm day <day> [part] [example|real])
  days/              # Day folders (01/, 02/, ...) each with handler.ts, input.txt, example.txt
  utils/             # Shared utilities
scripts/
  gen-day.ts         # Scaffold a new day (pnpm gen <day>)
```

## Prerequisites

- Node.js (recommended v24+)
- pnpm

## Installation

```sh
pnpm install
```

## Usage

### Run a Day

```sh
pnpm day 1          # Run both parts on real input
pnpm day 1 example  # Run both parts on example input
pnpm day 2 2        # Run only part 2 (real input)
pnpm day 2 1 example # Run part 1 with example input
```

### Scaffold a New Day

Creates `src/days/DD/` with handler.ts, example.txt, input.txt.

```sh
pnpm gen 4
```

Then edit `src/days/04/handler.ts` to implement `part1`, and `part2`.

### Format Code

```sh
pnpm format
```
