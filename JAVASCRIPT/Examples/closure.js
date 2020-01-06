function outer(){
  let counter = 0

  function increment(){
    counter++
    console.log(counter)
  }

  return increment
}

let newFunc = outer()
newFunc() //1
newFunc() //2

let anotherFunc = outer()
anotherFunc() //1
newFunc() //3