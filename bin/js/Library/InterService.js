/**
* name
*/
var Library;
(function (Library) {
    var InterService = /** @class */ (function () {
        function InterService() {
        }
        InterService.prototype.test = function (a, b) {
            return Library.RecuService.recalcu(a, b);
        };
        InterService.forInter = function (a, b) {
            return a - b;
        };
        return InterService;
    }());
    Library.InterService = InterService;
})(Library || (Library = {}));
//# sourceMappingURL=InterService.js.map