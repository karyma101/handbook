function FindIntersection(strArr) { 
    x = strArr[0].replace(/\s/g, "").split(',')
    y = strArr[1].replace(/\s/g, "").split(',')
    z = []
    
    for(let i = 0; i < x.length; i++){
        for(let j = 0; j < y.length; j++){
            if(x[i] === y[j]){
                z.push(y[j])
            }
        }
    }

    return z.join(',') || false
  }

console.log(FindIntersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]))