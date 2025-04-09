//函数声明
// function add(x:number,y:number,z?:number){
//     if(typeof z==='number'){
//         return x+y+z
//     }else{
//         return x+y
//     }
// }

// let result=add(2,3,4)

//函数表达式
const add=function(x:number,y:number,z?:number){
    if(typeof z==='number'){
        return x+y+z
    }else{
        return x+y
    }
}

//类型推断
const add2:(x:number,y:number,z?:number)=>number=add

let str='str'
