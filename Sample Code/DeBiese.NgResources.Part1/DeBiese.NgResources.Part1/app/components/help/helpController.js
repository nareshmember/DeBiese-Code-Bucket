/// <reference path="../../_app.ts" />
'use strict';
var DeBiese;
(function (DeBiese) {
    var NgResources;
    (function (NgResources) {
        var Part1;
        (function (Part1) {
            var Controllers;
            (function (Controllers) {
                var C = DeBiese.NgResources.Part1.Common;
                var HelpController = (function () {
                    function HelpController() {
                        this.$resourceHelper = new C.Resources.ResourceHelper('Help');
                        this.activate();
                    }
                    HelpController.prototype.activate = function () {
                    };
                    HelpController.$inject = [];
                    HelpController.id = 'helpController';
                    return HelpController;
                }());
                Controllers.HelpController = HelpController;
                Part1.app.controller(DeBiese.NgResources.Part1.Controllers.HelpController.id, DeBiese.NgResources.Part1.Controllers.HelpController);
            })(Controllers = Part1.Controllers || (Part1.Controllers = {}));
        })(Part1 = NgResources.Part1 || (NgResources.Part1 = {}));
    })(NgResources = DeBiese.NgResources || (DeBiese.NgResources = {}));
})(DeBiese || (DeBiese = {}));
//# sourceMappingURL=helpController.js.map