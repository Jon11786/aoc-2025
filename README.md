# Advent of Code 2025

This repository contains solutions for Advent of Code 2025, implemented in TypeScript. Each day's solution is organized for easy execution and testing.

## Project Structure

```
src/
  index.ts           # Entry point for running solutions
  days/              # Individual day solutions (01/handler.ts, 02/handler.ts, ...)
  utils/             # Utility modules for input parsing and helpers
```

## Prerequisites

- [Node.js](https://nodejs.org/) (recommended v24+)
- [pnpm](https://pnpm.io/) (used as the package manager)

## Installation

Clone the repository and install dependencies:

```sh
pnpm install
```

## Usage

### Run a Day's Solution

To run a specific day's solution (e.g., Day 1):

```sh
pnpm day 1
```

To run a specific day's part solution (e.g., Day 1 part 2):

```sh
pnpm day 1 2
```

To run a specific day's part with example data (e.g., Day 2 part 2 with example data):

```sh
pnpm day 2 2 example
```

### Format Code

To format all code using Prettier:

```sh
pnpm format
```
