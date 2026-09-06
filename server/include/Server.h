#pragma once

#include <boost/asio.hpp>

class Server {
public:
    explicit Server(unsigned short port);
    void run();

private:
    void handle_client(boost::asio::ip::tcp::socket socket);

    boost::asio::io_context io_context_;
    boost::asio::ip::tcp::acceptor acceptor_;
};
