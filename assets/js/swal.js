let form = document.querySelector("form");
let srn1 = document.getElementById('srn1');
let srn2 = document.getElementById('srn2');
let srn3 = document.getElementById('srn3');
let srn4 = document.getElementById('srn4');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if(form.checkValidity() === false){
        form.reportValidity();   
        return; 
    }
    let c1 = (srn1.value[8] === 'M' || srn1.value[8] === 'm') && (srn1.value[9] === 'E' || srn1.value[9] === 'e')
    let c2 = (srn2.value[8] === 'M' || srn2.value[8] === 'm') && (srn2.value[9] === 'E' || srn2.value[9] === 'e')
    let c3 = (srn3.value[8] === 'M' || srn3.value[8] === 'm' || srn3.value === '') && (srn3.value[9] === 'E' || srn3.value[9] === 'e'|| srn3.value === '')
    let c4 = (srn4.value[8] === 'M' || srn4.value[8] === 'm' || srn4.value === '') && (srn4.value[9] === 'E' || srn4.value[9] === 'e'|| srn4.value === '')
    let c5 = (srn1.value.length === 13) && (srn2.value.length === 13) && (srn3.value.length === 13 || srn3.value.length === 0) && (srn4.value.length === 13 || srn4.value.length === 0)
    let data = new FormData(form)
    console.log(c1 + " " + c2 + " " + c3 + " " + c4 + " " + c5);
    if(c1 && c2 && c3 && c4 && c5){
    Swal.fire({
        title:'Submitting...',
        showCancelButton: false,
        showConfirmButton: false
        })
    fetch('https://script.google.com/macros/s/AKfycbwDYCea-kHu7mUM4n0uQkUmOw8QFdGl1rkHlTnPcysHYO_2VyGo5C-n8omNk_NE3FkK7g/exec',{
        method: "POST",
        body: data
    }).then(res => res.text())
    .then(data => {
        
        Swal.fire(
            'Registered!',
            'You have entered the multiverse.',
            'success'
            ).then(function() {
                form.reset();
                window.location = "/website";
            });
        
    }).catch(err => {
        Swal.fire(
            'Oops! Something went wrong',
            'Try again',
            'error'
            )

    })
}
    else{
        Swal.fire(
            'This form is only for Mechanical Engineering students',
            'Try again',
            'error'
            )
    }
})
