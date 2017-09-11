
//需要在浏览器中运行，只是js文件，没有window对象
window.color = "red";
var o = {color: "blue"};
function sayColor() {
    console.log(this.color);
}
sayColor();//red
sayColor.call(this);//red
sayColor.call(window);//red
sayColor.call(o);//blue
var objSayColor = sayColor.bind(o);
objSayColor();//blue

