const getTheTitles = function(obj) {
    arr=[];
    obj.forEach(element => {
        arr.push(element.title)
        
    });
    return arr
}

module.exports = getTheTitles;
