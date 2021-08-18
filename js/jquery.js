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
    $('form').submit(function(event) {
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

   /* function validarSenha() {
      var senha1 = document.getElementById("txtPassword").value;
      var senha2 = document.getElementById("rePassword").value;
      if (senha1 == senha2) {
        $('#remsg').removeClass().addClass('Good');  
        return alert("As senhas coincidem");
    } else {
        return false;
    }
}*/

function validarSenha(){
    if ($('#txtPassword').val() == $('#rePassword').val())  {
        $('#remsg').removeClass().addClass('Good');
        return alert("As senhas coincidem");
    } else{
        return false;
    }
}