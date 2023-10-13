#!/usr/bin/env bash 
# creaet a empty commit for trigger CI upload
cd lighthouse-run
git commit --allow-empty -m 'lighthouse run'
cd ..
# copy resource 
docker compose build client 
# run lighthouse and upload to server
docker compose run client lhci autorun
