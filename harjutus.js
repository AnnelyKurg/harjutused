

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
let square = new Square(5)
console.log(square)
let triangle = new Shape("triangle", 3, 3)
console.log(triangle)
// object method calling
square.calcPerimeter()
square.calcArea()
triangle.calcPerimeter()











