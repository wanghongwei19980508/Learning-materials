// 在外部js文件中创建构造函数
// 需要两个参数:
// 参数1 : 整个轮播图的标签对象
// 参数2 : 生成轮播图的,图片信息数组

// 特别注意: 必须确保 构造函数程序中, this指向都是 实例化对象
//          只有是 实例化对象 this.XXX 才能争取的 调用数据 
// function Fun
class Banner {
    // 定义属性和属性值
    constructor(element, imgArr) {
        // 存储输入的参数
        this.ele = element;
        this.arr = imgArr;

        // 在参数的基础上,获取标签对象
        this.oUl = this.ele.querySelector('ul');
        this.oOl = this.ele.querySelector('ol');

        // 原始图片数组,单元个数
        this.imgLength = this.arr.length;

        // 定义index,存储执行li的索引下标
        this.index = 1;

        // 定义time,存储定时器
        this.time;

        // 定义bool,存储原始值,控制轮播图,防止点击过快
        this.bool = true;

        // 定义 li 的宽度 当前是没有数据的
        // 在程序执行时,有了li标签,再赋值宽度
        this.liWidth;

        // 定义 获取所有 ol>li 当前是没有数据的
        // 在程序执行时,有了li标签,再赋值宽度
        this.oOlLis;
    }

    // 入口函数 init()
    // 一个面向对象中,往往有多个函数方法,需要调用
    // 定义一个独立的函数方法,专门来调用所有的 需要执行的 函数方法
    // 这个函数,统一命名为 init()
    // 在实例化对象中,只调用 入口函数 就可以 调用所有的 需要执行的函数方法
    init(){
        this.setLi();
        this.autoLoop();
        this.mouseInOut();
        this.setActive();
        this.hid();
    }

    // 定义方法
    // (1) 生成 ul>li ol>li 方法
    setLi() {
        // 存储 ul>li 字符串的变量
        let ulLiStr = '';
        // 存储 ol>li 字符串的变量
        let olLiStr = '';

        // 循环遍历 数组
        // v是 数据 对象   k是索引下标
        this.arr.forEach((v, k) => {

            // 生成,ol>li 标签
            // 第一个li有 class="active"  每一个li 有 name属性 自定义存储索引下标的属性
            if (k === 0) {
                olLiStr += `<li class="active" name="olli" num="${k}"></li>`;
            } else {
                olLiStr += `<li name="olli" num="${k}"></li>`;
            }

            // 生成,ul>li 标签
            // li中有img图片标签,src属性,相对路径是固定,图片名称是,path属性存储的属性值
            ulLiStr += `<li><img src="./images/${v.path}"></li>`;

            // 循环结束,图片数组中的信息,对应生成了 ul>li  和 ol>li
        })

        // 将ul>li写入到ul标签中 将ol>li写入到ol标签中 
        this.oUl.innerHTML = ulLiStr;
        this.oOl.innerHTML = olLiStr;

        // 获取所有的ol中的li
        this.oOlLis = this.oOl.querySelectorAll('li');

        // 克隆,ul中的第一个和最后一个li
        const cloneFirst = this.oUl.querySelectorAll('li')[0].cloneNode(true);
        const cloneLast = this.oUl.querySelectorAll('li')[this.imgLength - 1].cloneNode(true);

        // 将克隆的标签,写入ul
        // 克隆的第一个,写入到ul的最后
        this.oUl.appendChild(cloneFirst);
        // 克隆的最后一个,写入到ul的起始
        this.oUl.insertBefore(cloneLast, this.oUl.querySelectorAll('li')[0]);

        // 重新设定ul的宽度, 每个li的宽度 * ( 图片数组单元个数 + 2 );
        // 获取li的宽度 --- 实际项目中,最好是 标签的占位 (包含 宽高+padding+border)
        this.liWidth = cloneFirst.offsetWidth;
        // 设定ul宽度,一个li占位 * (原始图片个数+2)
        this.oUl.style.width = this.liWidth * (this.imgLength + 2) + 'px';
        // 定义ul,左移一个li宽度
        this.oUl.style.left = - this.index * this.liWidth + 'px';
    }

