
window.addEventListener("load", function(){
    

 //Variable para capturar todos los errores
 let errors = {};
 //Variable para capturar eventos en el form
 let form = document.getElementById("formRegister");

 //Validacion del campo nombre
 let name = document.getElementById("name");   // Se captura id del campo
 let nameValidation =  function(){              // Se crea un callback
     let feedback = "";

     if(validator.isEmpty(name.value, { ignore_whitespace:true })) {
         feedback = "El campo no puede estar vacio";
     } else if (!validator.isLength(name.value, { min: 5})){
        feedback = "El nombre no puede ser menor de 5 caracteres";
    }
     if(feedback) {
         name.classList.add("is-danger")
         errors.name = feedback;
     }else{
         name.classList.remove("is-danger")
         delete errors.name
     }
         name.nextElementSibling.innerText = feedback;
        
 };

 name.addEventListener("blur", nameValidation )  // Se utiliza el callback en el evento


 //Validacion del campo apellido
 let surname = document.getElementById("surname");   // Se captura id del campo
 let surnameValidation =  function(){              // Se crea un callback
     let feedback = "";

     if(validator.isEmpty(surname.value, { ignore_whitespace:true })) {
         feedback = "El campo no puede estar vacio";
     } else if (!validator.isLength(surname.value, { min: 5})){
        feedback = "El apellido no puede ser menor de 5 caracteres";
    }
     if(feedback) {
         surname.classList.add("is-danger")
         errors.surname = feedback;
     }else{
         surname.classList.remove("is-danger")
         delete errors.surname
     }
         surname.nextElementSibling.innerText = feedback;
        
 };

 surname.addEventListener("blur", surnameValidation )  // Se utiliza el callback en el evento


 //Validacion del campo Imagen

 let avatar = document.getElementById("avatar");
 let avatarValidation = function(){
     let feedback = "";
     let avatarValue = avatar.value;
     let avatarExtension = avatarValue.substring(avatarValue.lastIndexOf('.'), avatarValue.length);
     if ( avatarExtension !== '.jpg' && avatarExtension !== '.jpeg' && avatarExtension !== '.png' && avatarExtension !== '.gif' && avatarExtension !== '' ){
         feedback = "Solo se permite formato .gif, .png, .jpg y .jpeg";
     }
     if(feedback) {
         avatar.classList.add("is-danger")
         errors.avatar = feedback;
     }else{
         avatar.classList.remove("is-danger")
         delete errors.avatar
     }
         avatar.nextElementSibling.innerText = feedback;

    };
 
    avatar.addEventListener("change", avatarValidation)
   

 //Validacion del campo Usuario
 let username = document.getElementById("username");   // Se captura id del campo
 let usernameValidation =  function(){              // Se crea un callback
     let feedback = "";

     if(validator.isEmpty(username.value, { ignore_whitespace:true })) {
         feedback = "El campo no puede estar vacio";
     } else if (!validator.isLength(username.value, { min: 5})){
        feedback = "El usuario no puede ser menor de 5 caracteres";
    }
     if(feedback) {
         username.classList.add("is-danger")
         errors.username = feedback;
     }else{
         username.classList.remove("is-danger")
         delete errors.username
     }
         username.nextElementSibling.innerText = feedback;
        
 };

 username.addEventListener("blur", usernameValidation )  // Se utiliza el callback en el evento


 //Validacion del campo email
 let email = document.getElementById("email");   // Se captura id del campo
 let emailValidation =  function(){              // Se crea un callback
     let feedback = "";

     if(validator.isEmpty(email.value, { ignore_whitespace:true })) {
         feedback = "El campo no puede estar vacio";
     } else if (!validator.isEmail(email.value)){
         feedback = "Debe ingresar un Email valido";
     } else if (!validator.isLength(email.value, { min: 5})){
        feedback = "El email no puede ser menor de 5 caracteres";
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
     } else if (!validator.isLength(password.value, { min: 8})){
         feedback = "La contraseña no puede ser menor de 8 caracteres";
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
     nameValidation();
     surnameValidation();
     avatarValidation();
     usernameValidation();
     emailValidation();
     passwordValidation();
        if(Object.keys(errors).length){
        event.preventDefault();
        } 
    })

})