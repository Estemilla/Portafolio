
    const form = document.querySelector('form');
    const submitButton = document.querySelector('button[type="submit"]');
 
    
    form.addEventListener('submit', function(event) {
        
        event.preventDefault();
 
       
        submitButton.textContent = "Enviando...";
 
        setTimeout(() => {
            submitButton.textContent = "¡Mensaje Enviado!";
 
        }, 2000);
    });
 