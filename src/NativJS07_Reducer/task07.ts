export const sum = (salary: number, n: number) => salary + n
export const sub = (salary: number, n: number) => salary - n
export const div = (salary: number, n: number) => salary/n
export const multiple = (salary: number, n: number) => salary*n

export type ActionType ={
    type : 'SUM' | 'TEST'| "SUB" | "DIV" | "MULTIPLY"
    n: number
}

export type StateType = number
//action - это объект(обязателен Type), всегда предполагает какой-либо тип
//в параметры передаём стейт и объект
//Reducer это всегда чистая функция:
// 1. не видоизменяет данные которые приходят
// 2. всегда при одних и тех же данных даёт один и тот же предсказуемый результат
// 3. не зависит от внешних переменных, чистая функция работает только с параметрами функции
export const salaryReducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case "SUM":
            return state + action.n
        case "SUB":
            return state - action.n
        case "DIV":
            return state / action.n
        case "MULTIPLY":
            return state * action.n
        default:
            return state
    }
}




