window.onload = function () {

    var prev = document.getElementById("prev");
    var next = document.getElementById("next");
    var main_banner = document.querySelector(".main_banner");    
    var allslider_item = document.querySelectorAll(".slider_item");
    var index = 0;
    var time    
    
    function bannerMove() {
        time= setInterval(function () {
            allslider_item[index].style.animation="rightover 1.5s forwards";
            index++;
            if (index>allslider_item.length-1) {
                index=0;
            }
            allslider_item[index].style.animation="rightstr 1.5s forwards";
            setA();
        },5000);
    };
    bannerMove();
    main_banner.style.height=allslider_item[0].clientHeight+"px";

     prev.onclick = function () {
         clearInterval(time);
        allslider_item[index].style.animation="leftover 1.5s forwards";
        index--;
        if (index<0) {
            index=allslider_item.length-1;
        }
        allslider_item[index].style.animation="leftstr 1.5s forwards";
        setA();
        bannerMove();
     };
     next.onclick = function () {
        clearInterval(time);
        allslider_item[index].style.animation="rightover 1.5s forwards";
        index++;
        if (index>allslider_item.length-1) {
            index=0;
        }
        allslider_item[index].style.animation="rightstr 1.5s forwards";
        setA();
        bannerMove();
    };

    //點擊導航按鈕
    var navDiv = document.getElementById("navDiv");
    var alla = navDiv.getElementsByTagName("a");
    
    alla[0].style.backgroundColor="rgba(255, 255, 255,0.8)";

    for (var i = 0; i <alla.length; i++) {
        alla[i].num=i;
        alla[i].onclick=function () {
            clearInterval(time);
          if (this.num>index) {
            allslider_item[index].style.animation="rightover 1.5s forwards";  
            index = this.num;
            allslider_item[index].style.animation="rightstr 1.5s forwards";
          }else if(this.num<index){
            allslider_item[index].style.animation="leftover 1.5s forwards"; 
            index = this.num;
            allslider_item[index].style.animation="leftstr 1.5s forwards";
          }
          setA();
          bannerMove();
        };
    }

    function setA() {
        for (var j=0; j <alla.length; j++) {
            alla[j].style.backgroundColor="";
        }
        alla[index].style.backgroundColor="rgba(255, 255, 255,0.8)";
    };

    //200.500.1060.1530為四個區塊的值
    var txt1 = document.getElementById("txt1");
    var txt2 = document.getElementById("txt2");
    var txt3 = document.getElementById("txt3");
    var txt4 = document.getElementById("txt4");

    function move(obj,cn,mo,play){
        window.onscroll = function(){
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            // console.log("滚动距离" + scrollTop);
            if (scrollTop>mo && !hasclass(obj,cn)) {
                obj.className+=" "+cn;
                play();   
            }
        }
    }

    function hasclass(obj,cn) {
        var reg=new RegExp("\\b"+cn+"\\b");
        return reg.test(obj.className);
    }

    // function test() {
    //     console.log("高度="+box1.offsetTop);
    // }

    // box1.onclick=test();

    move(txt1,"anm",200,function () {
        move(txt2,"anm",500,function () {
            move(txt3,"anm",1060,function () {
                move(txt4,"anm",1530,function () {
            
                });
            });
        });
    });
   
};

