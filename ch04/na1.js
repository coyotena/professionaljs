/**
 * Created by Administrator on 2017-8-21.
 */
console.log("----------------传递参数为基本类型值---------------------");
function addTen(num){
    num += 10;
    return num;
}
var count = 20;
var result = addTen(count);
console.log("count = ",count);
console.log("result = ", result);
console.log("----------------传递参数为引用类型值---------------------");
function setName(obj){
    obj.name = "coyote";
}
var person = new Object();
setName(person);
console.log(person.name);//coyote
console.log("----------------传递参数为引用类型值，证明对象是按值传递的---------------------");
function setAge(obj) {
    obj.age = 25;
    obj = new Object();//obj仍为原始引用。当在函数内部重写obj时，这个变量引用的就是一个局部对象，这个局部对象会在函数执行完毕后立即被销毁
    obj.age = 27;
}
var pers = new Object();
setAge(pers);
console.log(pers.age);//25









