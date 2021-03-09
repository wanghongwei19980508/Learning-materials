// 创建放大镜构造函数
class Zoom{
    constructor(element,array){
        this.ele = element;
        this.arr = array;
        this.ul = this.ele.querySelector('.list');
        this.show = this.ele.querySelector('.show');
        this.img = this.ele.querySelector('.show img');
        this.mask = this.ele.querySelector('.mask');
        this.glass = this.ele.querySelector('.glass');
        this.ullis = {};

        // box,div的 margin-left,margin-top
        this.boxLeft = parseInt( myGetStyle( this.ele , 'marginLeft' ) );
        this.boxTop = parseInt( myGetStyle( this.ele , 'marginTop' ) );

        // show,div的 border-left,border-top
        this.showBorderLeft = parseInt( myGetStyle( this.show , 'borderLeftWidth' ) );
        this.showBorderTop = parseInt( myGetStyle( this.show , 'borderTopWidth' ) );

        // show,div的 width , height 占位
        this.showWidth = parseInt( myGetStyle( this.show , 'width' ) );
        this.showHeight = parseInt( myGetStyle( this.show , 'height' ) );

        // mask,遮盖层的 width , height 占位
        this.maskWidth = parseInt( myGetStyle( this.mask , 'width' ) );
        this.maskHeight = parseInt( myGetStyle( this.mask , 'height' ) );

        // glass,放大镜的 width , height 占位
        this.glassWidth = parseInt( myGetStyle( this.glass , 'width' ) );
        this.glassHeight = parseInt( myGetStyle( this.glass , 'height' ) );

    }

    init(){
        this.setLi();
        this.enterLeave();
        this.myMouseMove();
        this.setClick();
    }

    // 1,应该是根据图片的数组信息,动态生成 列表图片 list ul 中的li标签
    //   还需要根据数组中第一组图片信息,定义显示区域图片内容,放大镜背景图片内容
    setLi(){
        // 1,根据数组图片生成li标签,写入到ul中
        let str = '';
        this.arr.forEach((v,k)=>{
            if(k === 0){
                str += `<li  class="active"><img num="${k}" src="${v.small}"></li>`;
            }else{
                str += `<li ><img src="${v.small}" num="${k}"></li>`;
            }
        })
        this.ul.innerHTML = str;

        // 只赋值,获取写入的所有的ul>li
        this.ullis =  this.ul.querySelectorAll('li');

        // 2,根据数组中的第一组图片信息设定 显示区域图片,放大镜区域背景图片

        // 设定css样式 用 标签对象.style.属性 = 属性值
        // 设定标签属性,可以直接写,也可以是 标签对象.setAttribute(属性 , 属性值)

        // 显示区域的img标签,src属性
        this.img.setAttribute('src' , this.arr[0].normal);

        // 设定 放大镜区域,背景图片样式
        this.glass.style.background = `url('${this.arr[0].big}') no-repeat`;
        this.glass.style.backgroundPosition = `0 0`;
        this.glass.style.backgroundSize = '1600px';

        // 如果你起始时,设定的标签比例不对,不相等,这里必须要重新设定标签的比例
    }

    // 移入移出
    enterLeave(){
        // 鼠标移入,遮盖层,放大镜显示
        this.show.addEventListener('mouseenter' , ()=>{
            this.mask.style.display = 'block';
            this.glass.style.display = 'block';
        } )

        // 鼠标移出,遮盖层,放大镜隐藏
        this.show.addEventListener('mouseleave' , ()=>{
            this.mask.style.display = 'none';
            this.glass.style.display = 'none';
        } )
    }

    // 拖拽效果
    myMouseMove(){
        // 给 show div 添加鼠标移动效果
        this.show.addEventListener( 'mousemove' , e=>{
            // (1),根据鼠标坐标位置,计算 遮盖层 定位的x , y 数值
            // 拖拽效果,推荐使用 pageX pageY
            // 定位 : 鼠标page坐标 - margin外边距 - border线宽度 - 遮盖层/2
            let x = e.pageX -  this.boxLeft - this.showBorderLeft - this.maskWidth/2 ;
            let y = e.pageY -  this.boxTop - this.showBorderTop - this.maskHeight/2 ;

            // (2),设定极值判断
            // 最小 : 0 0
            // 最大 : show占位 - 遮盖层占位
            if( x < 0 ){
                x = 0;
            }
            if( y <0 ){
                y = 0;
            }
            if( x > this.showWidth - this.maskWidth){
                x = this.showWidth - this.maskWidth
            }
            if( y > this.showHeight - this.maskHeight ){
                y = this.showHeight - this.maskHeight
            }

            // (3) , 将x,y作为属性值,定位给mask遮盖层,拼接px单位
            this.mask.style.left = x + 'px';
            this.mask.style.top = y + 'px';

            // (4) , 通过计算比例,计算 背景图片的定位数值
            let bX = ( x * 1600 ) /  this.showWidth ;
            let bY = ( y * 1600 ) /  this.showHeight ;

            // (5) , 赋值给背景图片定位 , 赋值数值方向与遮盖层运动方向相反
            this.glass.style.backgroundPosition = `-${bX}px -${bY}px`;

        })
    }

    // tab切换/选项卡
    setClick(){
        // 给 ul标签 也就是 点击的li标签父级添加事件
        this.ul.addEventListener( 'click' , e=>{

            if(e.target.tagName === 'IMG'){
                // 1,清除所有li的标签样式,给索引是点击li,num属性值相同的li标签,添加样式
                this.ullis.forEach( (item,key)=>{
                    item.className = '';
                    if(key === e.target.getAttribute('num')-0 ){
                        item.className = 'active';
                    }
                })

                // 2,设定 show 中 img标签 src属性值
                this.img.setAttribute('src' , this.arr[e.target.getAttribute('num')-0].normal);

                // 3,设定 glass中 背景图片的 url地址
                this.glass.style.background = `url('${this.arr[e.target.getAttribute('num')-0].big}') no-repeat 0 0/1600px`;
            }
        })
    }

}   