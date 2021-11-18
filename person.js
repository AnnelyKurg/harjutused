//tund 11.11

function createNewPerson(name) {
    const obj = {};
    obj.name = name;
    obj.greeting = function() {
        alert('Hi! I\'m ' + obj.name + '.');
    };
    return obj;
}
/* function Person(name) {
    this.name = name;
    this.greeting = function() {
        alert('Hi! I\'m ' + this.name + '.');
    };
}
/*const salva = createNewPerson('Salva');
salva.name;
salva.greeting(); */


let person1 = new Person('Bob');
let person2 = new Person('Sarah');

person1.name
person1.greeting()
person2.name
person2.greeting();