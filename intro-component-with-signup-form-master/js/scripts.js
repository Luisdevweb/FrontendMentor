const form=document.getElementById("form")

form.addEventListener("click",e=>{
    e.preventDefault();
    if(e.target.classList.contains("form__submit")){
        e.target.classList.toggle("form__submit--opacity");
        // console.log("se hizo clic al submit")
        Validation();
        return true;
    }
    if(e.target.classList.contains("form__label")){
            // console.log("se hizo clic al label")
            e.target.focus()
            e.target.textContent="";
    }
    if(e.target.classList.contains("form__input")){
        // console.log("se hizo clic el input")
        console.log(e.target.parentElement.firstElementChild.textContent="")
    }
})
const Validation=()=>{
    const name=document.getElementById("firstname");
    const lastname=document.getElementById("lastname");
    const email=document.getElementById("email");
    const password=document.getElementById("password");

    ValidationText(name);
    ValidationText(lastname)
    ValidationEmail(email)
    ValidationText(password)
}
const ValidationText=(text)=>{
    const errorIcon=text.parentElement.querySelector(".error-icon");
    const errorText=text.parentElement.querySelector(".error-text");
    if (text.value.length == 0 || /^\s+$/.test(text.value)) {
    //    console.log("texto no valido");
       text.classList.add("form__input--border-red");
       errorIcon.classList.add("error-icon--visible");
       errorText.classList.add("error-text--visible");
    }
}
const ValidationEmail=(email)=>{   
    const errorIcon=email.parentElement.querySelector(".error-icon");
    const errorText=email.parentElement.querySelector(".error-text");
    const regex=/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if(regex.test(email.value)){
        // console.log("email valido")
        return true;
    }
    else{
        // console.log("email no valido")
        email.style="color:var(--saturatedred);"
        email.classList.add("form__input--border-red");
        errorIcon.classList.add("error-icon--visible");
        errorText.classList.add("error-text--visible");
    }
}
