"use strict"

const query = window.matchMedia("(min-width: 650px)");
const imgAbt = document.getElementById("image-about-container");
const infAbt = document.getElementById("info-about-container");


function aboutResponsive(){
    if(query.matches){
        console.log("ciao");
        imgAbt.classList.add("basis-half")
        infAbt.classList.add("basis-half")
    }
    else{
        imgAbt.classList.remove("basis-half")
        infAbt.classList.remove("basis-half")

    }
}

query.onchange(aboutResponsive());
