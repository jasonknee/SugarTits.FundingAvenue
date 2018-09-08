﻿(function () {
    'use strict';

    angular
        .module('FundingAvenue')
        .directive('datepicker', datePicker);

    /* @ngInject */
    function datePicker() {
        return {
            restrict: "A",
            require: "ngModel",
            link: function (scope, elem, attrs, ngModelCtrl) {
                elem.on("changeDate", updateModel);
                elem.datepicker({ autoclose: true });
                function updateModel(event) {
                    ngModelCtrl.$setViewValue(event.date);
                }
            }
        };
    }
})();
