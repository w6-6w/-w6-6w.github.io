// JavaScript Document
var img = document.getElementsByClassName("img"); //获取所有轮播图片 集合
var next = document.querySelector(".next"); //获取下一张 按钮
var prev = document.querySelector(".prev");//获取上一张 按钮
var box = document.getElementById("Box");//获取整个盒子
var little = document.getElementsByClassName("little"); //获取所有轮播圆点按钮 集合

var index = 0;
var time = 0;

// 重置所有class
var clear = function () {
  for (var i = 0;i < img.length; i++){
    img[i].className = "img";
  }
  for (var i = 0;i < little.length;i++){
    little[i].className = "little";
  }
};

var show = function () {
  img[index].className = "img show";
  little[index].className = "little little_show";
  time = 0;
};

// 下一张
var nextBtn = function () {
  clear();
  index++;
  if(index >img.length-1){
    index = 0;
  }
  show();
};
next.addEventListener("click",function () {
  nextBtn();
});

// 上一张
var prevBtn = function () {
  clear();
    index--;
  if(index < 0){
    index = img.length-1;
  }
  show();
};
prev.addEventListener("click",function () {
  prevBtn();
});

// 按钮
for (var i = 0; i < little.length;i++){
  little[i].addEventListener("click",function () {
    clear();
    index = this.getAttribute("data-index");
    show();
  })
}

var timer;//全局变量，接收定时器
function autoTime(){
  //timer接收定时器
  timer = setInterval(function () {
    time++;
    if(time === 4){
      nextBtn();
    }
    else if(time > 4){
      time = 0;
    }
    console.log("time = "+time);

  },1000);
}
// 调用轮播图自动播放方法
autoTime();

// 当鼠标移入imgBox时，停止轮播，清除定时器
//box.onmouseover = function () {
//  clearInterval(timer);
//};
// 当鼠标移出imgBox时，重新调用定时器并重置time
//box.onmouseout = function () {
  //time = 0;
  //autoTime();
//};
