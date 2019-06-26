class Rectangle {
  // Setup
  constructor(_width, _height, _color) {
    // The constructor always run once when class is created
    console.log('The Rectangle is being created')

    this.width = _width
    this.height = _height
    this.color = _color
  }

  //Instance Method
  getArea() {
    return this.width * this.height
  }

  printDescription() {
    console.log(`I am a rectangle of ${this.width} x ${this.height} and I am ${this.color}`)
  }
}

let myRectangle1 = new Rectangle(5, 3, 'blue')
let myRectangle2 = new Rectangle(10, 6, 'red')
console.log(myRectangle1.getArea())
console.log(myRectangle2.getArea())

myRectangle2.printDescription()


//Getter & Setters

class Square {
  constructor(_width) {
    this.width = _width
    this.height = _width
  }

  get area() {
    return this.width * this.height
  }

  set area(area) {
    this.width = Math.sqrt(area)
    this.height = this.width
  }
}

let square1 = new Square(5)
console.log(square1.area)

square1.area = 16
console.log(square1.width)
console.log(square1.height)