# Cypherock MTA Assignment

Client-server project scaffold for the Cypherock MTA/COT assignment.

## Architecture

```text
Node.js + TypeScript Client
        |
        | TCP + length-prefixed Protocol Buffers
        v
C++ Server
        |
        v
Base OT -> Correlated OT -> MTA
        |
        v
U + V = x * y
```

## Repository structure

```text
proto/cot.proto
client/
  src/main.ts
  src/Client.ts
  src/Crypto.ts
  src/Protocol.ts
  src/COT.ts
server/
  include/Server.h
  include/Crypto.h
  include/COT.h
  src/main.cpp
  src/Server.cpp
  src/Crypto.cpp
  src/COT.cpp
  CMakeLists.txt
```

## Important

The networking, 32-byte random-share generation, protobuf schema, build setup, and COT integration points are included.

The actual cryptographic COT implementation is intentionally marked as incomplete. The assignment requires the A.3.1 Base OT, A.3.2 COT, and A.3.3 MTA construction using the specified secp256k1/Trezor crypto stack. The placeholder must be replaced and independently tested before submission.

The arithmetic target is:

```text
x * y = U + V
```

For each bit `yi` of `y`, A.3.3 defines:

```text
m0 = Ui
m1 = Ui + x
mc = Ui + yi*x
```

and then computes weighted additive shares:

```text
U = -sum(2^i * Ui)
V =  sum(2^i * mc)
```

so that `U + V = x*y`.

## Client

```bash
cd client
npm install
npm run build
npm start
```

## Server

Dependencies: CMake, C++17 compiler, Boost.System and OpenSSL. Nanopb/protobuf generation and the assignment's Trezor crypto dependency still need to be wired into the final cryptographic implementation.

```bash
cd server
cmake -S . -B build
cmake --build build
./build/cypherock_server
```

## Do not submit the current scaffold as the final cryptographic solution

The COT placeholder deliberately fails instead of pretending that a local message selection is oblivious transfer. Complete and test the cryptographic protocol before using this repository for the assessment.
