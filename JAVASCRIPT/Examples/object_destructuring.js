function data(){
  return { a: undefined, b:2, c:3, d:4, e:5, f:6, g:{ h:7, i:8 }}

}

var {
  a: first = 1,
  b: second,
  c = 3,
  g,
  g: {
    h,
    i
  } = {},
  ...third
} = data() || {}

console.log({first, second, c, third, g, h, i})