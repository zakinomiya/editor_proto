#!/bin/bash

cd ../api

echo "building docker image: learn_api"

docker build -t learn_api .

cd ../editor

echo "building docker image: learn_editor"

docker build -t learn_editor .

cd ../

echo "launching the network"

docker-compose up -d 

echo "network successfully launched"
echo "go to localhost:3000"