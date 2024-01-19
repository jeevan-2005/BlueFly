
let con = document.getElementById("container");



fetch("./json_data/container.json")
    .then((res) => res.json())
    .then((item_types) => handleAppend(item_types))
    .catch((err) => console.log(err));


    function handleAppend(data){

        data.forEach(function(ele){
            let div = document.createElement("div");
            div.setAttribute("class","items_ty");
    
            let p = document.createElement("p");
            p.innerHTML = ele.title;
            let img = document.createElement("img")
            img.src = ele.link;
    
            div.append(img,p);
            con.append(div);
        });
    }
