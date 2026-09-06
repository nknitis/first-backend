# Cypherock MTA Assignment

Client-server implementation workspace for the Cypherock MTA/COT assignment.

## Stack

- Client: JavaScript + Node.js
- Server: C++
- Network: TCP
- Serialization: Protocol Buffers
- Crypto: Node `crypto` on the client; the required C++ crypto stack will be wired into the cryptographic phase

## Project flow

```text
JavaScript Client
      |
      | TCP + Protocol Buffers
      v
C++ Server
      |
      v
COT
      |
      v
MTA
      |
      v
U + V = x * y
```

## Current implementation stages

1. Generate a random 32-byte multiplicative share on each side.
2. Establish the TCP connection and exchange protobuf messages.
3. Demonstrate the A.3.3 MTA arithmetic relation.
4. Implement and test the actual A.3.1 Base OT -> A.3.2 COT -> A.3.3 MTA cryptographic protocol.

The current `client/src/COT.js` is an **arithmetic demonstration**, not a cryptographic COT implementation. It must not be described as the final secure solution.

## Run client

```bash
cd client
npm install
npm start
```

## Server

The server source uses C++ and Boost.Asio. Build it with the C++ compiler and the Boost/OpenSSL libraries installed on your system. No CMake is used in this workspace.

## Important

The assignment requires the actual COT algorithms from Appendix A.3.1, A.3.2 and A.3.3, plus the specified C++ crypto/protobuf stack. Those cryptographic parts need independent testing before submission.
