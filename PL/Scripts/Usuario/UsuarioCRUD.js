$(document).ready(function () {
    GetAll();
});

function GetAll() {
    $.ajax({
        type: 'GET',
        url: 'https://randomuser.me/api/',
        success: function (result) {//200 OK 
            $('#tblUsuario tbody');
             
                var filas =
                  '<tr>'
                + "<td class='text-center'>" + result.results[0].gender + "</td>"
                + "<td class='text-center'>" + result.results[0].name.title + " " + result.results[0].name.first + " " + result.results[0].name.last + "</td>"
                + "<td class='text-center'>" + result.results[0].location.street.number + result.results[0].location.street.name + "</td>"
                + "<td class='text-center'>" + result.results[0].email + "</td>"
                + "<td>"+"<img src= "+result.results[0].picture.large +">"+ "</td>"
                + "</tr>";
                $("#tblUsuario tbody").append(filas);
       
        },
        error: function (result) {
        alert('Error en la consulta.' + result.responseJSON.ErrorMessage);
        }
    });
}
