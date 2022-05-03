$(document).ready(function(){
    $(".dotori1").mouseover(function(){
        $(".dotorl_box").show(200);
    });
    $(".dotori1").mouseout(function(){
        $(".dotorl_box").hide(200);
    });
    
    $(".dotori2").mouseover(function(){
        $(".dotori1_txt2").show();
    });
    $(".dotori2").mouseout(function(){
        $(".dotori1_txt2").hide();
    });
});