/**
 * Created by Administrator on 2017-8-16.
 */
/*Number()  前导的零会被忽略*/
console.log('Number("a00153")',Number("a00153"));
console.log('parseInt("a00153")',parseInt("a00153"));
console.log('parseFloat("a00153")',parseFloat("a00153"));
console.log("--------------------------");
console.log('Number("00153.5")',Number("00153.5"));
console.log('parseInt("00153.5")',parseInt("00153.5"));
console.log('parseFloat("00153.5")',parseFloat("00153.5"));
console.log("--------------------------");
console.log('Number("0153.5")',Number("0153.5"));
console.log('parseInt("0153.5")',parseInt("0153.5"));
console.log('parseFloat("0153.5")',parseFloat("0153.5"));
console.log("--------------------------");
console.log('Number("0153")',Number("0153"));
console.log('parseInt("0153")',parseInt("0153"));//还是十进制    ECMAScript3认为是八进制，而ECMAScript5认为是十进制
console.log('parseFloat("0153")',parseFloat("0153"));
console.log("--------------------------");
console.log('Number("0x153.5")',Number("0x153.5"));//NaN    前导的零会被忽略
console.log('parseInt("0x153.5")',parseInt("0x153.5"));//339
console.log('parseFloat("0x153.5")',parseFloat("0x153.5"));//0
console.log("-------------前面的空格会被忽略-------------");
console.log('Number("  0153.5")',Number("  0153.5"));
console.log('parseInt("  0153.5")',parseInt("  0153.5"));
console.log('parseFloat("  0153.5")',parseFloat("  0153.5"));
console.log("--------------------------");
console.log("");


