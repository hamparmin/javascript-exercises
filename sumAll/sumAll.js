const sumAll = function(n1,n2) {
    let start=Math.min(n1,n2);
    let end=Math.max(n1,n2);
    let sum=0;
    if (n1<0 || n2<0){
        return 'ERROR'
    }
    if (typeof(n1)!='number' || typeof(n2)!='number'){
        return 'ERROR'
    }
    for (let i=start;i<=end;i++){
        sum+=i;
    }
    return sum
}

module.exports = sumAll
