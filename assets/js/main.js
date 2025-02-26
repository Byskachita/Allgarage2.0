//ES6
/*VENTANA POPUP 18*/
//Obtener la modal
var modal = document.getElementById("myModal");

//Obtener el botón de cierre
var closeBtn = document.querySelector(".close-btn");

//Cuando el usuario haga clic en el botón de cierre, cierra la modal
closeBtn.onclick = function(){
    modal.style.display = "none";
}

//También puedes cerrar la modal si el usuario hace clic fuera de la modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


/* VENTANA POPUP PROMOCIÓN
$(document).ready(() => {

    const showPopup = () => {
        $('.pop-up').addClass('show');
        $('.pop-up-wrap').addClass('show');
    }

    $("#close").on('click', () => {
        $('.pop-up').removeClass('show');
        $('.pop-up-wrap').removeClass('show');
    });

    setTimeout(showPopup, 2000);

});
/*
//ES5
$(document).ready(function() {

    function showPopup() {
        $('.pop-up').addClass('show');
        $('.pop-up-wrap').addClass('show');
    }

    $("#close").click(function() {
        $('.pop-up').removeClass('show');
        $('.pop-up-wrap').removeClass('show');
    });

    setTimeout(showPopup, 2000);

});*/
