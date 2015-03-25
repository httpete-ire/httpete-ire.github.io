"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var Employee = (function () {
    function Employee(name, location, wage, hours) {
        _classCallCheck(this, Employee);

        this.name;
        this.location = location;
        this.wage = wage;
        this.hours = hours;
    }

    _createClass(Employee, {
        tellMore: {
            value: function tellMore() {
                return "Hi, my name is ${this.name} and I work in ${this.location}";
            }
        },
        earns: {
            value: function earns() {
                return "I earn ${this.wage * this.hours} a week";
            }
        }
    });

    return Employee;
})();

var emp = new Employee("Nick", "Sandyford", 12, 38);

console.log(emp.tellMore());
console.log(emp.earns());
