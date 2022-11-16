let form = document.querySelector("form");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
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
})