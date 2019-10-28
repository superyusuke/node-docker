#!/usr/bin/env bash
# to get my.cnf
docker run --name db-userauth --env MYSQL_RANDOM_ROOT_PASSWORD=true \
    --env MYSQL_USER=userauth --env MYSQL_PASSWORD=userauth \
    --env MYSQL_DATABASE=userauth \
    --network authnet mysql/mysql-server:5.7
