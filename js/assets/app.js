


// Función para deshabilitar el Botón de Next
    $("#textarea").keypress(function () {
        var valueT = $("#textarea").val().length;
        // console.log(valueT);
        if (valueT == 9) {
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


    // Codigo Random 
    var $randomNumber = 0;
    $randomNumber = parseInt(Math.random() * 1000);
    
    
    //  console.log("LAB-"+ $randomNumber);



$(document).ready(function () {
    setTimeout(function () {
        // Splash
        $("#first-lyft").fadeOut(1800);
    }, 1000);

        // Modal
    $('#myModal').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus')
    });

        // Alert
    $("#mainButton").click(function () {
        swal("Excelent!!", "Your code is : LAB-" + $randomNumber);
    })

    
});




