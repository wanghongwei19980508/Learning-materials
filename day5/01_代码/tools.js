function setColor(){
    var c1 = parseInt( Math.random()*256 );
    var c2 = parseInt( Math.random()*256 );
    var c3 = parseInt( Math.random()*256 );

    return `rgb(${c1},${c2},${c3})`;
}