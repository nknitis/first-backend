#include "Crypto.h"

#include <iomanip>
#include <openssl/rand.h>
#include <sstream>
#include <stdexcept>

Share32 random_share() {
    Share32 result{};
    if (RAND_bytes(result.data(), static_cast<int>(result.size())) != 1) {
        throw std::runtime_error("RAND_bytes failed");
    }
    return result;
}

std::string to_hex(const Share32& value) {
    std::ostringstream out;
    out << std::hex << std::setfill('0');
    for (auto byte : value) {
        out << std::setw(2) << static_cast<unsigned int>(byte);
    }
    return out.str();
}
