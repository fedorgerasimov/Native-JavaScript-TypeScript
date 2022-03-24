import {ManType07} from "./07";
import React from "react";

let props: ManType07

beforeEach( () => {
        props = {
        name: 'Jameson',
        age: 32,
        lessons: [{title: '1'}, {title:'2'}, {title: '3', name: 'React'}],
        address: {
            street:{
                title:'Victory street'
            }
        }
    }
})

test ('', () => {

    //const age = props.age
    //const lessons = props.lessons
    const {age, lessons} = props
    const {title} = props.address.street

    expect(age).toBe(32);
    expect(lessons.length).toBe(3)
    expect(title).toBe('Victory street')
})

test ('', () => {
    const l1 = props.lessons[0]
    const l2 = props.lessons[1]

    const [ls2, ls3] = props.lessons  //Деструктурирующее присваивание
    const [ls1, ...resLessons] = props.lessons

    expect(l1.title).toBe('1')
    expect(l2.title).toBe('2')
    expect(ls1.title).toBe('1')
    expect(resLessons.length).toBe(2)
    expect(resLessons[1].title).toBe('3')
    expect(resLessons[1]).toStrictEqual({title: '3', name: 'React'})
})