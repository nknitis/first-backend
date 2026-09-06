#include "Crypto.h"
#include "Server.h"

#include <iostream>

int main() {
    try {
        const auto server_share = random_share();
        std::cout << "Server multiplicative share y: " << to_hex(server_share) << '\n';

        Server server(9000);
        server.run();
    } catch (const std::exception& ex) {
        std::cerr << "Fatal error: " << ex.what() << '\n';
        return 1;
    }
}
