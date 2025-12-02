import { linesByComma } from "../utils/lines";

export function part1(raw: string): number {
  let count = 0;

  for (const line of linesByComma(raw)) {
    let arrayParts = line.trimEnd().split("-");

    while (Number(arrayParts[0]) <= Number(arrayParts[1])) {
      let num = Number(arrayParts[0]);
      count += doubleNumber(num);
      arrayParts[0] = (num + 1).toString();
    }
  }

  return count;
}

export function part2(raw: string): number {
  let count = 0;

  for (const line of linesByComma(raw)) {
    let arrayParts = line.trimEnd().split("-");

    while (Number(arrayParts[0]) <= Number(arrayParts[1])) {
      let num = Number(arrayParts[0]);
      count += repeatedNumber(num);
      arrayParts[0] = (num + 1).toString();
    }
  }

  return count;
}

function doubleNumber(n: number): number {
  let stringNumber = n.toString();
  let stringLength = stringNumber.length;

  if (stringLength % 2 === 0) {
    let leftHalf = stringNumber.slice(0, stringLength / 2);
    let rightHalf = stringNumber.slice(stringLength / 2);

    if (leftHalf === rightHalf) {
      return n;
    }
  }

  return 0;
}

function repeatedNumber(n: number): number {
  let stringNumber = n.toString();
  let stringLength = stringNumber.length;
  let halfLength = Math.floor(stringLength / 2);

  for (let i = 1; i <= halfLength; i++) {
    if (stringLength % i !== 0) {
      continue;
    }

    let part = stringNumber.slice(0, i);
    let repeatedPart = part.repeat(stringLength / i);

    if (repeatedPart === stringNumber) {
      return n;
    }
  }

  return 0;
}
