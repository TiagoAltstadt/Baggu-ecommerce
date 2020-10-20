


window.addEventListener("load", function(){

    //Variable para capturar todos los errores
    let errors = {};
    //Variable para capturar eventos en el form
    let form = document.getElementById("formLogin");

    //Validacion del campo email
    let email = document.getElementById("email");   // Se captura id del campo
    let emailValidation =  function(){              // Se crea un callback
        let feedback = "";

        if(validator.isEmpty(email.value, { ignore_whitespace:true })) {
            feedback = "El campo no puede estar vacio";
        } else if (!validator.isEmail(email.value)){
            feedback = "Debe ingresar un Email valido";
        }
        if(feedback) {
            email.classList.add("is-danger")
            errors.email = feedback;
        }else{
            email.classList.remove("is-danger")
            delete errors.email
        }
            email.nextElementSibling.innerText = feedback;
           
    };

    email.addEventListener("blur", emailValidation )  // Se utiliza el callback en el evento


    //Validacion del campo password
    let password = document.getElementById("password");  // Se captura id del campo
    let passwordValidation = function(){                 // Se crea un callback
        let feedback = "";

        if(validator.isEmpty(password.value, { ignore_whitespace:true })) {
            feedback = "El campo no puede estar vacio";
        } else if (!validator.isLength(password.value, { min: 5})){
            feedback = "La contraseña no puede ser menor de 5 caracteres";
        }
        if(feedback) {
            password.classList.add("is-danger")
            errors.password = feedback;
        }else{
            password.classList.remove("is-danger")
            delete errors.password
        }
            password.nextElementSibling.innerText = feedback;
        
    };

    password.addEventListener("blur", passwordValidation)  // Se utiliza el callback en el evento

    // Bloqueo del Submit si existen errores
    form.addEventListener("submit", function(event){
        emailValidation();
        passwordValidation();
        if(Object.keys(errors).length){
        event.preventDefault();
        } 
    })

})