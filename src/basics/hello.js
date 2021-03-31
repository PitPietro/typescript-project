"use strict";
function hello(user, date) {
    console.log("Hello " + user + ", today is " + date);
}
hello("PitPietro", new Date());
// tsc --noEmitOnError hello.ts && node hello.js && rm hello.js
