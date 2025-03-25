const sotetmod = document.getElementById("sotetmod")
let  mod = false;
sotetmod.addEventListener("click",()=>{
    if(mod == false){
    mod = true
    document.body.style.background = "black";
    document.querySelectorAll('p').forEach(e => e.style.color = "white")
    document.querySelectorAll('h1').forEach(e => e.style.color = "cyan")
    document.querySelectorAll('h2').forEach(e => e.style.color = "white")
    document.querySelectorAll('h3').forEach(e => e.style.color = "white")
    document.querySelectorAll('li').forEach(e => e.style.color = "white")    
    document.getElementById("icon").src ="sun.png"
}else{
    mod = false;
    document.body.style.background = "white";
    document.querySelectorAll("h1").forEach(e => e.style.color = "rgb(5, 41, 72)")
    document.querySelectorAll('p').forEach(e => e.style.color = "black")
    document.querySelectorAll('h2').forEach(e => e.style.color = "black")
    document.querySelectorAll('h3').forEach(e => e.style.color = "black")
    document.querySelectorAll('li').forEach(e => e.style.color = "black") 
    document.getElementById("icon").src ="moon.png"
    }  
})