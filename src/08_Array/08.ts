export  const  usersObj = {
    '0' : 'Jameson',
    '1' : 'Washington',
    '2' : 'Johny',
    '3' : 'Polly',
}

type  UsersType = {
    [key: string] : {id: number, name: string}
}

export  const  users: UsersType = {    // Ассоциативный массив
    '100' : {id: 100, name: 'Jameson'},
    '50' : {id: 50, name: 'Washington'},
    '120' : {id: 120, name: 'Johny'},
    '2' : {id: 2, name: 'Polly'}
}
//users[1] поиск пользователя
let user = {id: 500, name: 'Bob'}
users[user.id] =user   // добавление
delete users[user.id] //  удаление
users[user.id].name = 'Billy'

export const  usersArray = [
    {id: 100, name: 'Jameson'},
    {id: 50, name: 'Washington'},
    {id: 120, name: 'Johny'},
    {id: 2, name: 'Polly'}
]
//userArray.push(user)
//let usersCopy = [...usersArray.filter(), user]   // добавление
//let usersArray = usersArray.filter(u => u.id !== user.id) // вначале фильтруем, а потом удаляем