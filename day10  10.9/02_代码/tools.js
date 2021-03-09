// 随机颜色
// 返回值是 颜色效果的字符串
function setColor(){
    // 方法1  rgb(颜色数值1,颜色数值2,颜色数值3);
    // 生成随机 0-255 的颜色数值
    return `rgb(${parseInt( Math.random()*256 )},${parseInt( Math.random()*256 )},${parseInt( Math.random()*256 )})`;

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
function setKeyWord(){
    // 按照 关键词 将字符串,转化为数组
    var arr = string.split( word );

    // 关键词 word 有几个字符,拼接几个*星号
    // 根据 关键词 word length 也就是 字符串长度,执行循环
    var key = '';
    for(var i = 1 ; i <= word.length ; i++){
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
function isPalString(string){
    // 1,按照空字符串,将形参字符串,转化为数组
    var arr = string.split('');
    // 2,反转数组
    arr.reverse();
    // 3,反转数组,按照空字符串为间隔,拼接为新的字符串
    var newStr = arr.join('');
    // 4,判断,如果新的字符串,与,形参字符串,相同,就是回文字符串
    if(newStr === string){
        return true;
    }else{
        return false;
    }
}


// 获取文件名中的扩展名
// 你给我一个文件名,我给你这个文件的扩展名
// 参数: 需要获取扩展名的文件名
function getExt(string){
    return string.substr( string.lastIndexOf('.') + 1 );
}


// 求最大公约数


// 求最小公倍数
