const students = [
    {name: "Bob", age: 22, isMarried: true, scores: 111},
    {name: "Alex", age: 21, isMarried: true, scores: 90,},
    {name: "Nick", age: 20, isMarried: false, scores: 5},
    {name: "John", age: 19, isMarried: false, scores: 200},
    {name: "Helen", age: 20, isMarried: true, scores: 166},
    {name: "Ann", age: 20, isMarried: false, scores: 40},
    {name: "Jane", age: 25, isMarried: false, scores: 140},
];

const user = {name: "Bob", age: 23,
    friends: ["Alex", "Nick", "John"]
}

//1. Создайте поверхностную копию объекта user
let copyUser = {...user}
//Проверка:
console.log(user !== copyUser) //поверхностная копия копирует примитивы
console.log(user.friends === copyUser.friends) //поверхностная копия не копирует ссылки на массивы и объекты

//2. Полная (глубокая) копия объекта user
let deepCopyUser = {...user, friends: [...user.friends]};
//Проверка:
console.log(user !== deepCopyUser)
console.log(user.friends !== deepCopyUser.friends)

//3. Поверхностная копия массива students
let copyStudents= [...students]
//Проверка:
console.log(copyStudents !== students )
console.log(copyStudents[0].name === students[0].name)

//4*. Полная (глубокая) копия массива students (map)
let deepCopyStudents = students.map(el => ({...el})) // {...el} нужно обворачивать в () чтоб js понимал что это не тело функции, а объект
//let deepCopy = JSON.parse(JSON.stringify(students))
//Проверка:
console.log(deepCopyStudents !== students)
console.log(deepCopyStudents[1].age === students[1].age)


// NB!!! Далее все преобразования выполняем не модифицируя исходный массив students
// Вывод результатов - в консоль
//5. Отсортируйте копию массива deepCopyStudents по алфавиту (sort)
const compareFunction = (a, b) => {
    return a - b
}
let sortedByName= [...deepCopyStudents].sort((a, b) =>
    a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1)
console.log(sortedByName);

//5a. Отсортируйте deepCopyStudents по успеваемости(лучший идёт первым)(sort)
let sortedByScores= [...deepCopyStudents].sort((a, b) =>
    a.scores > b.scores ? -1 : 1)
console.log(sortedByScores);

//6. Сформируйте массив студентов, у которых 100 и более баллов (filter)
let bestStudents = [...sortedByScores].filter(el => el.scores > 100)//.map(el => el.name)
console.log(bestStudents)


//6a. Получите массив ("вырежьте") из трёх лучших студентов из массива deepCopyStudents (splice)
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

let topStudents= [...bestStudents].splice(0,3)
console.log(topStudents)
console.log(deepCopyStudents)

//6b. Объедините массивы deepCopyStudents и topStudents так,
//чтоб сохранился порядок сортировки (spread-оператор || concat)
let newDeepCopyStudents = topStudents.concat(deepCopyStudents)  // быстрее чем spread operator
let newDeepCopyStudents1 =[...topStudents, ...deepCopyStudents]
console.log(newDeepCopyStudents)
console.log(newDeepCopyStudents1)


//7. Сформируйте массив холостых студентов (filter)
let notMarriedStudents= deepCopyStudents.filter(el => !el.isMarried) //el.isMarried === true
console.log(notMarriedStudents)



//8. Сформируйте массив имён студентов (map)
let studentsNames= deepCopyStudents.map(el => el.name)
console.log(studentsNames)

//8a. Сформируйте строку из имён студентов, разделённых
// - пробелом (join)
// - запятой (join)
let nameWithSpace= studentsNames.join(' ')
console.log(nameWithSpace)

let namesWithComma= studentsNames.join(', ')
console.log(namesWithComma)


//9. Добавьте всем студентам свойство "isStudent" со значением true (map).// После => нужны скобки() чтоб js понимал что это не тело функции, а объект
let trueStudents= deepCopyStudents.map(el => ({...el, isStudent: true })) //  => {return{...el, isStudent: true }}
console.log(trueStudents)
console.log(deepCopyStudents) // глубока копия не меняется

//10. Nick женился. Выполните соответствующие преобразование массива students (map)
let studentsWithMarriedNick= deepCopyStudents.map( el => el.name === 'Nick' ? {...el, isMarried: true} :el)
//studentsWithMarriedNick = {...deepCopyStudents[2], isMarried: true}
console.log(studentsWithMarriedNick)


//11. Найдите студента по имени Ann (find)
let ann= deepCopyStudents.find(el => el.name === 'Ann')
console.log(ann)


//12. Найдите студента с самым высоким баллом (reduce)
// - c помощью reduce
// - *не испльзуя методы массивов и Math.max()*
let bestStudent= deepCopyStudents.reduce((acc, el) =>
    acc.scores> el.scores ? acc : el)
console.log(bestStudent)

let bestStudentNew = students[0]
for (let i = 1; i <students.length ; i++) {
    if(students[i].scores > bestStudentNew.scores) {
        bestStudentNew = students[i]
    }
}
console.log(bestStudentNew)


//13. Найдите сумму баллов всех студентов (reduce)
let sumOfScores = deepCopyStudents.reduce((acc, el) => acc + el.scores, 0)
console.log(sumOfScores)


// 14. Д.З.:
// Напишите функцию addFriends, которая принимает параметром массив students
// и добавляет в каждому студенту свойство "friends",
// значением которого является массив имён всех остальных студентов из массива students,
// за исключением собственного имени студента. Т.е. в друзьях у Боба Боба быть не должно.
const addFriends = (students) => {
    const nameOfStudens = students.map(el => el.name)
    const addFriends = students.map(el => ({...el, friends: nameOfStudens}))
    return addFriends

}
console.log(addFriends(students));


let arr = ['Bob', 'Alex', 'Nick', 'John', 'Helen', 'Ann', 'Jane']
let name = 'Bob'
filter = arr.filter( el => el !== 'Bob')
console.log(filter)

let fr = addFriends(students)
console.log(fr[0].name)
let arrayOfFriends = fr.map( el => el.friends)
let fil = arrayOfFriends.filter(el => el !== fr[0].name)
console.log(arrayOfFriends)
