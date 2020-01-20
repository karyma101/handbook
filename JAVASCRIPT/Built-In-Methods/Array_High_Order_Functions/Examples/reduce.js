// Average of an Array
const euros = [29.76, 41.85, 46.5, 100];

const average = euros.reduce((total, amount, index, array) => {
  // console.log({ total, amount, index, array })
  total += amount
  if (index === array.length - 1) {
    return total / array.length;
  } else {
    return total;
  }
})

console.log(average)


// Flattening Arrays
const data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

const flat = data.reduce((total, amount) => {
  return total.concat(amount);
}, []);

console.log(flat)


// Filtering out values of an array
const data1 = [
  { a: 'happy', b: 'robin', c: ['blue', 'green'] },
  { a: 'tired', b: 'panther', c: ['green', 'black', 'orange', 'blue'] },
  { a: 'sad', b: 'goldfish', c: ['green', 'red'] }
];

const colors = data1.reduce((total, amount) => {
  amount.c.forEach(color => {
    total.push(color);
  })
  return total;
}, [])

// Filtering out unique values of an array
const uniqueColors = data1.reduce((total, amount) => {
  amount.c.forEach(color => {
    if (total.indexOf(color) === -1) {
      total.push(color);
    }
  });
  return total;
}, []);

console.log(colors)

console.log(uniqueColors)