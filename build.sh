#!/usr/bin/env bash
prefix="cloudgenuser"
name="$(npm pkg get name | sed 's/"//g')"
tag="$(npm pkg get version | sed 's/"//g')"
name_docker="$prefix/$name:$tag"
docker build -t "$name_docker" .
docker push "$name_docker"