    // (2) 自动轮播函数
    autoLoop() {
        // 定时器 中 this指向,默认是 window 不是 实例化对象
        // 改成箭头函数 : 箭头函数的this指向是 父级程序
        //               当前定时器的 父级程序是  autoLoop() 函数
        //               autoLoop() 函数有this指向, 
        //               autoLoop() 函数是定义在 实例化对象中的函数this指向,默认就是实例化对象
        //               定时器的this指向,与父级程序 autoLoop() 的 this指向相同,就是实例化对象
        this.time = setInterval(() => {

            // 先 index++,每次累加,执行显示下一张图片
            this.index++;

            // 如果要先改变样式,要在自动轮播中调用设定样式函数
            this.setLiStyle();

            // 调用运动函数
            // 参数1:运动的标签对象,是 ul
            // 参数2:运动的属性和终点位置的坐标 --- 不是每次移动的距离和方向
            //                                   负的 index 乘以 li的宽度
            // 参数3:运动终止时,调用的函数
            // 当前 函数的 this 就是 实例化对象   
            // bind绑定的改变的指向 应该是 实例化对象 --- 也就是 当前的 this 
            // 等于 是 给回调函数,赋值一个新的函数,这个函数的this不是undefined 是 实例化对象
            // 其他程序内容都与原始哈函数相同
            // move(this.oUl, { left: -this.index * this.liWidth }, this.loopEnd.bind(this) );

            // 回调函数的赋值,可以是 匿名函数 或者 函数名称
            // 匿名函数调用,this指向是 undefined , 需要变成 实例化对象
            // 将 function(){} 变成 箭头函数 this 指向就是 父级程序
            // 当前的父级程序 是 定时器 定时器的this,已经通过箭头函数,变成了 实例化对象
            // 改造了之后,匿名函数的this指向,也是 实例化对象了
            move(this.oUl, { left: -this.index * this.liWidth }, () => {
                // 在 this 是 实例化对象的匿名函数中调用 回调函数
                this.loopEnd();
            });

        }, 3000);
    }

    // (3) 轮播终止函数
    loopEnd() {
        console.log(this);

        // 判断index值
        if (this.index === this.imgLength + 1) {
            this.index = 1;
        } else if (this.index === 0) {
            this.index = this.imgLength;
        }

        // 根据新的index,执行ul的直接定位
        this.oUl.style.left = `-${this.index * this.liWidth}px`;

        // 给变量赋值初始值
        this.bool = true;
    }

    // (4) 定义ol>li焦点样式
    setLiStyle() {
        // 循环遍历所有的ol>li
        this.oOlLis.forEach((v, k) => {
            // 先清除所有的li,active样式
            myRemoveClass(v, 'active');
        })

        // 给索引对应的li,添加 active
        if (this.index === this.imgLength + 1) {
            // 当运动到最后一个li时,给第一个ol>li添加样式
            this.oOlLis[0].className += ' active';
        } else if (this.index === 0) {
            // 当运动到第一个li时,给最后一个ol>li添加样式
            this.oOlLis[this.imgLength - 1].className += ' active';

        } else {
            // 不是第一个li,也不是最后一个li,找li索引对应的ol>li
            this.oOlLis[this.index - 1].className += ' active';
        }
    }

    // (5) 鼠标移入移出
    mouseInOut() {
        // 移入,清除定时器
        this.ele.addEventListener('mouseenter', () => {
            clearInterval(this.time);
        })
        // 移出,再次启动,自动轮播函数
        this.ele.addEventListener('mouseleave', () => {
            this.autoLoop();
        })
    }

    // (6) 点击事件
    setActive() {
        this.ele.addEventListener('click', e => {
            // 通过触发点击事件的标签的判断,执行不同的程序

            if (e.target.getAttribute('name') === 'l') {
                // 防止点击过快
                if (!this.bool) return;
                this.bool = false;


                // 点击的是 左按钮
                this.index--;

                // 设定ol>li焦点按钮样式
                this.setLiStyle()

                // 调用move()运动函数,完成ul>li切换
                move(this.oUl, { left: -this.index * this.liWidth }, this.loopEnd.bind(this));

            } else if (e.target.getAttribute('name') === 'r') {
                // 防止点击过快
                if (!this.bool) return;
                this.bool = false;

                // 点击的是 右按钮
                this.index++;

                // 设定ol>li焦点按钮样式
                this.setLiStyle()

                // 调用move()运动函数,完成ul>li切换
                move(this.oUl, { left: -this.index * this.liWidth }, this.loopEnd.bind(this))

            } else if (e.target.getAttribute('name') === 'olli') {
                // 防止点击过快
                if (!this.bool) return;
                this.bool = false;

                // index赋值,是 点击标签 num 属性值 +1 需要先将属性值转化为数值类型
                this.index = e.target.getAttribute('num') - 0 + 1;

                // 设定ol>li焦点按钮样式
                this.setLiStyle()

                // 调用move()运动函数,完成ul>li切换
                move(this.oUl, { left: -this.index * this.liWidth }, this.loopEnd.bind(this))
            }
        })
    }

    // (7) 防止点击过快

    // (8) 浏览器隐藏
    hid() {
        // 给整个文档添加浏览器显示状态改变,监听事件
        document.addEventListener('visibilitychange', () => {
            if (document.visibilityState === 'hidden') {
                // 浏览器隐藏,清除定时器
                clearInterval(this.time);
            } else if (document.visibilityState === 'visible') {
                // 再次调用自动轮播函数
                this.autoLoop();
            }
        })
    }
}
