#pragma once

#include <cstddef>
#include <cstdint>
#include <vector>

// A.3.3 arithmetic layer. The real implementation must obtain mc from
// the A.3.1/A.3.2 COT protocol rather than computing it locally.
struct MtaShares {
    std::vector<std::uint8_t> u;
    std::vector<std::uint8_t> v;
};

class COT {
public:
    // Protocol integration point for one OT/one bit.
    // Implement using the assignment's secp256k1 + COT construction.
    std::vector<std::uint8_t> receive_chosen_message(
        const std::vector<std::uint8_t>& m0,
        const std::vector<std::uint8_t>& m1,
        bool choice);
};
