
//=============================Метод объекта==================================

// 1. Метод объекта

// способы создания метода объекта

const user = {
    name: 'Masha',
    age:30,
    sayHi(){
        return `Hi my name ${this.name}`
    }
}
// user.sayHi = function (){
//     return 'Привет'
// }
console.log(user)
console.log(user.sayHi())
//=============================this==================================

// this
console.log(typeof this)
console.log( this === global)
console.log(typeof global)
console.log(typeof this)


// Что это такое?
// Какой тип данных?
// Чему равен?

// для чего это?
 const user1 = {
     name: 'Sasha',
     age:29,
     getAge(inc){
         return `i have years old ${this.age + inc}`
     },
     getFullInfo(){
         return `My name ${this.name} and me ${this.age} years old`
     }
 }

 user1.HW = function (){
    return this
 }

 console.log(user1.getAge())
 console.log(user1.HW())

// доказательство что это такое


//=============================call, bind, apply==================================

// call, bind, apply
// что за методы?
// для чего нужны?
// что принимают в качестве параметров?

// call
console.log(user.sayHi.call(user1))
console.log(user1.getAge.call(user, 10))
// apply
console.log(user1.getAge.apply(user, [10]))
// bind
console.log(user1.getFullInfo.bind(user))
console.log(user1.getFullInfo.bind(user)())
const  userInfo = user1.getFullInfo.bind(user)
console.log(userInfo())

console.log(user1.getAge.bind(user)(12))

const junior = {
    salary: 500,
    name: 'Ilya',
    workExp: 0
}

const teamLead = {
    salary: 5000,
    name: 'Denis',
    workExp: 7
}

function printDeveloperInfo(extraInfo = '') {


    return `Name: ${this.name}, 
    Salary: ${this.salary}, 
    Exp: ${this.workExp}, 
    extraInfo: ${extraInfo}
   `
}

// console.log(printDeveloperInfo())
console.log(printDeveloperInfo.call(teamLead), 'хватит работать ')
console.log(printDeveloperInfo.bind(junior)('где бабки?'))
//=============================Случаи потери контекста==================================
const dev = {
    name: 'Nikita',
    programmingLanguage: 'Javascript',
    getName() {
        return this.name
    },
    getProgrammingLanguage:() => {
        return this.programmingLanguage
    }
}
const newGetName = dev.getName
console.log('getName', dev.getName())
console.log('getName', newGetName())  // ---потеря контекста
console.log('getName', newGetName.bind(dev)())


console.log(dev.getProgrammingLanguage)
const cat = {
    type: 'british',
    method1: () => this.type,
    method2: function() {
        const fn = () => this.type
        return fn()
    }
}
const cat1 = ()=>{
    return this.type
}
const cat2 = function (){
    return this.type
}
console.log(cat.method2())
console.log(cat.method1())
console.log(cat1.call(cat))
console.log(cat2.call(cat))

//=============================Функция-конструктор==================================

const person = {
    name: 'Denis',
    age: 24,
    isMan: true
}

// Функция-конструктор

// для чего нужна

// Правила при работе с функцией конструктор

// Базовая запись
function Person (name, age, isMan){
    this.name = name
       this.age= age
        this.isMan =  isMan
}
const person1 = new Person('Sasha', 29, true)
console.log(person)
console.log(person1)

// Разница по сравнению с обычной функцией (что возвращают)

function car() {
    return 123
}

function Car() {
    return 123
}

const car1 = car()
const car2 = new Car()

console.log(car1)
console.log(car2)
// Что делать, если нужно добавить свойство?


// ---------------------------------- Задачи -----------------------------------------------


// 1. Создайте объект car, у которого есть свойство brand и метод getBrand,
// который выводит название марки машины.
// Вызовите метод getBrand как метод объекта car.
const car12 = {
    brand: 'bmw',
    gegBrand(){
        return this.brand
    }
}
console.log(car12.gegBrand())


// 2. Создайте объект counter, у которого есть свойство count и методы increment, decrement и reset,
// которые увеличивают, уменьшают, зануляют (сбрасывает) значение счетчика соответственно.
// Используйте ключевое слово this для обращения к свойству count.
const counter = {
    count: 15,
    increment(){
        return this.count + 1
    },
    decrement(){
        return this.count - 1
    },
    reset(){
        return this.count = 0
    }
}
console.log(counter.increment())
console.log(counter.decrement())
console.log(counter.reset())

// 3. Создайте объект person, у которого есть свойства name и age.
// Создайте метод greet, который выводит сообщение с именем и возрастом персоны.
// Используйте метод bind для создания новой функции,
// которая будет связывать значение this с объектом person.

const person22 = {
    name: 'LENA',
    age:43,
}
function greet(){
    return ` меня зовут ${this.name}, мне ${this.age} лет`
}
const newPersonLena = greet.bind(person22)
console.log(newPersonLena())

// 4. Создайте объект calculator, у которого есть свойства x и y и методы сложения и умножения этих чисел.
// Создайте другой объект user, у которого есть свойства a и b.
// Используйте метод call или apply для вызова методов объекта calculator с аргументами из объекта user.
//

const calculator = {
    x: 3,
    y: 5,
    sum(c) {
        return this.x + this.y + c
    },
    mul() {
        return this.x * this.y
    }
}

const man = {
    x: 10,
    y: 12,
}


console.log(calculator.sum.call(man, 100))









