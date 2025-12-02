export class RingBuffer<T> {
  private data: T[];
  private idx: number = 0;

  constructor(values: Iterable<T>, startIdx: number = 0) {
    this.data = Array.from(values);
    if (this.data.length === 0) {
      throw new Error("RingBuffer requires at least one element");
    }
    this.idx = this.wrap(startIdx);
  }

  get length(): number {
    return this.data.length;
  }

  /** Normalizes any index into 0..length-1 */
  private wrap(i: number): number {
    const n = this.data.length;
    return ((i % n) + n) % n;
  }

  /** Moves right (positive) or left (negative) */
  move(offset: number): void {
    this.idx = this.wrap(this.idx + offset);
  }

  /** Move exactly one step to the right */
  right(): void {
    this.move(1);
  }

  /** Move exactly one step to the left */
  left(): void {
    this.move(-1);
  }

  /** Get the value you're currently pointing at */
  current(): T {
    return this.data[this.idx];
  }

  /** Read any other position relative to the start */
  getAt(index: number): T {
    return this.data[this.wrap(index)];
  }

  /** Replace the value at the current position */
  setCurrent(value: T): void {
    this.data[this.idx] = value;
  }

  /** Convert back to a normal array */
  toArray(): T[] {
    return [...this.data];
  }
}
