function test({ name, greeting}) {
  return `${greeting} ${name}`
}

console.log(test({greeting: 'Hello', name: 'Kary'}))