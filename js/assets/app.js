

// var count = 0;
// function getContactData() {
//     // console.log("holi");
//     var $name = $("#contact-name");
//     var $phone = $("#contact-phone");
//     // console.log(name, phone);
//     addContactData($name.val(), $phone.val());
//     $name.val('');
//     $phone.val('');

// };

// function addContactData(name, phone) {
//     count++;
//     var finaltemplate = "";
//     finaltemplate = template.replace("__name__", name)
//         .replace("__phone__", phone);

//     $("main").append(finaltemplate);
//     $("h5").html("Total contactos : " + count);

// }

var template = '<div id="modal-add" class="modal">'+
                    '<div class="modal-content">'+
                        '<h4>Sign up</h4>'+
                        '<p class="text-justify">Join now for free ride credit</p>'+
                        '<div class="row">'+
                            '<form class="col s12">'+
                                '<div class="row">'+
                                    '<div class="input-field col s6">'+
                                        '<i class="material-icons prefix">phone</i>'+
                                        '<input id="contact-phone" type="tel" class="validate" placeholder="10 dígitos">'+
                                        '<label for="contact-phone">Telephone</label>'+
                                     '</div>'+
                                 '</div>'+
                            '</form>'+
                           '<p class="text-justify">We´ll send a text to verify your phone</p>'+
                            '<div class="modal-footer">'+
                                '<a id="add-contact" href="#!" class="modal-close waves-effect waves-green btn left">Next</a>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>';

$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
})


$(document).ready(function () {
    setTimeout(function () {
        $("#first-lyft").fadeOut(1800);
    }, 1000);
});