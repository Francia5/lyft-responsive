
// Función para deshabilitar el Botón de Next
    $("#textarea").keypress(function () {
        var valueT = $("#textarea").val().length;
        // console.log(valueT);
        if (valueT == 9 ) {
            $("#mainButton").prop("disabled", false);
    
        } else {
            $("#mainButton").prop("disabled", true);
        }
        
        if (valueT <= 10) {
            $("#textarea").prop("disabled", false);

        } else {
            $("#textarea").prop("disabled", true);
        }


    });


    var $randomNumber = 0;
    $randomNumber = Math.random();
    $randomNumber.val().html;

    console.log($randomNumber);

    // $('#mainButton').click(function () {
//     $('#phone').val('');
//     $('#sign-up').hide();
// });
    



$(document).ready(function () {
    setTimeout(function () {
        // Splash
        $("#first-lyft").fadeOut(1800);
    }, 1000);

        // Modal

    $('#myModal').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus')
    });



});





