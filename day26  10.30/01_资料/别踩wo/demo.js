// 取到id名为go的元素
var go = document.getElementById('go');
//把main区域取出来
var main = document.getElementById('main');
//把随机颜色存入数组中
var colorsArr = ['red','yellow','blue','green'];
//speed速度     num积分        
var speed = 4 ,num = 0,timer ,flag = true;


function clickStart(){
    //绑定click事件
    go.addEventListener('click', function(){
        //点击go的时候，它要消失同时移动，调用move函数
        go.style.display = 'none';
        move();
    })
}
clickStart();

//实现运动  判断游戏结束
function move(){
    //清一下定时器，防止定时器有累加
    clearInterval(timer);
    //定时器
    timer = setInterval(function(){
      var step =  parseInt(main.offsetTop) + speed;
      //top值逐渐改变
      main.style.top = step + 'px';
      if (parseInt(main.offsetTop) >= 0){
          //top值运动到0，回到-120像素的位置
        main.style.top = '-120px';
        //调用cDiv
        cDiv();
      }
      var len = main.childNodes.length;
      //大于等于6的时候删掉最后一个
      if(len == 6){

          for(var i = 0; i < 4;i++){
              //判断class列表里面是否包含i，包含则结束游戏，输出得分
              if(main.childNodes[len - 1].childNodes[i].classList.contains('i')){
                  alert('游戏结束，得分：' + num);
                  //游戏结束，清一下定时器
                  clearInterval(timer);
              }
          }
          //从main区域调用一个removeChild，把最后一个删除掉
          main.removeChild(main.childNodes[len - 1]);
      }
    },20);
    bindEvent();
}

//创建行和列  小块
function  cDiv(){
    //创建一个oDiv
    var oDiv = document.createElement('div');
    //Math.floor是向下取整
    var index = Math.floor(Math.random()*4);
    //行和列要有样式宽高，设置class类名
    oDiv.setAttribute('class','row');
    //创建4个div，把每个div都插入odiv中
    for(var j = 0 ; j < 4; j++){
        //创建idiv
        var iDiv = document.createElement('div');
        //创建的列插入父级中
        oDiv.appendChild(iDiv);
    }
    //odiv插入main区域，判断main区域是否为空
    if(main.childNodes.length == 0){
        //当前为空直接插入里面
        main.appendChild(oDiv)
    }else{
        //不为空，新生成的odiv放到main区域最前面，
        //插入到原来div的最前面
        main.insertBefore(oDiv,main.childNodes[0]);
    }
    //for (var i = 0; i < 4; i++){
        //if(i == index){
            //设置颜色同时应该被点击的div
           var clickDiv = main.childNodes[0].childNodes[index];
           //设置class类名作为标记，它有特殊颜色作为特殊标记
           clickDiv.setAttribute('class','i');
           //背景颜色
           clickDiv.style.backgroundColor = colorsArr[index];
        //}
    //}
}

//游戏开始  点击方块 判断游戏是否结束
function bindEvent(){
    //main区域绑定click事件
    main.addEventListener('click',function(e){
        if(flag){
            var tar = e.target;
            if(tar.className == 'i'){
                //点击之后的背景颜色
                tar.style.backgroundColor = '#bbb';
                //移除i
                tar.classList.remove( 'i' );
                //计分
                num ++;
            }else{
                alert('游戏结束，得分：' + num);
                clearInterval(timer);
                //游戏结束，不能被点击
                flag = false;
            }
            if(num % 10 == 0) {
                speed++;
            }
        }
        
    })
}