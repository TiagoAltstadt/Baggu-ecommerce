

window.addEventListener("load", function(){

    //Variable para capturar todos los errores
    let errors = {};
    //Variable para capturar eventos en el form
    let form = document.getElementById("formEditProduct");

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


    //Validacion del campo descripcion
    let description = document.getElementById("description");  // Se captura id del campo
    let descriptionValidation = function(){                 // Se crea un callback
        let feedback = "";

        if(validator.isEmpty(description.value, { ignore_whitespace:true })) {
            feedback = "El campo no puede estar vacio";
        } else if (!validator.isLength(description.value, { min: 20})){
            feedback = "La descripcion no puede ser menor de 20 caracteres";
        }
        if(feedback) {
            description.classList.add("is-danger")
            errors.description = feedback;
        }else{
            description.classList.remove("is-danger")
            delete errors.description
        }
            description.nextElementSibling.innerText = feedback;
        
    };

    description.addEventListener("blur", descriptionValidation)  // Se utiliza el callback en el evento


   //Validacion del campo Imagen

   let image = document.getElementById("image");
   let imageValidation = function(){
       let feedback = "";
       let imageValue = image.value;
       let imageExtension = imageValue.substring(imageValue.lastIndexOf('.'), imageValue.length);
       if ( imageExtension !== '.jpg' && imageExtension !== '.jpeg' && imageExtension !== '.png' && imageExtension !== '.gif' ){
           feedback = "Solo se permite formato .gif, .png, .jpg y .jpeg";
       }
       if(feedback) {
           image.classList.add("is-danger")
           errors.image = feedback;
       }else{
           image.classList.remove("is-danger")
           delete errors.image
       }
           image.nextElementSibling.innerText = feedback;

       console.log(imageExtension);
   };
   
   image.addEventListener("change", imageValidation)


    //Validacion del campo Precio
    let price = document.getElementById("price");  // Se captura id del campo
    let priceValidation = function(){                 // Se crea un callback
        let feedback = "";

        if(validator.isEmpty(price.value, { ignore_whitespace:true })) {
            feedback = "El campo no puede estar vacio";
        } 
        
        if(feedback) {
            price.classList.add("is-danger")
            errors.price = feedback;
        }else{
            price.classList.remove("is-danger")
            delete errors.price
        }
            price.nextElementSibling.innerText = feedback;
        
    };

    price.addEventListener("blur", priceValidation)  // Se utiliza el callback en el evento


    // Bloqueo del Submit si existen errores
    form.addEventListener("submit", function(event){
        nameValidation();
        descriptionValidation();
        imageValidation();
        priceValidation();
        if(Object.keys(errors).length){
        event.preventDefault();
        } 
    })

})