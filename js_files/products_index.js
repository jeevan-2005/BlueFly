
let productsArr = []


function saveData(){
    localStorage.setItem("filterArray",JSON.stringify(productsArr))
    window.location.href = "products.html"
}

fetch("./json_data/products.json")
    .then((res) => res.json())
    .then((products) => {
        let arr = []
        for (let i = 0; i < products.length; i++) {
            arr.push(products[i]);
        }

        let y = document.querySelectorAll(".items_ty")
        // console.log(y)
        for (let i = 0; i < y.length; i++) {
            y[i].addEventListener("click", function (){
                let title = document.querySelector(`#p${i}`).innerHTML;
                console.log(String(title))  
                handleFilter(arr,title)
            })
        }
    }
    )
    .catch((err) => console.log(err));

function handleFilter(a,tle){

    productsArr = a.filter(function(ele,i){
        return String(ele.category) == String(tle)
    })
    console.log(productsArr)
    saveData();
}

