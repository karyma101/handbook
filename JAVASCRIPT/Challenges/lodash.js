let _ = {
  clamp(c,l,u){
  	const lower = Math.max(c, l)
    const value = Math.min(lower, u)
    return value
  },
  inRange(n,s,e){
    let min = s
    let max = e
    if(e < s){
      min = e
      max = s
    }
    if(e === undefined){
      min = 0
      max = s
    }
    if(n >= min && n < max){
      return true
    } else {
      return false
    }
  },
  words(s){
    return s.split(' ')
  },
  pad(s,n){
    let string = s
    
    if(s.length > n){
      return s
    }
    
    let padding = n - s.length

    for(let i = 1; i <= padding; i++){
      if(i % 2 === 0){
        string = ' ' + string
      } else{
        string = string + ' '  
      }
    }
    
    return string
  },
  has(o, k){
    let hasValue = o[k] === undefined ? false : true
    
    return hasValue
  },
  invert(a){
    let newObj = {}
    
    for(let objKey in a){
      newObj[a[objKey]] = objKey
    }
    return newObj
  },
  findKey(obj, p){
    for(let key in obj){
      let value = obj[key]
      let pReturn = p(value)
      if(pReturn){
        return key
      }
    }
    
    return undefined
  },
	drop(a, n){
    let num = n === undefined ? 1 : n
    let newArr = a.slice(num)
    
    // for(let i = 1; i <= num; i++){
    //   newArr.shift()
    // }
    
    return newArr
  },
  dropWhile(arr, pred){
    let dropNumber = arr.findIndex((el, idx)=>{
      return !pred(el, idx, arr)
    })
    
    let droppedArray = this.drop(arr, dropNumber)
    return droppedArray
  },
  chunk(arr, size = 1){
    let newArr = []
    for(){
      
    }
    
  }
}

// https://www.codecademy.com/paths/web-development/tracks/web-dev-js-arrays-loops-objects/modules/pjs-javascript-capstone/projects/lodash