"use strict";
exports.__esModule = true;
var colors_utils_1 = require("./colors-utils");
var count = 1;
var printCount = function (count) {
    console.log(colors_utils_1.hexToRgb("dfdfd"));
    console.log(colors_utils_1.rgbToHex(1, 2, 3));
    return "Count : " + count.toString();
};
console.log(printCount(1));
//import {fs} from "@types/node";
var fs_1 = require("fs");
fs_1.readFile("./README.md", function (err, data) {
    console.log(err, data.toString());
});
var AmzStopIntenteHandler = /** @class */ (function () {
    function AmzStopIntenteHandler() {
    }
    AmzStopIntenteHandler.prototype.canHandle = function (input) {
        return true;
    };
    AmzStopIntenteHandler.prototype.handle = function (input) {
        var builder = input.responseBuilder;
        var res = builder.speak('hello').getResponse();
        return res;
    };
    return AmzStopIntenteHandler;
}());
