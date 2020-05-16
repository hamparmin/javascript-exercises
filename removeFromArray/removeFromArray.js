const removeFromArray = function(array,...toremove) {
    for (let i=0;i<toremove.length;i++){
        let index=array.indexOf(toremove[i]);
        if (index != -1){
            array.splice(index,1);
        }
    }
    return array

}

module.exports = removeFromArray
