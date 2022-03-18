import {CityType} from "../02_Objects/02"; // сделали импорт чтобы не было ошибки. Он тут не нужен
const ages = [18, 20, 22, 1, 100, 90 ,14]
const predicate = (age:number) => {
    return age > 90
}

type  CourseType = {
    title: string
    price: number
}
const courses = [
    {title: 'CSS', price: 110},
    {title: 'JS', price: 200},
    {title: 'REACT', price: 150}
]
const cheapPredicate = (course: CourseType) => {
    return course.price < 160
}
const cheapCourse = [
    {title: 'CSS', price: 110},
    {title: 'REACT', price: 150}
]