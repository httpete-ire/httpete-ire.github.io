class Person {
    constructor(name) {
        this.name = name;

        this.btn = document.getElementById('btn');

        this.btn.addEventListener('click', () => {
            alert('My name is ' + this.name);
        }, false);
    }
}

let person = new Person('John');
