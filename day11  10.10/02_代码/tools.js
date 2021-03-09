// 随机颜色
// 返回值是 颜色效果的字符串
function setColor() {
    // 方法1  rgb(颜色数值1,颜色数值2,颜色数值3);
    // 生成随机 0-255 的颜色数值
    return `rgb(${parseInt(Math.random() * 256)},${parseInt(Math.random() * 256)},${parseInt(Math.random() * 256)})`;

    // 方法2  #十六进制
    // #号之后拼接6个随机的十六进制数值
    // 十六进制的所有字符
    // var str = '0123456789abcdef';
    // // 返回的结果,起始是一个#号
    // var res = '#';
    // 循环6次,在 #号 之后 拼接6个字符
    // for(var i = 1 ; i <= 6 ; i++){
    //     // 随机生成 str 字符串的所有索引下标 0 - str.length-1
    //     var num = parseInt( Math.random()*str.length );
    //     // 利用随机索引下标,从 str 字符串中,随机提取一个字符,拼接在res 中
    //     res += str[num];
    // }
    // // 返回拼接结果字符串
    // return res;

    // 方法3 英文单词
    // 写一个数组,定义所有支持的英文单词
    // 通过随机的索引下标,随机获取一个单词
    // var colorArr = ['black','silver','gray','white','maroon','red','purple','fuchsia','green','lime','olive','yellow','navy','blue','teal','aqua','orange','aliceblue','antiquewhite','aquamarine','azure','beige','bisque','blanchedalmond','blueviolet','brown','burlywood','cadetblue','chartreuse','chocolate','coral','cornflowerblue','cornsilk','crimson','darkblue','darkcyan','darkgoldenrod','darkgray','darkgreen','darkgrey','darkkhaki','darkmagenta','darkolivegreen','darkorange','darkorchid','darkred','darksalmon','darkseagreen','darkslateblue','darkslategray','darkslategrey','darkturquoise','darkviolet','deeppink','deepskyblue','dimgray','dimgrey','dodgerblue','firebrick','floralwhite','forestgreen','gainsboro','ghostwhite','gold','goldenrod','greenyellow','grey','honeydew','hotpink','indianred','indigo','ivory','khaki','lavender','lavenderblush','lawngreen','lemonchiffon','lightblue','lightcoral','lightcyan','lightgoldenrodyellow','lightgray','lightgreen','lightgrey','lightpink','lightsalmon','lightseagreen','lightskyblue','lightslategray','lightslategrey','lightsteelblue','lightyellow','limegreen','linen','mediumaquamarine','mediumblue','mediumorchid','mediumpurple','mediumseagreen','mediumslateblue','mediumspringgreen','mediumturquoise','mediumvioletred','midnightblue','mintcream','mistyrose','moccasin','navajowhite','oldlace','olivedrab','orangered','orchid','palegoldenrod','palegreen','paleturquoise','palevioletred','papayawhip','peachpuff','peru','pink','plum','powderblue','rosybrown','royalblue','saddlebrown','salmon','sandybrown','seagreen','seashell','sienna','skyblue','slateblue','slategray','slategrey','snow','springgreen','steelblue','tan','thistle','tomato','turquoise','violet','wheat','whitesmoke','yellowgreen','rebeccapurple'];
    // var num = parseInt( Math.random()*colorArr.length );
    // return colorArr[num];

}

// 关键词替换
// 你给我一个字符串,给我一个关键词,我给你换成**星号
// 参数1 需要替换的字符串 参数2 需要替换的关键词
function setKeyWord() {
    // 按照 关键词 将字符串,转化为数组
    var arr = string.split(word);

    // 关键词 word 有几个字符,拼接几个*星号
    // 根据 关键词 word length 也就是 字符串长度,执行循环
    var key = '';
    for (var i = 1; i <= word.length; i++) {
        key += '*';
    }
    // 将 星号 作为间隔符号,将数组拼接为字符串
    var newStr = arr.join(key);
    // 返回替换之后的新的字符串
    return newStr;
}

