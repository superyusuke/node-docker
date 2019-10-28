#!/usr/bin/env bash
# これは /users の package.json の docker-build で作られるイメージを実行している
docker run -it --name userauth --net=authnet node-web-development/userauth
