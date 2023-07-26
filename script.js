const buttons = document.querySelectorAll(".button")
// console.log(buttons);

const body = document.querySelector("body")
const heading = document.querySelector("h1")

buttons.forEach((button)=>{
    // console.log(button);
    button.addEventListener('click', (e)=>{
        // console.log(e.target.id);
        body.style.background = e.target.id
        if(e.target.id === "yellow"){
            heading.style.color = "black"
        } else{
            heading.style.color = "white"
        }
    })
})