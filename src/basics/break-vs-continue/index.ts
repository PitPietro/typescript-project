import {breakLoop} from './breakLoop';
import {continueLoop} from './continueLoop'

console.log(`Stop the loop with the 'break;' statement:`);
breakLoop();
console.log(`Do not stop the loop with the 'continue;' statement:`);
continueLoop();

// cd src/basics/break-vs-continue
// tsc breakLoop.ts continueLoop.ts index.ts && node index.js
