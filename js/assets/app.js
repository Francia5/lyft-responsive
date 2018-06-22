


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

    $("#verify").click(function(){
        
        if ($("#recipient-name").val() == $randomNumber) {
        swal("Excelent!!" );
        }

    })
    //  console.log("LAB-"+ $randomNumber);


//     function getParameterByName(name, url) {
//     if (!url) url = window.location.href;
//     name = name.replace(/[\[\]]/g, "\\$&");
//     var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
//         results = regex.exec(url);
//     if (!results) return null;
//     if (!results[2]) return '';
//     return decodeURIComponent(results[2].replace(/\+/g, " "));
//     }

// // query string: ?foo=lorem&bar=&baz
// var foo = getParameterByName('foo'); // "lorem"
// var bar = getParameterByName('bar'); // "" (present with empty value)
// var baz = getParameterByName('baz'); // "" (present with no value)
// var qux = getParameterByName('qux'); // null (absent)


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




