//RESOLVER BUG DO CSS, COLOCO ALGUMA COISA ENCIMA DO = E O = MUDA
let b = document.getElementById("display")
function adcionarNum(num){
    document.getElementById("display").innerHTML += num     
}
function limpar(){
    document.getElementById("display").innerHTML = " "
}
function a (){
    console.log(b)
}
b.onclick = a()