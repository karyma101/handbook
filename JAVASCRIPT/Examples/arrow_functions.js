// Functions as return values
const appendEmoji = (fixed) => (dynamic) => fixed + dynamic
const appendEmojiS = function(fixed){ 
  return function(dynamic) {
    return fixed + dynamic
  }
}

const happy = appendEmojiS('😀')
const sad = appendEmoji('😢')

console.log(appendEmoji('😡')('yesterday'))
console.log(happy('today'))
console.log(sad('tomorrow'))