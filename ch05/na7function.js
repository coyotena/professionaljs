/**
 * Created by Administrator on 2017-9-7.
 */
function createCom(propertyName) {
    return function (obj1, obj2) {
        console.log(obj1);
        var val1 = obj1[propertyName];
        var val2 = obj2[propertyName];
        if (val1 < val2) {
            return -1;
        }else if (val1 > val2) {
            return 1;
        }else {
            return 0;
        }
    }
}

var data = [{name: "Zanny", age: 28}, {name: "Jeny", age: 29}];
data.sort(createCom("name"));
console.log(data[0].name);

function sum(num1, num2) {
    return num1 + num2;
}
function applySum1(num1, num2) {
    return sum.apply(this, arguments);
}
function applySum2(num1, num2) {
    return sum.apply(this, [num1, num2]);
}
console.log(applySum1(10,10));
console.log(applySum2(10,10));
function callSum(num1, num2) {
    return sum.call(this, num1, num2);
}
console.log(callSum(10, 10));