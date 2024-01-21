
let con = document.getElementById("container");



fetch("./json_data/container.json")
    .then((res) => res.json())
    .then((item_types) => handleAppend(item_types))
    .catch((err) => console.log(err));


    function handleAppend(data){

        data.forEach(function(ele,i){
            let p = document.querySelector(`#p${i}`);
            p.innerHTML = ele.title;
            let img = document.querySelector(`#img${i}`)
            img.src = ele.link;
        });
    }
