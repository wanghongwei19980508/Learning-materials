function animate1(obj,target,callback){
    //1.清除定时器
    clearInterval(obj.timer);

    //2.设定定时器
    obj.timer= setInterval(()=>{
        //3.步长取整

        let step = Math.ceil( (target-obj.offsetLeft)/10 );

        step = step >0 ? Math.ceil(step):Math.floor(step);

        if(target === obj.offsetLeft){
            clearInterval(obj.timer);
            if(callback){
                callback();
            }
        }
        obj.style.left = obj.offsetLeft + step + 'px';
    },15)
}