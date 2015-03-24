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

class Student extends Person {
    constructor(name, course) {
        super(name);
        this.course = course;
    }

    greet () {
        super.greet();
        console.log('I am currently in ' + this.course);
    }
}


let student = new Student('John', 'Computer Science');

student.greet();

student.addFriend(new Person('Amy'));
student.addFriend(new Person('Jess'));

student.listFriends();
