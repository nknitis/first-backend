#pragma once

#include <array>
#include <cstdint>
#include <string>

using Share32 = std::array<std::uint8_t, 32>;

Share32 random_share();
std::string to_hex(const Share32& value);
