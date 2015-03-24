function Person (name) {
    this.name = name;
    this.friends = [];
}

Person.prototype.greet = function() {
    console.log('Hello my name is ' + this.name);
};

Person.prototype.addFriend  = function(friend) {
    this.friends.push(friend);
};

Person.prototype.listFriends = function() {
    this.friends.forEach(function(friend){
        console.log(friend.name);
    });
};


var person = new Person('John');

person.addFriend(new Person('Fred'));
person.addFriend(new Person('Jack'));

person.listFriends();


