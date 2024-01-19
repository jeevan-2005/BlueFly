
document.querySelector("form").addEventListener('submit',function(){
    handleData(event);
})

document.querySelector(".user").addEventListener("click",function(){
    window.location.href = "login.html"
})

document.querySelector(".create-acc").addEventListener("click",function(){
    window.location.href = "sign_up.html"
})

function handleData(e){
    e.preventDefault()

    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;

    let obj = {
        email,
        password
    }
    let arr = JSON.parse(localStorage.getItem("signupArr")) || {};
    let flag = false;
    arr.forEach(function(ele,i){
        if(obj.email === ele.email && obj.password === ele.password)
        {
            alert("login success");
            flag = true;
        }
    });
    if(!flag)
        alert("invalid username or password");
    
}
