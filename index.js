let hourEl = document.getElementById("hour");
let minuteEl = document.getElementById("minutes");
let secondEl = document.getElementById("seconds");
let ampmE1 = document.getElementById("ampm");
function updateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";
    
        
    
    if(h > 12){
        h = h - 12;
        ampm ="PM";
    }
    h = (h < 10)? "0" + h : h ;
    m = (m < 10) ? "0" + m : m ;
    s = (s < 10)? "0" + s : s ;

    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;
    ampmE1,(innerText = ampm);
    setTimeout(()=>{
        updateClock()

    },1000)
}
updateClock();


    




   

