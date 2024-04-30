#!/bin/bash
(trap 'kill 0' SIGINT; PORT=3001 ./node_modules/.bin/ts-node ./scripts/startProductAPI.ts & PORT=3002 ./node_modules/.bin/ts-node ./scripts/startCustomerAPI.ts)