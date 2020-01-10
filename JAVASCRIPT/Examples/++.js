// x++ means:

function plusplus(orig_x){
  var orig_x_coerced = Number(orig_x)
  x = orig_x_coerced + 1

  return orig_x_coerced
}

let x = '5'
plusplus(x)
console.log(x)

let y = '2'
y++
console.log(y)