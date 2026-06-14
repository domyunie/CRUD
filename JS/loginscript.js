




//Boton
document.addEventListener('DOMContentLoaded', () => {
    
    const submit = document.getElementById('submit-bttn');

    if (submit) {
        submit.addEventListener('click', () => {
           
            window.location.href = 'http://127.0.0.1:3000/HTML/crud.html?vscode-livepreview=true';
   });
    }
});