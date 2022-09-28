const name1 = document.getElementById("name");
const email = document.getElementById("emails");
const submit = document.getElementById("submit");
const pass  = document.getElementById("pass");
let text = document.getElementById("checkId");
let validName = false;
let validEmail = false;
let validPass = false;

name1.addEventListener("blur", ()=>{
    console.log("Name is Blurred");
    let regex = /^[a-zA-Z]([a-zA-z0-9]){3,25}$/;
    let str = name1.value;
    if (regex.test(str)) {
        name1.classList.remove("is-invalid");
        validName = true;
    }
    else{
        name1.classList.add("is-invalid");
        document.getElementById("username").style.display = "block";
        document.getElementById("username").style.color = "red";
        validName = false;
    }
})

email.addEventListener("blur", ()=>{
    console.log("email is Blurred");
    let regex =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let str = email.value;
    if (str.match(regex)) {
        console.log("Your Email Is Valid");
        email.classList.remove("is-invalid");
        email.style.border = "3px solid green";
        validEmail = true;
    }
    else{
        console.log("Your Email Is Not Valid");
        email.classList.add("is-invalid");
        validEmail = false;
    }
})


pass.addEventListener("blur",(e)=>{
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    let password = pass.value; 
    if (regex.test(password)) {
        pass.classList.remove("is-invalid");
        validPass=true;
    }
    else{
        pass.classList.add("is-invalid");
        document.getElementById("passWarning").style.display = "block";
        document.getElementById("passWarning").style.color = "red";
        validPass=false;
    }
})

submit.addEventListener("click", (e)=>{
    e.preventDefault();
    console.log("Button Clicked!");
    if(validEmail && validName && validPass){
        document.getElementById("hiddenContainer").style.display = "none";
        document.getElementById("hidden").style.display = "block";
    }
    else{

    }

})

text.addEventListener("click", (e)=>{
    if(pass.type === "password"){
        pass.type = "text";
    }else{
        pass.type = "password";
    }

})
