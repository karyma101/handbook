//Ex 1
interface Person {
  first: string,
  last: string,
  [key: string] : any //Remove restriction of optional keys
}

const person: Person = {
  first: 'Kary',
  last: 'Ma'
}

const person2: Person = {
  first: 'John',
  last: 'Doe',
  key3: 'value3',
  key4: 'value4'
}

//Ex 2
function pow(x: number, y: number):string {
  return Math.pow(x, y).toString()
}

pow(5, 10)

//Ex 3

type myList = [number?, string?, boolean?]

const arr: myList = []

arr.push(1)
arr.push('23')
arr.push(false)