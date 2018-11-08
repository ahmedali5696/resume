function funct() {

    var inputContent = document.getElementById("username").value;

    if (inputContent == "") {
        document.getElementById("userReq").style.display = "block";
    } else {
        document.getElementById("userReq").style.display = "none";
    }
}


function functi() {

    var inputContent = document.getElementById("password").value;

    if (inputContent == "") {
        document.getElementById("passReq").style.display = "block";
    } else {
        document.getElementById("passReq").style.display = "none";
    }
}

function check() {
    document.getElementById("userReq").style.display = "none";
}

function checke() {
    document.getElementById("passReq").style.display = "none";
}

$(function () {

    'use strict';

    $('.user input[type="text"]').on('focusout', function () {
        if ($(this).val() != '') {
            $(this).parent().addClass('has-data');
        } else {
            $(this).parent().removeClass('has-data');
        }
    })
});


$(function () {

    'use strict';

    $('.pass input[type="password"]').on('focusout', function () {
        if ($(this).val() != '') {
            $(this).parent().addClass('has-pass');
        } else {
            $(this).parent().removeClass('has-pass');
        }
    })
});

function func(event) {
    var element = document.getElementById("bt");
    if (event.key == "Enter" || event.which == 13 || event.keyCode == 13) {
        element.classList.add("signinenter");
    }
}


$('.singIn').click(function () {
    $(this).css('background-color', '#c9cdd7');
});

function funce(event) {
    var element = document.getElementById("billingSubmit");
    if (event.key == "Enter" || event.which == 13 || event.keyCode == 13) {
        element.classList.add("signinenter");
    }
}

$('.billingSubmit').click(function () {
    $(this).css('background-color', '#c9cdd7');
});

$('.billingSubmit').click(function () {
    $(this).css('color', '#767676');
});

function funcec(event) {
    var element = document.getElementById("p-billingSubmit");
    if (event.key == "Enter" || event.which == 13 || event.keyCode == 13) {
        element.classList.add("signinenter");
    }
}

$('.p-billingSubmit').click(function () {
    $(this).css('background-color', '#c9cdd7');
});

$('.p-billingSubmit').click(function () {
    $(this).css('color', '#767676');
});
