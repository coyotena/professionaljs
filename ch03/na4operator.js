/**
 * Created by Administrator on 2017-8-17.
 */
console.log("--------------------一元操作符----------------------");
var age = 29;
var anothage = age-- + 2;
console.log(anothage);
var s1 = "01";
s1 = +s1;
console.log(s1);
var s1 = "s1";
var s2 = "s2";
console.log(s1*s2);
console.log(age/-1);
console.log(true + 1);
console.log(-0 - -0);
console.log("--------------------循环----------------------");
start:for(var i = 0; i < 5; i++){
    console.log("i = " + i);
}
function add(a, b){
    console.log("执行两个参数");
    var sum = 0;
    sum = a + b;
    return sum;
}

function add(){//js函数没有重载，也就是同名函数只有一个起作用
    console.log("执行无参");
    var sum = 0;
    for(var i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
}
var m = add(5, 6);
console.log(m);


