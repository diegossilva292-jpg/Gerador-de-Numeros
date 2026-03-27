function generateNumber() {


    const min = Math.ceil(document.querySelector(".input-min").value)
    const max = Math.floor(document.querySelector(".input-max").value)

if(min >= max){
alert("O valor minimo tem que ser MENOR que o valor máximo")
}

else {
   const numero = Math.floor(Math.random() * (max - min) + min);

  document.getElementById("resultado").innerText = numero;
}


}