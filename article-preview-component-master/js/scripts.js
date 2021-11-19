const shareSection=document.getElementById("share")
const profileSection=document.getElementById("profile")
const iconPath=document.getElementById("iconpath")
const iconSvg=document.getElementById("iconsvg");
profileSection.addEventListener("click",(e)=>{
    if(e.target.classList.contains("profile__icon-share") || e.target.classList.contains("icon-path")){
        if(shareSection.classList.contains("social-icons--translate")){
            shareSection.classList.remove("social-icons--translate")
            iconSvg.style.backgroundColor="var(--lightgrayishblue)";
            iconPath.setAttribute("fill","#6E8098");
        }
        else{
            shareSection.classList.add("social-icons--translate")
            iconSvg.style.backgroundColor="var(--desaturateddarkblue)";
            iconPath.setAttribute("fill","#fff");
        }     
    }
})