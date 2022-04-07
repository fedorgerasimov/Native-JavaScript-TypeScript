export {}
type  UsersType = {
    [key: string] : {id: number, name: string}
}

let  users: UsersType

beforeEach(()=> {
     users = {    // Ассоциативный массив
        '101' : {id: 100, name: 'Jameson'},
        '50' : {id: 50, name: 'Washington'},
        '120' : {id: 120, name: 'Johny'},
        '2' : {id: 2, name: 'Polly'}
    }

})

test("should update corresponding user", () => {
    users['2'].name = 'Polly from the west'

    expect(users['2'].name).toBe('Polly from the west')
})