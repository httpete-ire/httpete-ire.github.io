function Person (name) {
    this.name = name;

    this.btn = document.getElementById('btn');
    this.btn.addEventListener('click',function(){
        alert('My name is ' + this.name);
    },false);
}

var person = new Person('John');





