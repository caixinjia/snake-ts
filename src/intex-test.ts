let a: number;
a = 123;
console.log('HELLO TS123');
function sum(a: number, b: string): string{
    return a + b;
}
sum(123, '456');
let b: {name: string, age?: number, [propName: string]: any};
b = {name: '张小红', age: 18, phone: 123}
const aaa = {name:123};
aaa.name = 3213;
console.log(aaa);

enum Gender{
    Male,
    Female
}
// 注释
let c: object;
c = function(item: number) :number{
    return item + 1;
}
// console.log(Promise);
// 使用class来定义一个类
class Person {
    name: string = '蔡鑫佳';
    age: number = 18;
    getName() {
        console.log(this.name);
        
    }
}

const per = new Person();
console.log(per);
per.getName();

class Animal {
    name: string;
    age: number;
    // 构造函数
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    };
    bark() {
        console.log(`我${this.age}岁才犯贱`);
    };
}
class Dog extends Animal{
    long: number;
    constructor(name: string, age: number, long: number) {
        super(name, age);
        this.long = long;
    }
    bark() {
        super.bark();
        console.log(`我的名字叫${this.name}`);
    }
}
const dog = new Dog('阿江', 7, 3);
dog.bark();

// 用接口来定义一个类的结构
interface myInterface{

};