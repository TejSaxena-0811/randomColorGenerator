let btn = document.querySelector("button");

let random = "yellow";
let gen = () => {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    let heading = document.querySelector("h1");
    heading.style.color = `rgb(${r} , ${g} , ${b})`;
    heading.innerText = `rgb(${r} , ${g} , ${b})`;
    
    let bgCol = document.querySelector(".color");
    bgCol.style.backgroundColor = `rgb(${r} , ${g} , ${b})`;
}
btn.addEventListener("click" , gen);