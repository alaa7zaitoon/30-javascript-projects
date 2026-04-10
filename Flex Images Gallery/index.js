
let panels=document.querySelectorAll('.panel');

panels.forEach((p)=>{
    p.addEventListener("click",()=>{
        console.log(p);
        p.classList.toggle("open")
    });
});