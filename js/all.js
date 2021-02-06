$(document).ready(function () {
    $('.burger').click(function (e) { 
        e.preventDefault();
        $('body').toggleClass('burger');
    });
});