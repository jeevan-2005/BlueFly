
function goToProduct() {
    window.location.href = "products.html"
}

let z = document.querySelectorAll(".items_ty")
for (let i = 0; i < z.length; i++) {
    z[i].addEventListener("click",function(ele,i){
        goToProduct();
    })
}