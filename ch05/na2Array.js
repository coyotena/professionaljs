/**
 * Created by Administrator on 2017-8-30.
 */
var arr1 = new Array(5,4,3);
console.log(arr1.length);
var arr2 = new Array(5);
arr2[5] = "新增";
arr2[6] = "";
console.log(arr2.length);
console.log(arr2[9]);
console.log(arr2.length);


var colors = ["red", "green", "blue"];//创建一个包含三个字符串的数组
var names = [];//创建一个空数组
var values = [1, 2, ];//不要这样！这样会创建一个包含2或3项的数组
var options = [,,,,];//不要这样！这样会创建一个包含4或5项的数组
console.log("----toString,toLocalString-------");
var person1 = {
    toLocalString : function(){
        return "coyote1";
    },
    toString : function(){
        return "coyote2";
    }
};

var person2 = {
    toLocalString : function(){
        return "person2Local";
    },
    toString : function(){
        return "person2String";
    }
};
var person = [person1, person2];
// alert(person); // coyote2,person2String     //alert接受的是字符串参数，如果不是字符串，会在后台自动调用toString方法
//alert(person.toString());//coyote2,person2String
//alert(person.toLocalString());//报错了
person.sort();
console.log("1" > "-1");
console.log("---------数组操作方法----------------");
var arr3 = [1, 2, 3];
var arr4 = arr3.concat();
arr3.push(5);
console.log(arr3);
console.log(arr4);

