class Animal {
    name: string;
    constructor(name: string) {
        this.name = name
    }
    run() {
        return `${this.name} is running`
    }
}

const snake = new Animal('lily')
console.log(snake.run())

//子类
class Dog extends Animal{
    bark(){
        return `${this.name} is barking`
    }
}

const wang=new Dog('wang')
console.log(wang.run())
console.log(wang.bark())

//方法重写
class Cat extends Animal{
    constructor(name){
        super(name)
        console.log(this.name)
    }

    run(){
        return 'Meow,'+super.run()
    }
}