console.log("en buttonCart js");

//Quiero poder bloquear el uso del boton para disminuir si el valor en el imput esta en 0

window.addEventListener("load", function(){

    let buttonAddCart = document.getElementById("buttonAddCart");
    let buttonLessCart = document.getElementById("buttonLessCart");
    
    let inputCart = document.querySelector(".inputCart");

    let addActionButton = function(event) {
        inputCart.value = Number(inputCart.value) + 1;
    }
    let lessActionButton = function(event) {
        inputCart.value = Number(inputCart.value) - 1;
    } 

    buttonAddCart.addEventListener("click", addActionButton);
    buttonLessCart.addEventListener("click", lessActionButton);

   // inputCart.addEventListener("change", function(event){
     //   console.log(this.value);
    //})
    
    })
   
