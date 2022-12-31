$(document).ready(function(){
    $("#telefone").mask("(00) 00000-0000")
})

$("#form_contato").validate({
   
    rules : {
        nome:{
               required:true,
               minlength:10,
               minWords: 2
        },
        email:{
               required:true
        },
        telefone:{
               required:true
        }                                 
  },
  messages:{
        nome:{
               required:"Por favor, informe seu nome completo.",
               minlength:"O nome deve ter pelo menos 10 caracteres.",
               minWords: "Por favor, forneça pelo menos 2 palavras."
        },
        email:{
               required:"É necessário informar um email."
        },
        telefone:{
               required:"O telefone não pode ficar em branco."
        }      
  },
   
   submitHandler: function(form, e) {
      e.preventDefault();
    
        let nomeValue = $('#nome').val();
        let emailValue = $('#email').val();
        let telefoneValue = $('#telefone').val();
        
        let formObj = {
            nome: nomeValue,
            email: emailValue,
            telefone: telefoneValue
        };
    
        console.log(formObj);
        
        $('.modal').show();
        $('.container').hide(1000);
      
}});

$( "#fechar" ).click(function() {
    $( ".container" ).show( "slow" );
    $('.modal').hide();
    
    $('#nome').val('');
    $('#email').val('');
    $('#telefone').val('');
  });




