let isDone: boolean = false;

let age:number=20;
//二进制
let binaryNumber:number=0b1111

let firstName:string='yuan'
let message:string=`Hello,${firstName}`

let u:undefined=undefined;
let n:null=null;

let notSure:any=4;
notSure='string'
notSure=true;

notSure.myName;
notSure.getName()

//联合类型
let numberOrString:number|string=234;
numberOrString='abc'
//numberOrString=false//X

let arrOfNumbers:number[]=[1,2,3,4]
arrOfNumbers.push(5)
//arrOfNumbers.push('str')//X

/*
function test(){
    console.log(arguments)
    arguments.length;
    arguments[1];
}*/