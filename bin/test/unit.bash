#!/usr/bin/env bash

#symlinks for webpack's aliases
ln -sf src/resources @resources
ln -sf src/ @src
ln -sf src/resources/styles/ @styles
ln -sf src/resources/images/ @images
ln -sf src/resources/app @app

export NODE_PATH=./
mocha

unlink @resources
unlink @src
unlink @app
unlink @styles
unlink @images
