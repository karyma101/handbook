function data() {
  
}

var tmp = data() || [1,2,,null,5,6]
var first = tmp[0]
var second = tmp[1]
var third = tmp[2] === undefined ? 10 : tmp[2]
var fourth = tmp[3] === undefined ? 10 : tmp[3]
var  fifth = tmp.slice(4)

console.log({first,second,third,fourth,fifth})

var temp 
var [
  ,
  s,
  t=10,
  fo,
  ...fi
] = temp = data() || [1,2,,null,5,6]

console.log({s,t,fo,fi})


// Swapping

var x = 10
var y = 20

var [a,b] = [y,x]

console.log({a,b})

// Array as parameters

function arrayDes([first,second] = []){
  return  { 
    first,
    second 
  }
}

console.log(arrayDes())
console.log(arrayDes([1,2,3,4]))