/*
 * MTA/COT arithmetic scaffold.
 *
 * This mirrors the A.3.3 arithmetic from the assignment.
 * The real COT cryptographic transport still needs to be implemented
 * and independently tested before submission.
 */

function bit(value, index) {
  return (value >> BigInt(index)) & 1n;
}

function mtaArithmeticShare(x, y, bits = 256) {
  let u = 0n;
  let v = 0n;

  for (let i = 0; i < bits; i++) {
    const yi = bit(y, i);
    const ui = 0n; // Placeholder: real COT uses a random Ui.
    const mc = ui + yi * x;

    const weight = 1n << BigInt(i);
    u -= weight * ui;
    v += weight * mc;
  }

  return { u, v };
}

module.exports = { bit, mtaArithmeticShare };
