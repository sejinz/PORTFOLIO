window.onload = function(){

    document.querySelector('.samsung').addEventListener('click', function(){
    document.querySelector('.container').style.transform = 'translate(0)';
});
    document.querySelector('.cjone').addEventListener('click', function(){
    document.querySelector('.container').style.transform = 'translate(-14.3%)';
});
    document.querySelector('.locknlock').addEventListener('click', function(){
    document.querySelector('.container').style.transform = 'translate(-28.6%)';
});
    document.querySelector('.pusecss').addEventListener('click', function(){
    document.querySelector('.container').style.transform = 'translate(-42.8%)';
});
    document.querySelector('.comong').addEventListener('click', function(){
    document.querySelector('.container').style.transform = 'translate(-57.1%)';
});
    document.querySelector('.playlist').addEventListener('click', function(){
    document.querySelector('.container').style.transform = 'translate(-71.4%)';
});
    document.querySelector('.todolist').addEventListener('click', function(){
    document.querySelector('.container').style.transform = 'translate(-85.7%)';
});

// 프로젝트 메뉴 
var list = document.getElementsByClassName("list");

function handleClick(event) {
    for (var i = 0; i < list.length; i++) {
          list[i].children[0].classList.remove("clicked");
        }	
        
      if (event.target.classList[0] === "clicked") {
        event.target.classList.remove("clicked");
      } else {
        for (var i = 0; i < list.length; i++) {
          list[i].classList.remove("clicked");
        }
    
        event.target.classList.add("clicked");
      }
    }
function init() {
  for (var i = 0; i < list.length; i++) {
    list[i].addEventListener("click", handleClick);
  }
}
init();

// 크레인 
    document.querySelector('.prev_btn').addEventListener('click', function(){
    document.querySelector('.crane_body').style.transform = 'translate(-30px)';
});
    document.querySelector('.next_btn').addEventListener('click', function(){
    document.querySelector('.crane_body').style.transform = 'translate(100px)';
});

//삼성전기
    document.querySelector('.web').addEventListener('click', function(){
    document.querySelector('.web_test').style.display = 'block';
});
    document.querySelector('.pass_close').addEventListener('click', function(){
    document.querySelector('.web_test').style.display = 'none';
});

// pure css 
    document.querySelector('.ryan_btn').addEventListener('click', function(){
    document.querySelector('.dollbox_popup1').style.display = 'block';
});
    document.querySelector('.close').addEventListener('click', function(){
    document.querySelector('.dollbox_popup1').style.display = 'none';
});

} //onload

