//tund 11.11

/*function createNewPerson(name) {
    const obj = {};
    obj.name = name;
    obj.greeting = function() {
        alert('Hi! I\'m ' + obj.name + '.');
    };
    return obj;
}*/
/* function Person(name) {
    this.name = name;
    this.greeting = function() {
        alert('Hi! I\'m ' + this.name + '.');
    };
}
/*const salva = createNewPerson('Salva');
salva.name;
salva.greeting(); */


/*let person1 = new Person('Bob');
let person2 = new Person('Sarah');

person1.name
person1.greeting()
person2.name
person2.greeting();*/

//tund 18.11

/*function Shape(name, sides, sideLength) {
    //atributes - fields
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
    //functions - methods
    this.calcPerimeter = function (){
        //console.log(this.sides * this.sideLength)
        this.perimeter = this.sides * this.sideLength
        console.log(this.perimeter)
    }
}

// Write your code below here
let square = new Shape("square", 4, 5)

console.log(square)
let triangle = new Shape("triangle", 3, 3)
console.log(triangle)

//object method calling
square.calcPerimeter()
triangle.calcPerimeter()*/



// object creation
let square = new Shape("square", 4, 5)
console.log(square)
let triangle = new Shape("triangle", 3, 3)
console.log(triangle)
// object method calling
square.calcPerimeter()
triangle.calcPerimeter()