// 判断是否是回文函数
// 你给我一个字符串,我告诉你,这个字符串,是不是回文字符串
// 参数: 需要判断的字符串
function isPalString(string) {
    // 1,按照空字符串,将形参字符串,转化为数组
    var arr = string.split('');
    // 2,反转数组
    arr.reverse();
    // 3,反转数组,按照空字符串为间隔,拼接为新的字符串
    var newStr = arr.join('');
    // 4,判断,如果新的字符串,与,形参字符串,相同,就是回文字符串
    if (newStr === string) {
        return true;
    } else {
        return false;
    }
}


// 获取文件名中的扩展名
// 你给我一个文件名,我给你这个文件的扩展名
// 参数: 需要获取扩展名的文件名
function getExt(string) {
    return string.substr(string.lastIndexOf('.') + 1);
}


// 求最小公倍数
function getLCM(num1, num2) {
    // 1,容错处理,确定两个数值大小顺序
    var min = Math.min(num1, num2);
    var max = Math.max(num1, num2);

    // 2,求最小公倍数
    // 循环从 较大值 开始 至 两个数值的 乘积
    // 可以优化循环 , 累加的步长是 较大值
    for (var i = max; i <= min * max; i += max) {
        // 如果 i 可以同时整除两个数值 , i 就是 最小公倍数
        if (i % min === 0 && i % max === 0) {
            // 如果发生整除,就返回i 
            // return 可以同时 终止循环的执行
            return i;
        }
    }
}

// 求最大公约数
function getGCD(num1, num2) {
    // 1,容错处理,确定两个数值大小顺序
    var min = Math.min(num1, num2);
    var max = Math.max(num1, num2);

    // 2,定义一个死循环,发生整除时,才会终止循环
    while (true) {
        if (max % min === 0) {
            return min;
        } else {
            // 给 max 和 min  赋值新的数值
            // max 应该是  上一次的 min 
            // min 应该是  上一次的 max%min 的余数 
            // 定义临时变量 存储数值

            // num 中 存储原始max
            var tmp = max;
            // 下一次max 赋值 上一次的min
            max = min;
            // min 是 上一次max,就是当前num中的数值 % min本身
            min = tmp % min;
        }
    }
}

// 获取当前时间字符串
function getNowTimeStr() {
    // 获取当期时间dx
    var time = new Date();
    // 获取4位年份
    var year = time.getFullYear();
    // 获取月份 结果是 0-11 表示 1-12月 
    // 获取结果,与实际结果差1
    var month = time.getMonth() + 1;
    var date = time.getDate();
    // 获取星期 : 0-6 表示 星期日-星期六
    var weekArr = ['日', '一', '二', '三', '四', '五', '六'];
    var week = `星期${weekArr[time.getDay()]}`;

    // 时分秒,做 前导补零 处理
    // 当数值小于 10 , 在数值前 拼接 '0'
    // 当获取的时间数值 小于 10  赋值的 是 字符串0 拼接上 当前时间    
    // 当获取的时间数值 大于等于 10  直接赋值当前时间
    var hours = time.getHours() < 10 ? '0' + time.getHours() : time.getHours();
    var minutes = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();
    var seconds = time.getSeconds() < 10 ? '0' + time.getSeconds() : time.getSeconds();

    return `当前时间是${year}年,${month}月,${date}日,${week},${hours}时,${minutes}分,${seconds}秒`;
}



/*
    定义一个函数,输入一个终止时间/结束时间
    返回给你,距离倒计时结束,还有几天,几小时,几分钟,几秒钟
*/

function getCountDown(end) {
    // 1, 获取 时间差 单位 秒
    // 终止时间戳(秒) - 当前时间戳(秒)

    // 当前时间对象
    var nowTime = new Date();

    // 终止时间对象
    var endTime = new Date(end);

    // 获取时间差
    var time = parseInt((endTime.getTime() - nowTime.getTime()) / 1000);

    // 2, 将时间差总秒数,转化为 天 小时 分钟 秒
    var d = parseInt(time / (24 * 60 * 60));
    var h = parseInt((time % (24 * 60 * 60)) / (60 * 60));
    var m = parseInt((time % (60 * 60)) / 60);
    var s = time % 60;

    // 前导补零处理
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;

    // 3, 创建一个对象,对象的属性是 天 时 分 秒 , 属性值是我们计算的数值
    // 如果对象的属性和属性值,名称都相同,可以就写一个
    // 自定创建对象的属性,属性名称就是变量的名称,属性的数值就是变量中存储的数值
    return { d, h, m, s };
}