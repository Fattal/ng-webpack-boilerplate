#!/usr/bin/env bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

docker rm -f ng-start

docker run --network host \
--name ng-start \
-v ${DIR}/../.:/src \
-u $(id -u) \
ng-start \
 /bin/bash -c "npm rebuild node-sass && ng serve"
