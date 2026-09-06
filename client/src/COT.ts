/*
 * MTA/COT reference scaffold.
 *
 * The assignment's A.3.1-A.3.3 cryptographic OT must be implemented and
 * independently tested before this is used as a submission. Do not treat
 * this file as a production cryptographic implementation.
 */

export function bit(value: bigint, index: number): bigint {
  return (value >> BigInt(index)) & 1n;
}

export function mtaArithmeticShare(x: bigint, y: bigint, bits = 256) {
  let u = 0n;
  let v = 0n;

  for (let i = 0; i < bits; i++) {
    const yi = bit(y, i);
    const ui = 0n; // Replace with a cryptographically random Ui in real COT.
    const mc = ui + yi * x;

    const weight = 1n << BigInt(i);
    u -= weight * ui;
    v += weight * mc;
  }

  return { u, v };
}
