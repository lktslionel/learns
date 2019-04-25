import { hexToRgb, rgbToHex } from "./colors-utils";


let count: number = 1;

const printCount = ( count: number): string => {
    console.log(hexToRgb("dfdfd"));
    console.log(rgbToHex(1,2,3));
    return `Count : ${ count.toString() }`;
}

console.log(printCount(1));

//import {fs} from "@types/node";
import { readFile } from "fs";

readFile("./README.md", function(err, data){
    console.log(err,data.toString());
});





import { RequestHandler, HandlerInput } from "ask-sdk";
import { Response } from 'ask-sdk-model';

class AmzStopIntenteHandler implements RequestHandler {
    canHandle(input: HandlerInput):    boolean {
        return true;
    }

    handle(input: HandlerInput): Response {
    
        const builder = input.responseBuilder;
        const res = builder.speak('hello').getResponse();
        return res;
    }

}