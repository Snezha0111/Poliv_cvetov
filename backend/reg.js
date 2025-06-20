const switch_auth = document.getElementById("but_per_auth")
switch_auth.addEventListener('click', function(){
    if (switch_auth){
        window.location.href = "auth.html"
    }
    else{
        alert('что-то пошло не так')
    }
})

//document.getElementById('registrationForm').addEventListener('submit', function(event) {
   // event.preventDefault(); 

   // const formData = new FormData(this); 
  //  let fullNameArray = formData.get("fullName").split(/\s+/); 

  //  if(fullNameArray.length !== 3){
   //     alert("Ошибка! ФИО должно содержать ровно три слова.");
    //    return false;
 //   }

 //   const dataToSend = {
    //    login: formData.get("login"),
    //    password: formData.get("password"),
      //  firstName: fullNameArray[1],   
       // middleName: fullNameArray[2],  
      //  lastName: fullNameArray[0],    
     //   phoneNumber: formData.get("phoneNumber")
 //   };

    console.log(dataToSend); 

});
