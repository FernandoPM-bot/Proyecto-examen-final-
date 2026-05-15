/*Código para hacer funcionar el formulario*/
document.getElementById(contact-form). addEventListener('Submit', function(event){
    event.preventDefault();

    const submitButton = this.querySelector('button[type="submit"]');
    submitButton.classlist.add('loading');

    const formData = new FormData(this);

    fetch('/send:mail', {
        method: 'POST',
        body: formData            
    })
    .then(Response => Response.text())
    .then(data => {
        showFlasMessage('Mensaje enviado correctamente.', 'success');
        this.reset(); //Limpia el formulario
        submitButton.classlist.remove('loading');
    })
    .catch(error => {
        showFlashMessage('Hubo un errror al enviar el mensaje.', 'danger');
        console.error('Error', error);
        submitButton.classlist.remove('loading');
    });
});

function showFlashMessage(message, category) {
    const flashContainer = document.getElementById('flash-messages');
    const FlashMessage = document.createElement('div');
    FlashMessage.className = `alert ${category}`;
    FlashMessage.textContent = message;

    flashContainer.appendChild(flashMessage);

    setTimeout(() => {
        flashMessage.remove()
    }, 5000);
}