#!/bin/bash

docker run --rm -d -p 27017:27017 --name website-db mongo

# wait for server to start up
sleep 5

docker run -it --rm --network host -v `pwd`/seed.js:/seed.js mongo mongo okcoders /seed.js
