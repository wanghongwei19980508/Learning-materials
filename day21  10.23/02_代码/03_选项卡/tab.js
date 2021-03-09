// 定义构造函数,生成,tab切换/选项卡
// 需要两个参数
// 参数1: 图片数组信息
// 参数2: 选项卡标签对象

class mySetTab {
    constructor(array , element , type) {
        // 存储参数
        this.arr = array;
        this.ele = element

        // 存储事件类型,是点击还是鼠标经过
        this.type = type;

        // 获取的标签对象和数据
        this.oUl = this.ele.querySelector('ul');
        this.oOl = this.ele.querySelector('ol');

        // 定义变量,存储所有的ul>li   ol>li
        this.oUllis;
        this.oOllis;
    }

    // 定义一个入口函数,统一调用,构造函数中的方法
    init() {
        this.setLi();
        this.setActive();
    }


    // 设定 ul>li  ol>li  标签对象
    setLi() {
        // 定义存储生成字符串的变量
        let ulLiStr = '';
        let olLiStr = '';

        // 循环遍历,数组,生成标签对象,以字符串的形式,存储在变量中
        this.arr.forEach((v, k) => {
            // 给每一个 ul>li 添加 num 属性,存储的属性值 就是 当前 li标签的索引下标
            ulLiStr += k === 0 ? `<li num="${k}" name="ulli" class="active1">${v.name}</li>` : `<li  num="${k}"  name="ulli">${v.name}</li>`;

            olLiStr += k === 0 ? `<li name="olli" class="active2"><img src="./images/${v.path}"></li>` : `<li name="olli"><img src="./images/${v.path}"></li>`;
        })

        // 将字符串内容,写入到 ul ol 中
        this.oUl.innerHTML = ulLiStr;
        this.oOl.innerHTML = olLiStr;

        // 写入之后,页面就有ul>li ol>li 获取所有的标签
        this.oUllis = this.ele.querySelectorAll('ul>li');
        this.oOllis = this.ele.querySelectorAll('ol>li');
    }


    setActive() {
        this.ele.addEventListener( this.type , e => {
            if (e.target.getAttribute('name') === 'ulli') {
                // 1, 给所有的 ul>li 清除样式
                this.oUllis.forEach((v, k) => {
                    // v是 ul>li 伪数组中的 li标签
                    myRemoveClass(v, 'active1');
                    // k是 ul>li的索引 与 ol>li的索引相同
                    // 用k 作为 ol>li 伪数组的索引 可以获取 ul>li 伪数组中的 li标签
                    // 可以 同时删除 ol>li 中 li 标签的 active2 样式
                    myRemoveClass(this.oOllis[k], 'active2');

                })

                // 2, 给点击的添加 active1
                e.target.className += ' active1';

                // 3, 给与当前点击的 ul>li 标签 索引相同的 ol>li 添加样式
                this.oOllis[e.target.getAttribute('num')].className += ' active2';
            }
        })
    }

}