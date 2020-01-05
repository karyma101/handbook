function outer(){
  let counter = 0

  function increment(){
    counter++
    console.log(counter)
  }

  return increment
}

let newFunc = outer()
newFunc()
newFunc()