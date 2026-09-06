const { randomBytes } = require('node:crypto');

function bytesToBigInt(bytes) {
  return BigInt('0x' + bytes.toString('hex'));
}

function bit(value, index) {
  return (value >> BigInt(index)) & 1n;
}

// A.3.3 arithmetic demonstration only.
// This proves U + V = x * y, but it is NOT the cryptographic COT protocol.
function mtaArithmeticDemo(x, y, bits = 256) {
  let u = 0n;
  let v = 0n;

  for (let i = 0; i < bits; i++) {
    const yi = bit(y, i);
    const ui = bytesToBigInt(randomBytes(32));
    const mc = ui + yi * x;
    const weight = 1n << BigInt(i);

    u -= weight * ui;
    v += weight * mc;
  }

  return { u, v, product: x * y, verified: u + v === x * y };
}

module.exports = { bit, mtaArithmeticDemo, bytesToBigInt };
