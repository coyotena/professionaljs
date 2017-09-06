/**
 * Created by Administrator on 2017-9-1.
 */
var pattern1 = /\(?0\d{2}\)?[- ]?\d{8}|0\d{2}[- ]?\d{8}/;
var test1 = "(010-12345678";
var test2 = "hhh(010-12345678";
var result1 = pattern1.test(test2);
console.log(result1);