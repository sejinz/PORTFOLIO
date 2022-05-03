window.onload=function(){
    
    // 시계 
    setInterval(function(){
             
        var timer = new Date();
        var h = timer.getHours();
        var m = timer.getMinutes();
        h = checkTime(h);
        m = checkTime(m);
        document.getElementById('time').innerHTML = h + ":" +m ;
    });
    function checkTime(i) {
        if (i < 10) {i = "0" + i}; // 숫자가 10보다 작을 경우 앞에 0을 붙여줌
        return i;
    }

} //onload

