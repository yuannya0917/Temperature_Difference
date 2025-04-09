//首字母大写
interface Person {
    //只读属性,readonly只用于属性
    readonly id: number;
    name: string;
    //可选属性
    age?: number;
}

let test: Person = {
    id: 1234,
    name: 'yuan',
    //age:20
}
