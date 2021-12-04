const form=document.getElementById("form");
const button=document.getElementById("button");
const email=document.getElementById("email");
const iconError=document.getElementById("icon-error");
const messageError=document.getElementById("msg-error");
form.addEventListener("click",e=>{
    e.preventDefault();
    if(e.target.classList.contains("form__button") || e.target.classList.contains("icon-arrow")){
        if(email.value===""){
            messageError.classList.add("msg-error--visible")
            messageError.innerText="Please Enter a email"
            iconError.classList.remove("icon-error--visible")
            email.classList.remove("form__input--border-red")
        }
        else{
            button.classList.toggle("button--opacity")
            button.classList.toggle("button--grow")
            button.classList.toggle("button--shadow")
            ValidationEmail(email.value);
        }
    }
})

const ValidationEmail=(entry)=>{
    const regex=/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if(regex.test(entry)){
        console.log("email valido")
        iconError.classList.remove("icon-error--visible")
        messageError.classList.remove("msg-error--visible")
    }
    else{
        console.log("email no valido")
        messageError.innerText="Please provide a valid email"
        email.classList.add("form__input--border-red")
        iconError.classList.add("icon-error--visible")
        messageError.classList.add("msg-error--visible")
    }
}