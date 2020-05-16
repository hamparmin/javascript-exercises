const repeatString = function(string,n) {

    let answer=""
    for (let i=0;i<n;i++){
        answer+=string;
    }
    return answer
}

module.exports = repeatString
