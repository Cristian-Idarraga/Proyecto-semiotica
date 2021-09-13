$(document).ready(function () {
    $(function () {
        var param = location.search.substring(1, location.search.length);
        var array = param.split("&");

        var dia = new Date().getDate();
        var mes = new Date().getMonth();
        var año = new Date().getFullYear();
        var contacto1;
        var contacto2;
        var contacto3;
        var placa = "345FG";
        var conductor;
        var km = getRandomInt(0,100) + "km";
        var numero1;
        var numero2;
        var numero3;

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