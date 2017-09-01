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

