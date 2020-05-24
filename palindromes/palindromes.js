const palindromes = function(str) {
    str=str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    str=str.replace(/\s/g,"");
    str=str.toLowerCase();
    //return (str)
    newstr = str.split("").reverse().join("");
    return newstr==str

}

module.exports = palindromes
