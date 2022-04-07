export {}

type UserType = {
    name: string
    age: number
    address: {title: string}
}

function increaseAge(user: UserType) {
    user.age++
}

test('reference type test', () => {
    const user: UserType = {
        name: 'Jameson',
        age: 32,
        address: {
            title: 'Minsk'
        }
    }
    increaseAge(user)

    let Jane = user
    Jane.age = 1000

    expect(user.age).toBe(1000)
})

test('array reference type test', () => {
    let users = [
        {
            name: 'Jameson',
            age: 32
        },
        {
            name: 'Jane',
            age: 20
        }
    ]
    let admins = users
    admins.push({name: 'Sara', age: 25})

    expect(users[2].name).toEqual('Sara')
    expect(admins[2].name).toEqual('Sara')
})

test('value type test', () => {
    let usersCount = 100
    let adminsCount = usersCount
    adminsCount = adminsCount + 5

    expect(usersCount).toEqual(100)
    expect(adminsCount).toEqual(105)

})

test('reference type test', () => {

    const address = {
        title: "Minsk"
    }

    const user: UserType = {
        name: 'Jameson',
        age: 32,
        address: address
    }

    let user2: UserType = {
        name: 'Jane',
        age: 28,
        address: address
    }

    address.title = 'Minsk City'

    expect(user2.address.title).toBe('Minsk City')
    expect(user.address.title).toBe('Minsk City')
})

test('array reference type test', () => {

    const address = {
        title: "Minsk"
    }

    const user: UserType = {
        name: 'Jameson',
        age: 32,
        address: address
    }

    let user2: UserType = {
        name: 'Jane',
        age: 28,
        address: address
    }

    const users= [user, user2, { name: "Jane", age: 22, address:address}]

    const admins = [user, user2]

    admins[0].name = 'Jameson Smoke'

    expect(users[0].name).toBe('Jameson Smoke')
    expect(user.name).toBe('Jameson Smoke')
})

test('sort array test', () => {

    const letters = ['m', 'd', 'a', 'z', 'w']
    letters.sort()

    expect(letters).toEqual(['a', 'd','m', 'w', 'z'] )
})

