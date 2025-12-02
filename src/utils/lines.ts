export function* lines(raw: string, trim = true): Generator<string> {
  const arr = trim ? raw.trimEnd().split("\n") : raw.split("\n");
  for (const l of arr) yield l;
}

export function* linesByNewLine(raw: string, trim = true): Generator<string> {
  const arr = trim ? raw.trimEnd().split("\n") : raw.split("\n");
  for (const l of arr) yield l;
}

export function* linesByComma(raw: string, trim = true): Generator<string> {
  const arr = trim ? raw.trimEnd().split(",") : raw.split(",");
  for (const l of arr) yield l;
}
