
const pwd = document.getElementById("pwd");
const eye = document.getElementById("eye");

// eye.onclick = ()=>{

// }
function showHide() {
    if(pwd.type=='password'){
        pwd.type="text";
        eye.src="/icons/eye-open.png"
    }else{
        pwd.type="password";
         eye.src="/icons/eye-close.png"
    }
}


