/**
* name
*/
var Library;
(function (Library) {
    var RecuService = /** @class */ (function () {
        function RecuService() {
        }
        RecuService.recalcu = function (a, b) {
            return Library.InterService.forInter(a, b) + Library.InterService.forInter(a, b);
        };
        return RecuService;
    }());
    Library.RecuService = RecuService;
})(Library || (Library = {}));
//# sourceMappingURL=RecuService.js.map