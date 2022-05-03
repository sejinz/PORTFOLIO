window.onload = function(){


    const content = "Welcome to my portfolio";
    const text = document.querySelector(".id");
    let i = 0;
    
    
    const content2 = "⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫";
    const text2 = document.querySelector(".pw");
    let k= 0;
    
    
    
    let timerId = setTimeout(function tick() {
      timerId = setTimeout(tick,5000); 
    }, 5000);
    
    function typing(){
        setTimeout(function(){
            if (i < content.length) {
        let txt = content.charAt(i);
        text.innerHTML += txt;
        i++; 
        }
        }, 4300);
    }
    function typing2(){
        setTimeout(function(){
            if (k < content2.length) {
        let txt = content2.charAt(k);
        text2.innerHTML += txt;
        k++;
        }
        }, 7500);
    }
    
    setInterval(typing, 100);
    setInterval(typing2, 100);

} // onload