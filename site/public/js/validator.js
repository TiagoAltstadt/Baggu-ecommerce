window.addEventListener('load', function() {

    //creo el array que almacenara los errores
    let errors = {};

    //Capturo los elementos
    let form = document.getElementById('loginForm');
    let email = document.getElementById('email');
    

    //A partir de aca creo 2 funciones para validar email y password

    let validateEmail = function(){
        let feedback = '';

        if (validator.isEmpty(email.value, { ignore_whitespace:true })) { //deberia ignorar el whitespace? es un mail, no tiene espacios...
            feedback = '(Front) El email no puede estar vacio';
        }else if(!validator.isEmail(email.value)){
            feedback = '(Front) Email invalido';

        }
        handleFeedback(email, feedback);
    };


    let handleFeedback = function (element, feedback) {
        let feedbackElement = element.parentElement.nextElementSibling;

        if (feedback) {
            element.classList.add('is-danger');
            feedbackElement.classList.add('is-danger');
            errors[element.name] = feedback;
        } else {
            element.classList.remove('is-danger');
            feedbackElement.classList.remove('is-danger');
            delete errors[element.name];
        }   
        feedbackElement.innerText = feedback;
    }


    email.addEventListener('blur', validateEmail);


    form.addEventListener('submit', function(event){

        validateEmail();

        //si en alguna de las funciones arriba hay error, entonces no se envia nada el formulario
        if(Object.keys(errors).length){
            event.preventDefault();
            console.log('Prevent default');
        }
    })

})