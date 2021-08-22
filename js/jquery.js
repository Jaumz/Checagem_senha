 /*window.onload = function() {
    if (window.jQuery) {  
        // jQuery is loaded  
        alert("Yeah!");
    } else {
        // jQuery is not loaded
        alert("Doesn't Work");
    }
}
*/
$(document).ready(function () {  
    $('#txtPassword').keyup(function () {  
        $('#msg').html(forca($('#txtPassword').val()));
        if ($('#txtPassword').val() == 0) {
            $('#msg').removeClass();
        }  
    })

    $('#rePassword').keyup(function () {  
        $('#remsg').html(reforca($('#rePassword').val()));
         /*if ($('#rePassword'.val()) == $('#txtPassword'.val())) {
            $('#remsg').removeClass();
            $('#remsg').addClass('Good');
            alert("As senhas coincidem");
        }*/
        if ($('#rePassword').val() == 0) {
            $('#remsg').removeClass();
        }  
    })
    $("#exampleModal").modal('hide');
    $('form').submit(function(event) {
        negarsenha();
        validarSenha();
        return false;
    });
});

function forca(password) {  
    var strength = 0;
    if (password.length == 0) {
        $('#msg').removeClass();
        return '';
    }  
    if (password.length < 6) {  
        $('#msg').removeClass(); 
        $('#msg').addClass('Short')  
        return 'Senha muito pequena';
    }  
    if (password.length > 7) strength += 1;  

        // Tendo letra maiúscula e minúscula ganha +1 no valor total  
        if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) strength += 1;  

        // Tendo letras e números ganha +1 no valor total  
        if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/)) strength += 1;  

        // Tendo caractere especial ganha +1 no valor total 
        if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) strength += 1;  

        // Tendo 2 caracteres especiais ganha +1 no valor total 
        if (password.match(/(.*[!,%,&,@,#,$,^,*,?,_,~].*[!,%,&,@,#,$,^,*,?,_,~])/)) strength += 1;  

        if (strength < 2) {  
            $('#msg').removeClass();  
            $('#msg').addClass('Weak');  
            return 'Senha Fraca';  
        } 
        else if (strength == 2) {  
            $('#msg').removeClass();  
            $('#msg').addClass('Good');  
            return 'Boa senha';  
        } 
        else {  
            $('#msg').removeClass(); 
            $('#msg').addClass('Strong');  
            return 'Senha forte';  
        } 
    }


    function reforca(password) {  
        var strength = 0
        if (password.length == 0) {
            $('#remsg').removeClass();
            return '';
        }  
        if (password.length < 6) {  
            $('#remsg').removeClass();  
            $('#remsg').addClass('Short'); 
            return 'Senha muito pequena';  
        }  
        if (password.length > 7) strength += 1;  

        // Tendo letra maiúscula e minúscula ganha +1 no valor total  
        if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) strength += 1;  

        // Tendo letras e números ganha +1 no valor total  
        if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/)) strength += 1;  

        // Tendo caractere especial ganha +1 no valor total 
        if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) strength += 1;  

        // Tendo 2 caracteres especiais ganha +1 no valor total 
        if (password.match(/(.*[!,%,&,@,#,$,^,*,?,_,~].*[!,%,&,@,#,$,^,*,?,_,~])/)) strength += 1;  

        if (strength < 2) {  
            $('#remsg').removeClass();  
            $('#remsg').addClass('Weak');  
            return 'Senha Fraca';  
        } 
        else if (strength == 2) {  
            $('#remsg').removeClass();  
            $('#remsg').addClass('Good');  
            return 'Boa senha';  
        } 
        else {  
            $('#remsg').removeClass();  
            $('#remsg').addClass('Strong'); 
            return 'Senha forte';  
        }
    }

    function negarsenha(){
       if ($('#msg').hasClass('Short')) {
        $('#exampleModal').modal('show');
        $('.change').text("Sua senha é muito pequena.");
        $('.changeb').text("Ok, vou digitar de novo.");
    }
    if ($('#msg').hasClass('Weak')) {
        $('#exampleModal').modal('show');
        $('.change').text("Sua senha é muito fraca.");
        $('.changeb').text("Ok, vou digitar de novo.");
    }
}

function validarSenha(){
    if ($('#msg').hasClass('Short')) {
        $('#exampleModal').modal('show');
        $('.change').text("Sua senha é muito pequena.");
        $('#buttonm').text("Ok, vou digitar outra mais forte.");
        $('#txtPassword').val("");
        $('#msg').text("").removeClass('Short');
        $('#rePassword').val(""); 
        $('#remsg').text("").removeClass('Short'); 
    }
    if ($('#msg').hasClass('Weak')) {
        $('#exampleModal').modal('show');
        $('.change').text("Sua senha é muito fraca, tente novamente com uma mais forte");
        $('#buttonm').text("Ok, vou digitar outra mais forte.");
    }
    if ($('#txtPassword').val() === $('#rePassword').val() && $('#msg').hasClass('Good') && $('#remsg').hasClass('Good')) {
        $('#exampleModal').modal('show');
        $('.change').text("Suas senhas coincidem. Obrigado por preencher o formulário!");
        $('#buttonm').remove();
        $('#exampleModal').on('hide.bs.modal', function (event) {
            $('input').val("");
            $('#txtPassword').val("");
            $('#msg').text("").removeClass('Short Weak Good Strong'); 
            $('#rePassword').val("");
            $('#remsg').text("").removeClass('Short Weak Good Strong'); 
        })
    }
    if ($('#txtPassword').val() === $('#rePassword').val() && $('#msg').hasClass('Strong') && $('#remsg').hasClass('Strong')) {
        $('#exampleModal').modal('show');
        $('.change').text("Suas senhas coincidem. Obrigado por preencher o formulário!");
        $('#buttonm').remove();
        $('#exampleModal').on('hide.bs.modal', function (event) {
            $('input').val("");
            $('#txtPassword').val("");
            $('#msg').text("").removeClass('Strong'); 
            $('#rePassword').val("");
            $('#remsg').text("").removeClass('Strong'); 
        })
    }
    if ($('#txtPassword').val() > $('#rePassword').val()) {
        $('#exampleModal').modal('show');
        $('.change').text("Suas senhas são diferentes, digite corretamente e tente novamente.");
        $('.buttonm').text("Ok, vou digitar de novo.");
    }
    if ($('#txtPassword').val() < $('#rePassword').val()) {
        $('#exampleModal').modal('show');
        $('.change').text("Suas senhas são diferentes, digite corretamente e tente novamente.");
        $('.buttonm').text("Ok, vou digitar de novo.");
    }
}
