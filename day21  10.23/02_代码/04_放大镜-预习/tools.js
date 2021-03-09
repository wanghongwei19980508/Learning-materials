// 1,获取地址栏参数函数
// 获取地址栏信息中心,字符串参数,转化为对象形式

function getURLValue(){
    // 1,获取地址栏参数字符串
    // 中文正常显示,不要问号
    var str = decodeURI( window.location.search ).substr(1);

    // 2,字符串转化为对象
    var obj = {};

    // 按照&符号转数组
    var arr1 = str.split('&');

    // 循环遍历数组arr1
    // 将数据按照 = 等号 再次转化为数组
    // 数组0索引存储的是 键名   
    // 数组1索引存储的是 键值
    // 设定给对象新增单元
    arr1.forEach(function(v){
        // v按照等号转化为数组
        var arr2 = v.split('=');
        // 将 arr2[0] 作为属性
        // 将 arr2[1] 作为属性值
        // 设定给对象obj
        obj[ arr2[0] ] = arr2[1];
    })

    // 定义返回值obj
    return obj;
}


// 2,随机颜色
function setColor(){
    // 方法1: 不推荐使用  颜色比较少
    // 创建所有英文单词的数组,随机索引下标,获取随机颜色字符串
    // var colorArr = ['red' , 'blue' , 'pink' , 'yellow' , 'orange' , 'green'];
    // var num = parseInt( Math.random()*colorArr.length );
    // return colorArr[num];

    // 方法2: #6位十六进制数值
    // 设定字符串,通过随机下标,获取6个字符,拼接在#号之后
    // var str = '0123456789abcdef';
    // var color = '#';
    // for(var i = 1 ; i <= 6 ; i++){
    //     var num = parseInt( Math.random()*str.length );
    //     color += str[num];
    // }
    // return color;

    // 方法3: rgb()  0-255的随机数
    return `rgb(${parseInt(Math.random()*256)},${parseInt(Math.random()*256)},${parseInt(Math.random()*256)})`;
}


// 3,随机6位验证码
function setVc(){
    var str = '0123456789abcdefghijklmnopqrestuvwxyzABCDEFGHIJKLMNOPQRESTUVWXYZ';
    var vc = '';
    while(vc.length !== 6){
        var num = parseInt( Math.random()*str.length );
        if( vc.indexOf( str[num] ) === -1 ){
            vc += str[num];
        }
    }
    return vc;
}


// 3,兼容语法,获取指定标签的指定css样式属性值
// 两个参数 : 参数1:标签对象  参数2:标签属性
function myGetStyle(ele,style){
    // 兼容低版本IE浏览器
    // 如果有 window.getComputedStyle 就使用 window.getComputedStyle
    if(window.getComputedStyle){
        // ele是要获取属性的标签
        // style是要获取的样式属性,[]语法解析变量
        return window.getComputedStyle(ele)[style];
    }else{
        // 没有 window.getComputedStyle , 使用低版本IE语法
        return ele.currentStyle(style);
    }
}


// 4,兼容语法,添加监听事件
function myAddEventListener( ele , type , fun  ){
    if(ele.addEventListener){   
        ele.addEventListener( type , fun )
    }else{
        ele.attachEvent( 'on' + type , fun )
    }
}

// 5,兼容语法,删除监听事件
function myRemoveEventListener( ele , type , fun  ){
    if(ele.removeEventListener){   
        ele.removeEventListener( type , fun )
    }else{
        ele.detachEvent( 'on' + type , fun )
    }
}


// 6,move运动函数
// 参数1:运动的标签对象
// 参数2:运动的属性和属性值 对象类型
// 参数3:运动终止,执行的回调函数 函数名称 / 匿名函数

function move(element , type , callback){
    // 创建对象,存储不同属性的定时器
    let obj = {};
    // 循环遍历参数2,key存储的是运动css样式属性
    for( let key in type){
        // 创建定时器,存储在对象中,属性是运动css样式属性,属性值是 setInterval() 的返回值,也就是定时器序号
        obj[key] = setInterval( ()=>{
            // 获取原始属性值
            // 如果是透明度,直接获取属性值,并且乘以 100
            // 不是透明度,去除px单位,获取数值部分
            let oldStyle = key === 'opacity' ?  myGetStyle( element , key )*100 :  parseInt( myGetStyle( element , key ));
            
            // 计算步长
            // 如果是透明度,原始属性值*100 - 初始属性值 / 次数
            // 不是透明度, 原始属性值 - 初始属性值 / 次数
            let speed = key === 'opacity' ? (type[key]*100 - oldStyle) / 5 :  (type[key] - oldStyle) / 5 ;
            
            // 步长取整
            // 正数 : 向上取整
            // 负数 : 向下取整
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

            // 初始值累加步长
            oldStyle += speed;

            // 将改变的初始值,赋值给标签对象
            // 如果是透明度, 改变的初始值/100 赋值
            // 如果不是透明度 , 改变的初始值 拼接 px 单位
            element.style[key] = key === 'opacity' ? oldStyle/100 : `${oldStyle}px`; 

            // 判断改变的初始值 等于 最终位置

            if(key === 'opacity'){
                if( oldStyle === type[key]*100 ){
                    // 清除定时器
                    clearInterval(obj[key]);
                    // 删除对象中的对应的数据单元
                    delete( obj[key] ) ;
                } 
            }else{
                if( oldStyle === type[key] ){
                    // 清除定时器
                    clearInterval(obj[key]);
                    // 删除对象中的对应的数据单元
                    delete( obj[key] ) ;
                } 
            }

            // 获取对象的所有键名,组成新的数组
            var arr = Object.keys(obj);
            // 如果数组长度为0,证明对象没有单元,所有定时器都清除
            if(arr.length === 0){
                // 执行回调函数
                callback()
            }   
        } , 100)
    }
}