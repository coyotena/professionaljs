/**
 * Created by Administrator on 2017-8-31.
 */
console.log("------------数组的迭代方法--------------");
var numbers = [1,2,3,4,5,4,3,2,1];
var everyResult = numbers.every(function(item, index, array){
    return item > 2;
});
console.log("everyResult",everyResult);
var someResult = numbers.some(function(item, index, array){
    return item > 2;
});
console.log("somResult", someResult);
var fileterResult = numbers.filter(function (item, index, array) {
    return item >2;
});
console.log("filterResult", fileterResult);

var forEachResult = numbers.forEach(function (item, index, array) {//forEach没有返回值，并且不影响原数组
    item = item -1;
    // console.log("item", item);
});
console.log("numbers", numbers);
console.log("forEachResult", forEachResult);

var mapResult = numbers.map(function (item, index, array) {
    return item + 1;
});
// console.log("numbers", numbers);
console.log("mapResult", mapResult);
