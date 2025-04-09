/*基本用法*/
const arr=[1,2,3];
const [a,b,c]=arr;//这一步实现a=1,b=2,c=3
console.log(a,b,c)

/*相当于
let a=arr[0]
let b=arr[1]
let c=arr[2]
*/

/*跳过某些元素*/
const numbers=[10,20,30,40];
const[first,,third]=numbers;
console.log(first,third);//10 30


/*对象解构*/
const person={name:"Alice",age:25};

//传统方法
let name1=person.name;
let age1=person.age;

//解构赋值
let{name,age}=person;


/*两种结构模式*/
//绑定
let[f,s]=[10,20];

const person1={name:"Alice",age:25};
const {name2,age2}=person;
/*发生在let const var 或声明变量时，直接进行解构赋值*/

//赋值
let e,g;
[e,g]=[30,40];

let p,q;
({p,q}={p:50,q:60});//需要加括号
/*发生在变量已经声明时*/

/*交换变量*/
//let a=1,b=3;
[a,b]=[b,a];//a=3,b=1


//箭头函数表达式

//普通函数
function add(a,b){
    return a+b;
}

//箭头函数
const add=(a,b)=>a+b;

// 传统匿名函数
(function (a, b) {
    return a + b + 100;
});

// 箭头函数
(a, b) => a + b + 100;

//const a = 4;
//const b = 2;

// 传统无参匿名函数
(function () {
    return a + b + 100;
});

// 无参箭头函数
() => a + b + 100;

//多行代码时，必须使用{}并显示return
(a,b)=>{
    const chuck=42;
    return a+b+chuck;
}


/*模板字符串*/
const name3="Alice";
const age3=25;
const message=`my name is ${name3} and I an ${age3} years old`