function User(name, score){
  this.name = name
  this.score = score
}

User.prototype.increment = function() {
  this.score++
}

let user1 = new User('Will', 3)

console.log(User.prototype)
console.log(user1)