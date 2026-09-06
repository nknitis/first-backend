cmake_minimum_required(VERSION 3.20)
project(cypherock_mta_server LANGUAGES CXX)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

find_package(Boost REQUIRED COMPONENTS system)
find_package(OpenSSL REQUIRED)

add_executable(cypherock_server
    src/main.cpp
    src/Server.cpp
    src/Crypto.cpp
    src/COT.cpp
)

target_include_directories(cypherock_server PRIVATE include)
target_link_libraries(cypherock_server PRIVATE Boost::system OpenSSL::Crypto)

# nanopb/protobuf generation will be wired here after nanopb is installed.
# The assignment specifically asks for nanopb on the C++ side.
