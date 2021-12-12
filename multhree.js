function mul(a){
    a =document.getElementsByClassName("num").value
    return function (b){
        b =document.getElementsByClassName("num").value
        return function (c){
            console.log("The multiply is" + a * b * c);
        }
    }
}
mul(a)(b)(c);