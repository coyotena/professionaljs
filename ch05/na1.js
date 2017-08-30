/**
 * Created by Administrator on 2017-8-28.
 */
var person = {
    name : "coyote",
    age : 22,
    5 : true
};
console.log(person.name);
function displayInfo(args){
    var output = "";
    if(typeof args.name == "string"){
        output += "name: " + args.name + "\n";
    }
    if(typeof args.age == "number"){
        output += "age: " + args.age;
    }
    console.log(output);
}
var p1 = displayInfo({name:"coyote2", age : 24});
console.log("p1", p1);//undefined


