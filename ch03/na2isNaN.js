/**
 * Created by Administrator on 2017-8-16.
 */
console.log(isNaN(NaN));//true
console.log(isNaN(10));//false
console.log(isNaN("20"));//false(可以被转换成数值20)
console.log(isNaN("blue"));//true(不能被转换成数值)
console.log(isNaN(true));//false(可以被转换成数值1)
