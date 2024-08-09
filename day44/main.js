"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.persosn = exports.add = void 0;
const add = (a, b) => a + b;
exports.add = add;
class persosn {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Hello my name is : ${this.name}`);
    }
}
exports.persosn = persosn;
