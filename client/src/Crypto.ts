import { randomBytes } from "node:crypto";

export function randomScalar32(): Buffer {
  return randomBytes(32);
}

export function toHex(value: Buffer): string {
  return value.toString("hex");
}
