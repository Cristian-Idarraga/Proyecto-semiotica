$(document).ready(function () {
    var cont = 1;
    $(function () {
        var param = location.search.substring(1, location.search.length);
        var array = param.split("&");

        var nombre = (array[0].substring(7, array[0].length)).replace(/[+]/g, " ");
        var correo = array[1].substring(7, array[1].length).replace(/%40/g, "@");
        var contra = array[2].substring(5, array[2].length);

        if(nombre == ""){
            alert("Debes llenar todos los datos");
        }else if(correo == ""){
            alert("Debes llenar todos los datos");
        }else if(contra == ""){
            alert("Debes llenar todos los datos");
        }else{
            var htmlTags = '<tr>' +
            '<td>' + cont + '</td>' +
            '<td>' + nombre + '</td>' +
            '<td>' + correo + '</td>' +
            '<td>' + contra + '</td>' +
            '</tr>';
            cont++;
            
            $("#myTable-body").append(htmlTags);
        }
    })
});