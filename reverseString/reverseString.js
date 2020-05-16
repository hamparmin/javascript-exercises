const reverseString = function(string) {
    let answer="";
    let split =string.split("");
    for (let i=split.length-1;i>=0;i--){
        answer+=split[i];
    }
    return answer;
}

module.exports = reverseString
