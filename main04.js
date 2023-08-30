// ---------------------- Задачи на методы массивов  --------------------------- //

const characters = [{
    id: 1,
    name: 'Frodo Baggins',
    race: 'Hobbit',
    age: 51,
    home: 'Bag End',
    weapons: ['Sting', 'Mithril coat'],
    friends: [4, 5, 6],
}, {
    id: 2,
    name: 'Samwise Gamgee',
    race: 'Hobbit',
    age: 38,
    home: 'Hobbiton',
    weapons: ['Elven rope', 'Cooking skills'],
    friends: [1, 4, 5],
}, {
    id: 3,
    name: 'Gandalf',
    race: 'Maia',
    age: 'Unknown',
    home: 'Valinor',
    weapons: ['Staff', 'Sword Glamdring'],
    friends: [7, 8],
}, {
    id: 4,
    name: 'Merry Brandybuck',
    race: 'Hobbit',
    age: 37,
    home: 'Buckland',
    weapons: ['Barrow-blades'],
    friends: [1, 2, 5, 6],
}, {
    id: 5,
    name: 'Pippin Took',
    race: 'Hobbit',
    age: 29,
    home: 'Tookland',
    weapons: ['Barrow-blades'],
    friends: [1, 2, 4, 6],
}, {
    id: 6,
    name: 'Legolas',
    race: 'Elf',
    age: 2931,
    home: 'Woodland Realm',
    weapons: ['Bow and arrows', 'Elven knives'],
    friends: [1, 4, 5, 7, 8],
}, {
    id: 7, name: 'Gimli', race: 'Dwarf', age: 139, home: 'Lonely Mountain', weapons: ['Axe'], friends: [3, 6, 8],
}, {
    id: 8,
    name: 'Aragorn',
    race: 'Man',
    age: 87,
    home: 'Gondor',
    weapons: ['Sword Andúril', 'Bow and arrows'],
    friends: [3, 6, 7],
}, {
    id: 9,
    name: 'Gollum',
    race: 'Hobbit',
    age: 589,
    home: 'Caves beneath the Misty Mountains',
    weapons: ['Dagger'],
    friends: [],
}, {
    id: 10,
    name: 'Sauron',
    race: 'Maia',
    age: 'Unknown',
    home: 'Barad-dûr, Mordor',
    weapons: ['The One Ring', 'Mace'],
    friends: [],
},];

const saruman = {
    id: 11, name: 'Saruman', race: 'Maia', age: 'Unknown', home: 'Isengard', weapons: ['Staff'], friends: [4],
};

/*
1. Напишите функцию, которая принимает массив персонажей и выводит список имен персонажей.
 */
const showCharacterName = characters => {
    return characters.map(el => el['name'])

};
console.log(showCharacterName(characters))

/*
2. Напишите функцию, которая принимает массив персонажей и выводит их всех в консоль.
Если возраст персонажа равен "Unknown", то вместо него выведите строку "Возраст неизвестен".
 */
const checkCharacterAge = characters => {
    return characters.map(el => {
        // console.log(el)
        return el.age === "Unknown" ? `${el.name} -- Возраст неизвестен` : `${el.name} -- ${el.age}`

    })
};
console.log(checkCharacterAge(characters))

/*
3.  Напишите функцию, которая будет добавлять нового персонажа в конец массива "characters" и возвращать обновленный массив.
Добавить нужно объект saruman
 */
const addCharacter = characters => {
    return [...characters, saruman]
};
console.log(addCharacter(characters))
console.log(characters)
/*
4. Напишите функцию, которая принимает массив персонажей и выводит в консоль имена персонажей, у которых нет друзей.
 */
const checkCharacterFriends = characters => {
    return characters.filter(el => !el.friends.length && console.log(el.name))
};
checkCharacterFriends(characters)

/*
5. Напишите функцию, которая принимает массив персонажей и выводит в консоль имена всех персонажей, которые не являются хоббитами.
 */
