let ccrl0 = document.querySelector(".carrossel")
let ccrl1 = document.querySelector(".carrossel2")
let ccrl2 = document.querySelector(".carrossel3")

let p0 = document.querySelector(".p1")
let p1 = document.querySelector(".p2")
let p2 = document.querySelector(".p3")

let seguir = document.querySelector(".cct")

let jogo = document.querySelectorAll(".basegame")
let body = document.querySelector("body")
let img = document.querySelectorAll("img")
let h2 = document.querySelectorAll("h2")



let titulo = document.querySelector(".titulo")
let desligado = "display:none;"
let ligado = "display:flex;"

let luz_on = "background-color:yellow;"
let luz_off= "background-color:none;"

let valoratual = 0;

seguir.addEventListener("click",()=>{
    valoratual++;
    
    if(valoratual == 1){
        ccrl0.style.cssText = desligado;
        ccrl2.style.cssText = desligado;
        p0.style.cssText = luz_off; 
        p2.style.cssText = luz_off;

        ccrl1.style.cssText = ligado;
        p1.style.cssText = luz_on
    }
    if(valoratual == 2){
        ccrl1.style.cssText = desligado;
        p1.style.cssText = luz_off;

        ccrl2.style.cssText = ligado;
        p2.style.cssText = luz_on;
    }
    if(valoratual == 3){
        ccrl0.style.cssText = ligado;
        p0.style.cssText = luz_on;
        ccrl2.style.cssText = desligado;
        p2.style.cssText = luz_off;
    }
    if(valoratual > 3){
        valoratual = 0;
    }
    
})
