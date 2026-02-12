// Funciones para manejar el popup promocional

function showPopup() {
    const popup = document.getElementById('popup-promo');
    popup.classList.add('show');
}

function closePopup() {
    const popup = document.getElementById('popup-promo');
    popup.classList.add('hide');
    setTimeout(() => {
        popup.style.display = 'none';
        popup.classList.remove('hide', 'show');
    }, 300); // Coincide con la duración de la transición CSS
}

// Muestra el popup después de 3 segundos de cargar la página
window.onload = function() {
    setTimeout(showPopup, 3000);
};

// Funciones para enviar formulario por whatsapp

function enviarWhatsApp(event) {
  // Evita que el formulario se envíe de forma tradicional (a una URL)
  event.preventDefault();

  // Número de teléfono de destino de WhatsApp (en formato internacional)
  const phoneNumber = '56965808594'; // Reemplaza con tu número de WhatsApp

  // Obtener los valores de los campos del formulario del popup
  const nombre = document.getElementById('name_popup').value;
  const correo = document.getElementById('correo_popup').value;
  const marca = document.getElementById('marca_popup').value;

  // Validación básica para campos requeridos
    if (!nombre || !correo || !marca) {
        alert('Por favor, completa todos los campos.');
        return;
    }

  // Crear el mensaje de WhatsApp
  const mensaje = `Hola, mi nombre es ${nombre}. Vengo desde la promoción de la web.
  Quiero agendar una visita para mi vehículo.

  - Marca: ${marca}
  - Email: ${correo}`;
  
  // Codificar el mensaje para que sea seguro en la URL
  const mensajeCodificado = encodeURIComponent(mensaje);
  
  // Si es un navegador de escritorio, usar la web de WhatsApp
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${mensajeCodificado}`;

  window.location.href = whatsappUrl; // Redirigir al usuario a WhatsApp
}

document.addEventListener('DOMContentLoaded', function() {
  const panels = document.querySelectorAll('.service-panel');

  panels.forEach(panel => {
    panel.addEventListener('click', function() {
      // Solo en móviles y tablets
      if (window.innerWidth < 992) {
        const isActive = this.classList.contains('is-active');

        // Cerramos otros para que no se amontone la información
        panels.forEach(p => p.classList.remove('is-active'));

        // Si no estaba abierto, lo abrimos
        if (!isActive) {
          this.classList.add('is-active');
        }
      }
    });
  });
});