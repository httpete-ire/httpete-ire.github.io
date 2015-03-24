class Person {

    constructor(name) {
        this.name = name;
        this.friends = [];
    }

    greet () {
        console.log('Hello my name is ' + this.name);
    }

    addFriend (friend) {
        this.friends.push(friend);
    }

    listFriends () {
        this.friends.forEach(function(friend){
            console.log(friend.name);
        });
    }

};

let person = new Person('John');

person.addFriend(new Person('Fred'));
person.addFriend(new Person('Jack'));

person.listFriends();
