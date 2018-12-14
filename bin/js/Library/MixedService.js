/**
* name
*/
var Library;
(function (Library) {
    var MixedService = /** @class */ (function () {
        function MixedService() {
        }
        MixedService.prototype.calcu = function (a, b) {
            var userService = new Library.UserService();
            return userService.multiple(Library.ToolService.sum(a, b), Library.ToolService.sum(a, -b));
        };
        return MixedService;
    }());
    Library.MixedService = MixedService;
})(Library || (Library = {}));
//# sourceMappingURL=MixedService.js.map