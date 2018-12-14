/// <reference path="../../src/Library/UserService.ts" />

import fs = require('fs');
import vm = require('vm');
let path = __dirname + "/../../bin/js/Library/UserService.js";
let code = fs.readFileSync(path, {encoding:'utf8'});
vm.runInThisContext(code);

describe('UserService', function() {
  it('multiple one', function() {
    let userService = new Library.UserService();
    expect(userService.multiple(0 ,0)).toBe(0);
  });

  it('multiple two', () => {
    let userService = new Library.UserService();
    expect(userService.multiple(7 ,8)).toBe(56);
  });
});