const nav = document.querySelector(".navbar")
const get = document.getElementById("get")

window.addEventListener("scroll",()=>{
    if(window.scrollY>nav.offsetHeight + 150){
        nav.classList.add("move")
        get.classList.add("btn-success")
        get.classList.remove("btn-dark")

    }else{
        nav.classList.remove("move")
        get.classList.remove("btn-success")
        get.classList.add("btn-dark")
    }
})