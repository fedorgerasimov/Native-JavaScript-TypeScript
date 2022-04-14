import {ActionType, div, multiple, salaryReducer, StateType, sub, sum} from "./task07";

test("sum", ()=> {
    //1. test data
    const salary: number = 800
    const n: number = 200
    //2. executing test
    const result = sum (salary, n)
    expect(result).toBe(1000)
})

test("sub", ()=> {
    expect(sub(1200, 200)).toBe(1000)
})

test("div", ()=> {
    const salary: number = 800
    const n: number = 200
    const result = div (salary, n)
    expect(div(1000, 5)).toBe(200)
    expect(div(500, 1)).toBe(500)
    expect(result.toString().length).toBe(1)
})


test("multiple", ()=> {
    expect(multiple(400, 2)/100).toBe(8)
    expect(multiple(200, 2).toString().length).toBe(3)
})

test('case test SUM of salaryReducer', ()=>{
    const salary: StateType = 800
    const action: ActionType = {
        type: "SUM",
        n: 200
    }
    const testAction:ActionType = {
        type: "TEST",
        n: 200
    }
    const result = salaryReducer(salary, action)
    expect(result).toBe(1000)
    expect(salaryReducer(salary, testAction)).toBe(800)
})

test('case test DIV of salaryReducer', ()=>{
    const salary: StateType = 800
    const action: ActionType = {
        type: "DIV",
        n: 200
    }

    const result = salaryReducer(salary, action)
    expect(result).toBe(4)

})
