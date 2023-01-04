import IMask from 'imask';

let $name=document.querySelector('#name')
let $phoneNumber=document.querySelector('#phone')
let $form=document.querySelector('#form')

const $congratmsg=document.querySelector('#congrat')
$congratmsg.style.visibility='hidden'


$form.addEventListener('submit',(e)=>{
  $form.style.display='none'
  $congratmsg.style.visibility='visible'

  const formData= new FormData($form)
  console.log(formData)
  e.preventDefault()
})


const nameMask = IMask($name, {
    mask: /^([ \u00c0-\u01ffa-zA-Z'\-])+$/
  });
const phoneMask = IMask(
    $phoneNumber, {
      mask: '(000){9}0000-0000'
    });


   

