import {CityType} from "../02_Objects/02";

test('should take courses cheaper', () => {
    const courses = [
        {title: 'CSS', price: 110},
        {title: 'JS', price: 200},
        {title: 'REACT', price: 150}
    ]
   /* const cheapPredicate = (course: CourseType) => {
        return course.price < 160
    }*/
    const cheapCourse = courses.filter(course => course.price < 160)
    expect(cheapCourse.length).toBe(2);
    expect(cheapCourse[0].title).toBe('CSS');
    expect(cheapCourse[1].title).toBe('REACT');
})

test('get only completed tasks', () => {
    const tasks = [
        {id: 1, title: 'Bread', isDone: false},
        {id: 2, title: 'Milk', isDone: true},
        {id: 3, title: 'Salt', isDone: false},
        {id: 4, title: 'Sugar', isDone: true}
    ]
    const completedTasks = tasks.filter( task => task.isDone)
    expect(completedTasks.length).toBe(2)
    expect(completedTasks[0].id).toBe(2)
    expect(completedTasks[1].id).toBe(4)
})

test('get only uncompleted tasks', () => {
    const tasks = [
        {id: 1, title: 'Bread', isDone: false},
        {id: 2, title: 'Milk', isDone: true},
        {id: 3, title: 'Salt', isDone: false},
        {id: 4, title: 'Sugar', isDone: true}
    ]
    const uncompletedTasks = tasks.filter( task => !task.isDone)  // task.isDone === false
    expect(uncompletedTasks.length).toBe(2)
    expect(uncompletedTasks[0].id).toBe(1)
    expect(uncompletedTasks[1].id).toBe(3)
})

