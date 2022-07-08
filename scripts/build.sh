#!/usr/bin/env bash

rm -rf out
next build
next export
echo 'nopa.info' > out/CNAME
touch out/.nojekyll
