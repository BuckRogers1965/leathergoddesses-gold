## Project Overview

This repository contains the source code for the Infocom interactive fiction game "Leather Goddesses of Phobos". The game is written in ZIL (Zork Implementation Language), a dialect of LISP. The code is organized into several `.zil` files, each representing a different location or a core game component like the parser or global variables.

This repository is intended for educational and historical purposes.

### Key Files

*   **`README.md`**: Provides essential background information about the project, its history, and the nature of the ZIL source code.
*   **`globals.zil`**: Defines global variables, constants, and core game engine routines, such as updating the status line.
*   **`parser.zil`**: Contains the text parser responsible for interpreting player commands.
*   **`verbs.zil`**: Defines the actions (verbs) that the player can perform within the game.
*   **Location-Specific Files (`.zil`)**: Files like `earth.zil`, `mars.zil`, and `venus.zil` define the rooms, objects, characters, and puzzles for their respective locations in the game.

## Building and Running

**TODO:** The `README.md` file states that there is currently no known way to compile this ZIL source code into a playable Z-machine game file. Further research into modern ZIL compilers or interpreters would be needed to make this code runnable.

## Development Conventions

The codebase follows a consistent structure typical of Infocom games.

*   **Language:** The code is written in ZIL, which uses a LISP-like syntax with nested parenthetical expressions.
*   **File Structure:** The game is modular, with different files handling specific locations and game systems. This separation of concerns makes the codebase easier to navigate and understand.
*   **Code Style:** The code is well-formatted and includes comments that explain the purpose of various routines and variables.
