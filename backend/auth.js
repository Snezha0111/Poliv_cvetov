const switch_reg = document.getElementById("but_per_reg")
switch_reg.addEventListener('click', function(){
    // event.preventDefault()
    if (switch_reg){
        window.location.href = "reg.html"
    }
    else{
        alert('что-то пошло не так')
    }
})

