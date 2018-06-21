

// var mainButton = document.getElementById('mainButton');

// mainButton.addEventListener('click', function () {
//     var textArea = document.getElementById('textArea').value;
//     document.getElementById('textArea').value = '';

//     if (textArea.length == 0 || textArea == null || textArea.length > 10) {
//         return false;
//         console.log(textArea);
        
//     }

// });

/*textarea.addEventListener('click', function () {
    var textArea = document.getElementById('textarea').value;
    document.getElementById('textArea').value = '';

    //Desabilitar boton twittear si no hay texto ||  si el texto tiene una extension más larga de 140 caracteres
    if (textArea.length == 0 || textArea == null || textArea.length > 10) {
        return false;
        console.log(textArea);
        
    }
};*/

// var textLegth = function(e) {
//     console.log(e);
//     var telephone = $("#mainButton").val();
//     // console.log(telephone);
//     if (telephone.length < 10 && typeof (telephone) !== "number") {
//         console.log(telephone);
        
//         return false;
//      } else {
//         return true;
//     }
    

    
// };
i = 0;
$(document).ready(function () {
    $("#textarea").keypress(function () {
        var valueT = $("#textarea").val().length;
        console.log(valueT);
        if (valueT >= 10 ) {
            $("#mainButton").removeAttr("disabled");
            $("textarea").attr("disabled");
        }
        
        

    });
});



// $(document).ready(function () {
//     setTimeout(function () {
//         $("#first-lyft").fadeOut(1800);
//     }, 1000);

//     $('#myModal').on('shown.bs.modal', function () {
//         $('#myInput').trigger('focus')
//     });

//    /* $("#textarea").keypress(textLegth)*/

// });