const checkCharacterIsHobbit = characters => {
    characters.filter(el => el.race !== 'Hobbit' && console.log(el.name)  )
    return characters.reduce((acc, el) => {
        if (el.race !== 'Hobbit') {
            acc.push(el.name)
        }
        return acc
    }, [])
};
console.log(checkCharacterIsHobbit(characters))

/*
6. Напишите функцию, которая принимает массив персонажей и выводит в консоль имена всех четных персонажей (id).
 */
const checkCharacterIdIsEven = characters => {
    characters.filter(el => el.id % 2 === 0 && console.log(el.name))
    return characters.reduce((acc, el) => {
        if (el.id % 2 === 0) {
            acc.push(el.name)
        }
        return acc
    }, [])
};
console.log( checkCharacterIdIsEven(characters));

/*
7. Напишите функцию, которая принимает массив персонажей и проверяет, является ли он магом (имеет ли он в оружии "Staff").
Если да, выведите сообщение "Этот персонаж является магом". Если нет, выведите сообщение "Этот персонаж не является магом".
*/
const checkCharacterIsWizard = characters => {
     return characters.map(el => el.weapons.includes('Staff') ? console.log("Этот персонаж является магом") : console.log("Этот персонаж не является магом"))
    characters.forEach((el) => {
        el.weapons.includes('Staff')
            ? console.log("Этот персонаж является магом")
            :console.log("Этот персонаж не является магом")
    })
};
checkCharacterIsWizard(characters)

/*
!*8!. Напишите функцию, которая принимает массив персонажей и меняет возраст персонажа "Sauron" на 100200 лет.
*/
const changeSauronAge = characters => {
   return  characters.map(el=> el.name === "Sauron" ?  {...el, age: 100200}  : el)
};
console.log(changeSauronAge(characters))

/*
!**9!. Напишите функцию, которая принимает массив персонажей и находит персонажа с наибольшим количеством друзей.
*/
const checkMaxFriends = characters => {
    return [...characters].sort((a,b)=> b.friends.length - a.friends.length)[0].name
};
console.log(checkMaxFriends(characters))


// ------------------------------------------------------------

// Задача: выбрать чётные, вычислить их квадраты и отобрать из них числа больше 50.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


/*
Последовательность решения
Подготовка:
1. Создать универсальную функцию для проверки четное ли это число?
2. Создать универсальную функцию для возведения числа в квадрат?
3. Создать универсальную функцию для проверки условия: больше ли одно число чем другое?

1ый способ решения
Решить с помощью map и filter?

1ый способ решения
Решить с помощью reduce?
 */
// numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//
const checkNumIsEven = (num) => {
    return num % 2 === 0
}
const transformNumToSquare = (num) => {
    return num * num
}

const checkNumIsGreaterThanAnotherNum = (num) => {
    return num > 50
}


// Решение через map/filter
const result = numbers.filter(el => el%2 === 0).map(el => el** 2).filter(el => el > 50)
console.log(result)
//
// // console.log(result)
// // [64, 100]

const resReduce = numbers.reduce((acc, value) => acc + value, 0)
console.log(resReduce)
// Решение с помощью reduce
const result1 = numbers.reduce((acc, value) => {
    if (checkNumIsEven(value)) {
        const square = transformNumToSquare(value)
        if (checkNumIsGreaterThanAnotherNum(square)) {
            return [...acc, square]
        }
    }
    return acc
}, [])

console.log(result1)
// // [64, 100]


// Задача: с помощью reduce создать ассоциативный массив

const users = [{id: "123", name: "Vasiliy", age: 18}, {id: "345", name: "Anna", age: 22}, {
    id: "567",
    name: "Igor",
    age: 20
}, {id: "789", name: "Irina", age: 24},]
const resUsers = users.reduce((acc, user) => {
    return {...acc, [user.id]: {...user}}
}, {})
// console.log(resUsers)
//
//
