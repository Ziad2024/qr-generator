let input=document.querySelector("input");
dv=document.querySelector(".image")
img=document.querySelector("#image")
function show(){
    if (input.value.length > 0)
    {
        img.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+input.value;
         dv.classList.add("show")  
    }
    else{
        input.classList.add("error")
        setTimeout(()=>{
            input.classList.remove("error")
            dv.classList.remove("show")
        },1000)
    }
}