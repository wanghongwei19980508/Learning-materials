// 创建构造函数
// 参数1: 创建放大镜需要的图片信息数组
// 参数2: 创建放大镜的标签对象

class SetGlass{
    constructor(imageArr , element){
        // 参数
        this.arr = imageArr;
        this.ele = element;

        // 标签对象
        this.show = this.ele.querySelector('.show');
        this.mask = this.ele.querySelector('.mask');
        this.list = this.ele.querySelector('.list');
        this.glass = this.ele.querySelector('.glass');
        // show中的图片
        this.showImg = this.show.querySelector('img');

        // 先定义变量,存储list中所有的li,当期没有,动态生成之后才会
        this.lis;

        // 定义 各种数据参数

        // 父级的外边距
        this.eleMarginLeft = parseInt( myGetStyle( this.ele , 'marginLeft' ) ); 
        this.eleMarginTop = parseInt( myGetStyle( this.ele , 'marginTop' ) ); 

        // 父级的边框线
        this.showBorderLeft = this.show.clientLeft;
        this.showBorderTop = this.show.clientTop;

        // show的占位 -- 没有边框线
        this.showWidth = this.show.clientWidth;
        this.showHeight = this.show.clientHeight;

        // mask的占位 -- 都有
        // 如果是 display:none  offsetWidth 和 offsetHeight 获取的数据是0
        // 只能通过属性属性值,获取
        this.maskWidth = parseInt( myGetStyle( this.mask , 'width' ) );
        this.maskHeight = parseInt( myGetStyle( this.mask , 'height' ) );

        // 放大区的占位 -- 没有border
        this.glassWidth = parseInt( myGetStyle( this.glass , 'width' ) );
        this.glassHeight = parseInt( myGetStyle( this.glass , 'height' ) );

        // 背景图片占位
        // 获取背景图片占位,如果只写宽度,表示宽度高度相同,是一个数值
        //                 如果写两个数据,表示宽度高度不同,第一个数据是宽度,第二个数据是高度
        //                       需要根据空格转化为数组,获取整数部分,赋值给对象
        this.glassBgImgObj = myGetBgImgStyle( this.glass ) ;


    }

    // 入口函数
    init(){
        console.log( this.glassBgIMGWidth );


        // 动态渲染页面
        this.setHtml();
        this.setMouse();
        this.setList();
        this.setMouseMove();
    }

    // 1, 根据 图片数组信息,动态渲染生成 html页面
    // (1) 显示区域 img图片内容  是 数组中第一张图片的信息   
    // (2) 列表区域 li和img图片内容
    // (3) 放大区域 背景图片  是 数组中第一张图片的信息   
    setHtml(){
        // 1, 给 show 区域中 img 标签 设定 src 属性
        // 是第一组中,图片的信息
        this.showImg.src = `./images/${this.arr[0].big}`;

        // 2, 生成 list 区域中 li 和 img 以及 img 的图片路径
        // 定义空字符串,存储内容
        let str = '';
        //循环遍历数组
        this.arr.forEach( (v,k)=>{
            // 给第一个li,添加css样式
            // 给每个img设定src属性,添加num属性,属性值是k索引下标

            str += k === 0 ? `<li  class="active"><img num="${k}" src="./images/${v.small}"></li>` : `<li ><img num="${k}"  src="./images/${v.small}"></li>`;
        });
        // 写入 list ul 中
        this.list.innerHTML = str;

        // 吸入li之后,就有li标签了,可以获取了
        this.lis = this.list.querySelectorAll('li');

        // 3, 动态生成,放大区,背景图片
        this.glass.style.backgroundImage = `url('./images/${this.arr[0].big}')`;

    }


    // 2, 鼠标移入 show区域 遮盖层mask 放大区域glass显示
    //    鼠标移出 show区域 遮盖层mask 放大区域glass隐藏

    setMouse(){
        // 移入显示
        this.show.addEventListener('mouseenter' , ()=>{
            this.mask.style.display = 'block';
            this.glass.style.display = 'block';
        })
        // 移出消失
        this.show.addEventListener('mouseleave' , ()=>{
            this.mask.style.display = 'none';
            this.glass.style.display = 'none';
        })
    }


    // 3, 点击列表区域list中的li,切换
    //    show区域的img图片   glass区域背景图片   li的active样式
    // 通过事件委托实现 点击时 本质上 点击的是 img图片
    setList(){
        this.list.addEventListener('click' , e => {
            // 判断,如果点击的是li标签
            if(e.target.tagName === "IMG"){
                // 给所有的li,清除样式标记
                this.lis.forEach((v)=>{
                    myRemoveClass(v , 'active');
                })
                // 给点击的img,父级li,添加active
                // 可以利用节点操作,找到当前标签的父级标签
                e.target.parentNode.className += ' active';


                // 切换设定图片src和背景图片url
                this.showImg.src = `./images/${this.arr[e.target.getAttribute('num')].big}`;
                this.glass.style.backgroundImage = `url('./images/${this.arr[e.target.getAttribute('num')].big}')`;
            }
        })        
    }

    // 4, 鼠标移动,遮盖层拖拽 背景图片定位
    setMouseMove(){
        // 遮盖层拖拽
        // 遮盖层定位: 鼠标定位(pageX) - 父级外边距 - 父级边框线 - 遮盖层占位/2
        // 极值设定 : 最小 0   0
        //           最大 父级标签宽度 - 遮盖层占位
        // 鼠标 在 show 移动事件
        this.show.addEventListener( 'mousemove' , e => {
            // 1 , 设定 定位坐标
            let x = e.pageX - this.eleMarginLeft - this.showBorderLeft - this.maskWidth/2;
            let y = e.pageY - this.eleMarginTop - this.showBorderTop - this.maskHeight/2;

            // 2 , 设定极值
            if(x < 0){
                x = 0;
            }

            if(y < 0){
                y = 0;
            }

            if(x > this.showWidth - this.maskWidth ){
                x = this.showWidth - this.maskWidth;
            }

            if(y > this.showHeight - this.maskHeight ){
                y = this.showHeight - this.maskHeight ;
            }

            // 3, 定位 mask 
            this.mask.style.left = x + 'px';
            this.mask.style.top = y + 'px';

            // 4, 定位 背景图片
            // 遮盖层和show 是 小的遮盖层动,大的show不懂
            // 背景图片和glass 是 小的glass不同 大的背景图片动
            // 移动方向,正好相反 定位移动的距离是 -x -y
            // 并且要等比例移动
            let glassX = -(this.glassBgImgObj.width * x / this.showWidth);
            let glassY = -(this.glassBgImgObj.height * y / this.showHeight);

            console.log( glassX , glassY  );

            // 给背景图片定位
            this.glass.style.backgroundPosition = `${glassX}px  ${glassY}px`;
        } )
    }
}