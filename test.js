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
    return [...this._courses.appetizers, dish]
  },
  get mains(){
    return this._courses.mains
  },
  set mains(dish){
    return [...this._courses.mains, dish]
  },
  get desserts(){
    return this._courses.desserts
  },
  set desserts(dish){
    return [...this._courses.desserts, dish]
  },
  get courses(){
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts
    }
  },
  addDishToCourses(courseName, dishName, dishPrice){
    if(courseName === 'appetizers'){
      this.appetizers({dish: dishName, price: dishPrice})
    } else if(courseName === 'mains'){
      this.main({dish: dishName, price: dishPrice})
    } else if(courseName === 'desserts'){
      this.desserts({dish: dishName, price: dishPrice})
    } else {
      console.log('Please enter valid course name')
    }
}