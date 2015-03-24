"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var Person = (function () {
    function Person(name) {
        _classCallCheck(this, Person);

        this.name = name;
        this.friends = [];
    }

    _createClass(Person, {
        greet: {
            value: function greet() {
                console.log("Hello my name is " + this.name);
            }
        },
        addFriend: {
            value: function addFriend(friend) {
                this.friends.push(friend);
            }
        },
        listFriends: {
            value: function listFriends() {
                this.friends.forEach(function (friend) {
                    console.log(friend.name);
                });
            }
        }
    });

    return Person;
})();

;

var person = new Person("John");

person.addFriend(new Person("Fred"));
person.addFriend(new Person("Jack"));

person.listFriends();
