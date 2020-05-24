const fibonacci = function(n) {
    if (n<0){
        return 'OOPS';
    }
    array=[];
    while (array.length<n){
        if (array.length==0){
            array.push(1);
        }
        topush=0
        array.slice(Math.max(array.length - 2, 0)).forEach(element => {
            topush+=element;
        });
        array.push(topush);
    }
    return array[array.length - 1]
}

module.exports = fibonacci
