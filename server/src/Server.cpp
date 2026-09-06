#include "Server.h"

#include <array>
#include <iostream>

Server::Server(unsigned short port)
    : acceptor_(io_context_, {boost::asio::ip::tcp::v4(), port}) {}

void Server::run() {
    std::cout << "Server listening on port " << acceptor_.local_endpoint().port() << '\n';

    for (;;) {
        boost::asio::ip::tcp::socket socket(io_context_);
        acceptor_.accept(socket);
        handle_client(std::move(socket));
    }
}

void Server::handle_client(boost::asio::ip::tcp::socket socket) {
    std::array<unsigned char, 4096> buffer{};
    boost::system::error_code ec;
    const auto n = socket.read_some(boost::asio::buffer(buffer), ec);

    if (ec == boost::asio::error::eof) {
        return;
    }
    if (ec) {
        std::cerr << "read error: " << ec.message() << '\n';
        return;
    }

    // The received bytes are a length-prefixed protobuf envelope.
    // Decode with generated nanopb code in the COT implementation layer.
    boost::asio::write(socket, boost::asio::buffer(buffer.data(), n));
}
