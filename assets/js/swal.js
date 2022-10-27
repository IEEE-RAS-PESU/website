let form = document.querySelector("form");

function register(){

    if(form.checkValidity() === false){
        form.reportValidity();   
        return; 
    }

    let data = new FormData(form)
    Swal.fire({
        title:'Submitting...',
        showCancelButton: false,
        showConfirmButton: false
        })
    fetch('https://script.google.com/macros/s/AKfycbzOiQamPVIcG8_4ydD33JPMR689I_LNJwUqeEduntFU6SHOX06LBskuQa9fPagoLhJjaw/exec',{
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
                window.location = "/index.html";
            });
        
    })
}


// form.addEventListener('submit', (e) => {
//     e.preventDefault();

    
// })
