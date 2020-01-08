class User {
  constructor(name, score){
    this.name = name,
    this.score = score
  }
  increment(){
    this.score++
  }
  login(){
    console.log('login')
  }
}

let user1 = new User('Mark', 5)

user1.increment()

console.log(user1)
console.log(User)