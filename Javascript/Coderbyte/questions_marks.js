function QuestionsMarks(str) {
    for(let i = 0; i < str.length; i++){
        if(Number(str[i])){
            let counter = 0

            for(let j = i + 1; j < str.length; j++){
                if(str[j] === '?'){
                    counter++
                } else if(Number(str[j])){
                    if(Number(str[i]) + Number(str[j]) === 10 && counter === 3){
                        return true
                    }
                    break
                }         
            }
        }
    }
    return false
}

console.log(QuestionsMarks("acc?7?sss?4rr???5???5"))