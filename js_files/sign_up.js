let signupArr = []

document.querySelector("#sign-up-form").addEventListener('submit',function(){
    handleData(event);
})

document.querySelector(".user").addEventListener("click",function(){
    window.location.href = "login.html"
})

function loadData(){
    let newArr = JSON.parse(localStorage.getItem("signupArr"))
    if(newArr)
    {
        signupArr = newArr;
    }
}

function goToHome(){
    window.location.href = "index.html"
}

function saveData(){
    localStorage.setItem("signupArr",JSON.stringify(signupArr));
}

function handleData(e){
    e.preventDefault()
    let f_name = document.querySelector("#f_name").value;
    let l_name = document.querySelector("#l_name").value;
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;

    let obj = {
        id : (Math.floor(Math.random()*10000)).toString(),
        f_name,
        l_name,
        email,
        password
    }
    if(signupArr.length == 0)
    {
        signupArr.push(obj);
        alert("Account Created")
        goToHome()
    }
    else
        checkCredentials(obj);

    saveData();

}

function checkCredentials(obj){
    let flag = true;
    signupArr.forEach(function(ele,i){
        if(ele.email === obj.email)
        {
            alert("User with email is already exists")
            flag = false;
        }
    })
    if(flag)
    {
        console.log(obj.f_name);
        signupArr.push(obj);
        alert("Account Created")
        goToHome()
    }
        
}
// localStorage.clear()
loadData()