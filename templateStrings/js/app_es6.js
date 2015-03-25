class Employee {
    constructor(name, location,  wage, hours) {
        this.name;
        this.location = location;
        this.wage = wage;
        this.hours = hours;
    }

    tellMore() {
        return 'Hi, my name is ${this.name} and I work in ${this.location}';
    }

    earns() {
        return 'I earn ${this.wage * this.hours} a week';
    }
}


let emp = new Employee('Nick', 'Sandyford', 12, 38);

console.log(emp.tellMore());
console.log(emp.earns());
