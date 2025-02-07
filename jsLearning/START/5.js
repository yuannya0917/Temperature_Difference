console.log("Hello World");
//要保存才能输出！

//js变量
var x=5;
var y=6;
var z=x+y;

//js拥有动态类型
var x;  //x为undef
var x=5;    //x为数字
var x="john";   //x为字符串

//可以在字符串中使用引号
var answer="It's alright";
var answer="He is called 'Johnny'";
var answer='He is called "Johnny"';

//js数组
var cars=new Array();
cars[0]="saab";
cars[1]="volvo";
cars[2]="bmw";

//js对象
var person={firstname:"jonh",lastname:"doe",id:5566}

//对象属性寻址
var name=person.lastname;
var name=person["lastname"];