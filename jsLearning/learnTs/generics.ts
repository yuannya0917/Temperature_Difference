function echo<T>(arg:T):T{
    return arg
}

const result=echo('str')

function swap<T,U>(tuple:[T,U]):[U,T]{
    return [tuple[1],tuple[0]]
}
const result2=swap(['string',123])

function echoWithArr<T>(arg:T[]):T[]{
    console.log(arg.length)
    return arg
}

const arrs=echoWithArr([1,2,3])

//约束泛型
interface IWithLenghth{
    length:number
}

function echoWithLenght<T extends IWithLenghth>(arg:T):T{
    console.log(arg.length)
    return arg
}

//泛型类
class Queue<T>{
    private data:T[]=[];
    push(item:T){
        this.data.push(item);
    }
    pop():T|undefined{
        return this.data.shift();
    }
}

const queue=new Queue<number>();
queue.push(1)
console.log(queue.pop()?.toFixed)

const queue2=new Queue<string>();
queue2.push('str')
console.log(queue2.pop()?.length)



interface keyPair<T,U>{
    key:T;
    value:U;
}

let kp1:keyPair<number,string>={key:123,value:"str"}
let kp2:keyPair<string,number>={key:'test',value:123}


//接口与函数
interface IPlus{
    (a:number,b:number):number
}
function plus(a:number,b:number):number{
    return a+b
}
const a:IPlus=plus