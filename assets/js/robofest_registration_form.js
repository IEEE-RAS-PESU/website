var name4 = document.getElementById('name4');
var email4 = document.getElementById('email4');
var phone4 = document.getElementById('phone4');
var college4 = document.getElementById('college4');
var srn4 = document.getElementById('srn4');

function updateRequirementsPerson4(){

  if (name4.value != '' || email4.value != '' || phone4.value != '' || college4.value != '' || srn4.value != '') {
    name4.required = true;
    email4.required = true;
    phone4.required = true;
    college4.required = true;
    srn4.required = true;
  }
  else if(name4.value == '' && email4.value == '' && phone4.value == '' && college4.value == '' && srn4.value == ''){
    name4.required = false;
    email4.required = false;
    phone4.required = false;
    college4.required = false;
    srn4.required = false;
  }
}

var name3 = document.getElementById('name3');
var email3 = document.getElementById('email3');
var phone3 = document.getElementById('phone3');
var college3 = document.getElementById('college3');
var srn3 = document.getElementById('srn3');


function updateRequirementsPerson3(){
  if(name3.value == '' && email3.value == '' && phone3.value == '' && college3.value == '' && srn3.value == ''){
    name3.required = false;
    email3.required = false;
    phone3.required = false;
    college3.required = false;
    srn3.required = false;
  }

  else if (name3.value != '' || email3.value != '' || phone3.value != '' || college3.value != '' || srn3.value != '') {
    name3.required = true;
    email3.required = true;
    phone3.required = true;
    college3.required = true;
    srn3.required = true;
  }
  
}

name3.addEventListener('input', (e) => {
    console.log(name3.value);
    updateRequirementsPerson3()
})
email3.addEventListener('input', (e) => {
    updateRequirementsPerson3()
})
phone3.addEventListener('input', (e) => {
    updateRequirementsPerson3()
})
college3.addEventListener('input', (e) => {
    updateRequirementsPerson3()
})
srn3.addEventListener('input', (e) => {
    updateRequirementsPerson3()
})

name4.addEventListener('input', (e) => {
    updateRequirementsPerson4()
})
email4.addEventListener('input', (e) => {
    updateRequirementsPerson4()
})
phone4.addEventListener('input', (e) => {
    updateRequirementsPerson4()
})
college4.addEventListener('input', (e) => {
    updateRequirementsPerson4()
})
srn4.addEventListener('input', (e) => {
    updateRequirementsPerson4()
})


var delay = 0;
var offset = 150;

document.addEventListener('invalid', function(e){
   $(e.target).addClass("invalid");
   $('html, body').animate({scrollTop: $($(".invalid")[0]).offset().top - offset }, delay);
}, true);
document.addEventListener('change', function(e){
   $(e.target).removeClass("invalid")
}, true);