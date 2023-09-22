function bosildi(){
    document.querySelector(".b1").classList.toggle("b")
    document.querySelector(".bg").classList.toggle("d")
}
function bosildi1(){
    document.querySelector(".b2").classList.toggle("a")
    document.querySelector(".bk").classList.toggle("c")
}
function bosildi3(){
    document.querySelector(".b3").classList.toggle("x")
    document.querySelector(".bc").classList.toggle("y")
}
function silka(){
    document.querySelector(".but").classList.toggle("but1")
    document.querySelector(".drop").classList.toggle("drop1")
    
}
let mode = false
function Change(){
    document.querySelector(".h1").classList.toggle("h")
let dark = document.querySelector("#dark")
let light = document.querySelector("#light")
if (mode === false) {
    light.classList = ""
    dark.classList = "dis"
    document.body.style.background = "black"
    mode = true
} else if(mode === true) {
    light.classList = "dis"
    dark.classList = ""
    document.body.style.background = "white"
    mode = false;
}
}