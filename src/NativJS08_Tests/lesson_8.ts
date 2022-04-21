// 1. Функция sum принимает параметром целые положительные
// числа (неопределённое кол-во) и возвращает их сумму (rest).
export function sum(...nums: Array<number>): number {  // rest operator все параметры будут собраны
    //console.log()                                //в один массив и дальше надо работать с массивом / reduce
    return nums.reduce((acc, el) => acc + el, 0)
}


// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.  OK
//- через if / else
export function getTriangleType(a: number, b: number, c: number): string {
    let result =''
    if (a + b > c && b + c > a && c + a > b){ //в начале проверка на существование треугольника
        if (a === b && b === c) {
            result = '10'
        } else if (a === b || b === c || c===a) {
            result = '01'
        } else {
            result = '11'
        }
    } else {
        result = '00'
    }
    return result
}
/*
    if (a + b <= c || b + c <= a || c + a <= b)
        return '00'
    else if (a == b && b == c && c == a)
        return '10'
    else if   (a == b || b == c || c == a)
        return "01"
    else {
        return '11'
    }
}
*/


// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа
//можно остатком от деления на 10 (%)
export function getSum(number: number): number {
    return number.toString()
        .split('')  //['1','2','3']
        .map(Number)
        .reduce((acc, el) => acc + el, 0)
}
export function getSum1(number: number): number {
    let res = 0
    let num = 0
    while (number) {
        num = number % 10;
        number = (number - num) /10
        res += num
    }
    return res
}



// 4. Функция isEvenIndexSumGreater принимает  параметром массив чисел. //[1, 100, 2, 200]
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.
export const isEvenIndexSumGreater = (arr: Array<number>): boolean => {
    let even = 0
    let odd = 0
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            even += arr[i]
        } else {
            odd += arr[i]
        }
    }
    return even > odd
}
//  const result = arr.reduce((acc, el, i) => i % 2 ? acc -= el : acc +=el, 0)
//  return result  > 0

/*const result = arr.reduce((acc, el, i) => {
    acc[i%2] += el
    return acc
}, [0,0])
return result[0] > result[1]*/

/*let result = 0
 for (let i = 0; i < arr.length; i++) {
      if(i%2 === 0){
         result += arr[i]
      } else {
         result -=arr[i]
      }
 }
  return result  > 0*/


// 5. Функция getSquarePositiveIntegers принимает параметром массив чисел и возвращает новый массив.
// Новый массив состоит из квадратов целых положительных чисел, которые являются элементами исходного массива.
// Исходный массив не мутирует.

export function getSquarePositiveIntegers1(array: Array<number>): Array<number> {
    let newArr = array
        .filter(el => el> 0) // возвращает массив
        .filter(el => Number.isInteger(el))
        .map(el => el * el)
    return newArr
}
export function getSquarePositiveIntegers(array: Array<number>): Array<number> {
    let newArr = array.filter(el => el> 0 && Number.isInteger(el)).map(el => el ** 2) //  !(el % 1) заменить на Number.isInteger(el)
    return newArr
}


// 6. Функция принимает параметром целое не отрицательное число N и возвращает сумму всех чисел от 0 до N включительно
// Попробуйте реализовать функцию без использования перебирающих методов.
// 5 = 0 + 1 + 2 +3 +4 +5. Можно через рекурсию.
export function sumFirstNumbers(N: number): number {
    if (N === 0) return N
    return  N + sumFirstNumbers(N-1)  // сделал через рекурсию, самый хороший вариант для рекурсии
}

export function sumFirstNumbers1(N: number): number {
    return  (N + 1) / 2 * N  // сумма первых членов арифметической прогрессии
}

export function sumFirstNumber2(N: number): number {
    let sum = 0
    for (let i = 0; i <=N ; i++) {
        sum += i
    }
    return sum
}

// ...и "лапку" вверх!!!!


// Д.З.:
// 7. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1].
// Считаем, что количество банкнот каждого номинала не ограничено

export function getBanknoteList(amountOfMoney: number): Array<number> {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    return [1]
}