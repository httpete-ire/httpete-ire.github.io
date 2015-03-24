"use strict";

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var Person = function Person(name) {
    var _this = this;

    _classCallCheck(this, Person);

    this.name = name;

    this.btn = document.getElementById("btn");

    this.btn.addEventListener("click", function () {
        alert("My name is " + _this.name);
    }, false);
};

var person = new Person("John");
