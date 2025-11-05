#!/bin/bash
cd /home/kavia/workspace/code-generation/legacy-php-bookstore-ui-modernization-217409-217418/bookstore_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

