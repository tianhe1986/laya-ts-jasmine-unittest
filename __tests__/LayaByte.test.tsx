/// <reference path="../libs/LayaAir.d.ts" />

import fs = require('fs');
import vm = require('vm');
let paths:Array<string> = [
    __dirname + "/../bin/libs/laya.core.js",
];

vm.runInThisContext("window = {}; document = {}; laya = window.laya = {}");
for (let i = 0, len = paths.length; i < len; i++) {
    let code = fs.readFileSync(paths[i], {encoding:'utf8'});
    vm.runInThisContext(code);
}

describe('Laya Byte', function() {
  it('write read', function() {
     let byteArray = new Laya.Byte();
     byteArray.writeInt32(1980);
     byteArray.writeUTFString("you are right");
     byteArray.writeUTFBytes("TEST OK");
     byteArray.pos = 0;
     expect(byteArray.getInt32()).toBe(1980);
     expect(byteArray.readUTFString()).toBe("you are right");
     expect(byteArray.readUTFBytes(7)).toBe("TEST OK");
  });
});