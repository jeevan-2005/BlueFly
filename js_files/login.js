
document.querySelector("#login-form").addEventListener('submit', function () {
    handleData(event);
})

document.querySelector(".user").addEventListener("click", function () {
    window.location.href = "login.html"
})

document.querySelector(".create-acc").addEventListener("click", function () {
    window.location.href = "sign_up.html"
})
function goToSignUp() {
    window.location.href = "sign_up.html"
}
function goToHome() {
    window.location.href = "index.html"
}


function handleData(e) {
    e.preventDefault()
    console.log(1)
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;

    let obj = {
        email,
        password
    }
    let arr = JSON.parse(localStorage.getItem("signupArr")) || [];
    if (arr.length == 0) {
        alert("you don't have an account. Please create account.")
        goToSignUp();
    }
    else {
        let flag = false;
        arr.forEach(function (ele, i) {
            if (obj.email === ele.email && obj.password === ele.password) {
                console.log(obj.email, obj.password)
                alert("login success");
                goToHome()
                flag = true;
            }
        });
        if (!flag)
            alert("invalid username or password");
    }


}