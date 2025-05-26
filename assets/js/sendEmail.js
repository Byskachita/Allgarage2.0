document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form_datos");
    const popup = document.getElementById("popup");
    const submitBtn = form.querySelector("button[type='submit']");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); //Evita el envío inmediato

        //Deshabilitar el botón de envío
        submitBtn.disabled = true;
        submitBtn.innerText = "Enviando...";

        const formData = new FormData(form);

        fetch('send.php', {
            method: "POST",
            body: formData,
        })
        .then(response => response.text())
        .then(data => {
            console.log("Respuesta del servidor:", data);

            // Normaliza el texto para comparar
            const normalized = data.toLowerCase().trim();
            
            if (normalized.includes("Formulario enviado correctamente")) {
                //Mostrar el popup
                popup.style.display = "block";

                //Resetea el formulario y el botón
                setTimeout(() => {
                    popup.style.display = "none";
                    form.reset(); //Limpiar el formulario
                    submitBtn.disabled = false;
                    submitBtn.innerText = "Enviar"; //Restaurar el texto del botón
            }, 4000); // Ocultar en 4 segundos
        } else {
            alert("Hubo un error al enviar el formulario:\n" + data);
            submitBtn.disabled = false;
            submitBtn.innerText = "Enviar"; //Restaurar el texto del botón
            }
        })
        .catch(error => {
            alert("Error en la conexión.");
            console.error("Error de conexión:", error);
            submitBtn.disabled = false;
            submitBtn.innerText = "Enviar"; //Restaurar el texto del botón
        });
    });
});