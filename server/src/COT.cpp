#include "COT.h"

#include <stdexcept>

std::vector<std::uint8_t> COT::receive_chosen_message(
    const std::vector<std::uint8_t>& m0,
    const std::vector<std::uint8_t>& m1,
    bool choice) {
    // INTENTIONAL SCAFFOLD:
    // This must not simply select m0/m1 in a submitted implementation.
    // Replace this function with the assignment's Base OT + COT protocol.
    // The returned value must be learned by the receiver without revealing
    // the receiver's choice bit or the unchosen message.
    throw std::runtime_error("COT cryptographic implementation not completed");
}
