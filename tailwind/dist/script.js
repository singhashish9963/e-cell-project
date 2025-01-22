const navdilog=document.getElementById('nav-dialog')
function handlemenu(){
    navdilog.classList.toggle("hidden")
}
const boxes = document.querySelectorAll(".blue"); // Use class selector instead of ID
boxes.forEach(box=>{
    box.addEventListener("click",()=>{
        box.classList.toggle('red')
    })
})

       
    


