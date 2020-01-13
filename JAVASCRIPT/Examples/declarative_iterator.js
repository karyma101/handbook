var str = 'hello'
var it = str[Symbol.iterator]()
for(let v of it) {
  console.log(v)
}

for(let v of str){
  console.log(v)
}

var letters = [...str]
console.log(letters)