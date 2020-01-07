function newCreator(name, score) {
  let newUser = Object.create(userFunctionStore)
  newUser.name = name
  newUser.score = score 

  return newUser
}

let userFunctionStore = {
  increment: function(){
    this.score++
  },
  login: function(){
    console.log('Login Successfully')
  }
}

let user1 = newCreator('Will', 10)
user1.increment()
console.log(user1)
console.log({name: 'bob'})
