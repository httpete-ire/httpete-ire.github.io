"use strict";

function printNumbers() {
    for (var _i = 0; _i < 5; _i++) {
        (function (_i) {
            setTimeout(function () {
                console.log(_i);
            }, _i * 50);
        })(_i);
    }

    console.log(i); // 5
}

printNumbers();
