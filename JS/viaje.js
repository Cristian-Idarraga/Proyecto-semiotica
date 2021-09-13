$(document).ready(function () {
    $(function () {
        var param = location.search.substring(1, location.search.length);
        var array = param.split("&");

        var dia = new Date().getDate();
        var mes = new Date().getMonth();
        var año = new Date().getFullYear();
        var contacto1 = '<p>' + array[2].substring(3,array[2].length).replace(/[+]/g," ") + '</p>';
        var contacto2 = '<p>' + array[4].substring(3,array[4].length).replace(/[+]/g," ") + '</p>'; 
        var contacto3 = '<p>' + array[6].substring(3,array[6].length).replace(/[+]/g," ") + '</p>'; 
        var placa = '<p>' + array[1].substring(12,array[1].length) + '</p>';
        var conductor = '<p>' + array[0].substring(7,array[0].length).replace(/[+]/g, " ") + '</p>'; 

        var km = '<p>' + getRandomInt(0,100) + "km" + '</p>';
        var numero1 = '<p>' + array[3].substring(3, array[2].length)+ '</p>'; 
        var numero2 = '<p>' + array[5].substring(3,array[5].length)+ '</p>'; 
        var numero3 = '<p>' + array[7].substring(3,array[5].length)+ '</p>'; 

        $(".placa").append(placa);
        $(".driver").append(conductor);
        $(".km").append(km);
        $(".time-date").append(dia + "/" + mes + "/" + año);
        $(".contact-1").append(contacto1);
        $(".contact-2").append(contacto2);
        $(".contact-3").append(contacto3);
        $(".number-1").append(numero1);
        $(".number-2").append(numero2);
        $(".number-3").append(numero3);

    })

    function getRandomInt(min, max){
        return Math.floor(Math.random() * (max - min) + min);
    }
});