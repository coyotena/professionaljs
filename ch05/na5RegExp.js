/**
 * Created by Administrator on 2017-8-31.
 */
//匹配第一个"bat"或"cat"，不区分大小写
var pattern1 = /[bc]at/i;
//匹配一个"[bc]at"，不区分大小写
var pattern2 = /\[bc\]at/i;
//匹配所有以"at"结尾的3个字符的组合，不区分大小写
var pattern3 = /.at/gi;
//匹配所有".at"，不区分大小写
var pattern4 = /\.at/gi;

var exectext1 = "mom and dad and baby";
var execpattern1 = /mom( and dad( and baby)?)?/gi;
var execmatches = execpattern1.exec(exectext1);
console.log(execmatches.index);
console.log(execmatches.input);
console.log(execmatches[0]);
console.log(execmatches[1]);
console.log(execmatches[2]);
console.log(execmatches[3]);
console.log(execmatches.lastIndex);
console.log(execpattern1.lastIndex);
