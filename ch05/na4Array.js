/**
 * Created by Administrator on 2017-8-31.
 */
var values = [1,2,3,4,5];
var sum = values.reduce(function (prev, cur, index, array) {
    console.log(prev,cur,index);
    return prev + cur;
});
console.log("sum", sum);
