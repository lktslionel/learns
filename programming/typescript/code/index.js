"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const colors_utils_1 = require("./colors-utils");
let count = 1;
const printCount = (count) => {
    console.log(colors_utils_1.hexToRgb("dfdfd"));
    console.log(colors_utils_1.rgbToHex(1, 2, 3));
    return `Count : ${count.toString()}`;
};
console.log(printCount(1));
//import {fs} from "@types/node";
const fs_1 = require("fs");
fs_1.readFile("./README.md", function (err, data) {
    console.log(err, data.toString());
});
class AmzStopIntenteHandler {
    canHandle(input) {
        return true;
    }
    handle(input) {
        const builder = input.responseBuilder;
        const res = builder.speak('hello').getResponse();
        return res;
    }
}
