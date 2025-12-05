document.addEventListener("DOMContentLoaded", ()=>{
    const myForm = document.getElementById("commentForm");
    const nameInput = document.getElementById("name");
    const nameError = document.getElementById("nameError");
    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    const commentInput = document.getElementById("comment");
    const commentError = document.getElementById("commentError");

    const isEmptyRegex = /^\s*$/; 
    const isValidEmailRegex = /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/;
    const isValidComment = /^\s*\S+(?:\s+\S+){2,}\s*$/; 

    myForm.addEventListener("submit", (e)=>{
        e.preventDefault(); 
        let isValid = true; 

        nameError.style.display = "none";
        emailError.style.display = "none";
        commentError.style.display = "none";
        
        if (isEmptyRegex.test(nameInput.value)){
            nameError.textContent = "El nombre es requerido.";
            nameError.style.display = 'block';
            isValid = false;
        }

        const emailValue = emailInput.value.trim();
        if(!isValidEmailRegex.test(emailValue)) {
            emailError.textContent = isEmptyRegex.test(emailValue) 
                ? "El email es requerido." 
                : "El formato del correo no es válido. tiene que tener un dominio ejemplo: test@dominio.com";
            
            emailError.style.display = 'block';
            isValid = false;
        }

        if(!isValidComment.test(commentInput.value)) {
            commentError.textContent = "El comentario debe tener al menos 3 palabras.";
            commentError.style.display = 'block';
            isValid = false;
        }

        if (isValid) {
            alert(`¡Comentario enviado por ${nameInput.value.trim()}!`);
            // myForm.submit(); 
            myForm.reset();
        } else {
            if (nameError.style.display === 'block') {
                nameInput.focus();
            } else if (emailError.style.display === 'block') {
                emailInput.focus();
            } else if (commentError.style.display === 'block') {
                commentInput.focus();
            }
        }
    });
});