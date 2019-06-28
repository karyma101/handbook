const menu = {
  _courses: {
  	appetizers: [],
    mains: [],
    desserts: []
  },
  get appetizers(){
    return this._courses.appetizers
  },
  set appetizers(dish){
   this._courses.appetizers = dish
  },
  get mains(){
    return this._courses.mains
  },
  set mains(dish){
    this._courses.mains = dish
  },
  get desserts(){
    return this._courses.desserts
  },
  set desserts(dish){
    this._courses.appetizers = dish
  },
  get courses(){
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts
    }
  },
  addDishToCourses(courseName, dishName, dishPrice){
    const dish = {
      name: dishName,
      price: dishPrice
    }
    
    this._courses[courseName].push(dish)
  },
  getRandomDishFromCourses(courseName){
    const dishes = this[courseName]
    const index = [Math.floor(Math.random() * dishes.length)]
    return dishes[index]
  },
  generateRandomMeal(){
    const appetizer = this.getRandomDishFromCourses('appetizers')
    const main = this.getRandomDishFromCourses('mains')
    const dessert = this.getRandomDishFromCourses('desserts')
    const price = appetizer.price + main.price + dessert.price
    return `Your meal is ${appetizer.name} ${main.name} ${dessert.name}. Your total cost: ${price}`
    
  }
}

menu.addDishToCourses('appetizers', 'salad', 8)
menu.addDishToCourses('appetizers', 'squid', 10)
menu.addDishToCourses('appetizers', 'fruits', 3)

menu.addDishToCourses('mains', 'chicken', 8)
menu.addDishToCourses('mains', 'beef', 10)
menu.addDishToCourses('mains', 'fish', 3)

menu.addDishToCourses('desserts', 'ice cream', 8)
menu.addDishToCourses('desserts', 'chocolate', 10)
menu.addDishToCourses('desserts', 'cake', 3)
menu.getRandomDishFromCourses('appetizers')
console.log(menu.generateRandomMeal())
