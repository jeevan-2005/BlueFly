let iconCart = document.querySelector(".cart")
let closeBtn = document.querySelector(".close")
let body = document.querySelector("body")

iconCart.addEventListener("click",function(){
    body.classList.toggle("activeCartTab");
})
closeBtn.addEventListener("click",function(){
    body.classList.toggle("activeCartTab");
})





// let arr = []
// loadCt();
// function loadCt(){
//     arr = JSON.parse(localStorage.getItem("crtArr")) || []; 
//     console.log(arr);
//     displayCart(arr);
// }

// function displayCart(arr){
//     for(let i = 0;i<arr.length; i++){
//         let div = document.createElement("div")
//         div.setAttribute("class","listItem");

//         let img = document.createElement("img")
//         img.setAttribute("class","list_img");
//         img.src  = arr[i].link;

//         let title = document.createElement("p")
//         title.setAttribute("class","list_title");
//         title.innerHTML = arr[i].title;

//         let price = document.createElement("p")
//         price.setAttribute("class","list_price");
//         price.innerHTML = arr[i].price;

//         div.append(img,title,price);
//         listCart.append(div);
//     }
// }



