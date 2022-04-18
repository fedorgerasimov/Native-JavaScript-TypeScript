import {
    addNewBooksToUser, addNewCompany, CompanyType,
    makeHairstyle,
    moveUser,
    moveUserToOtherHouse, removeBook, updateBook, updateCompanyTitle1,
    upgradeUserLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptopType, WithCompaniesType
} from "./10";


test('reference type test', () => {
    const user: UserType = {

        name: 'Jameson',
        hair: 40,
        address: {
            city: 'Minsk'
        }
    }
    const awesomeUser = makeHairstyle(user, 2)
    user.address.city = ' Moscow'

    expect(awesomeUser.hair).toBe(20)
    expect(user.hair).toBe(40)
})


//меняем только вложенный объект
test('change address', () => {
    const user: UserWithLaptopType = {

        name: 'Jameson',
        hair: 40,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            model: 'Asus Rog'
        }
    }
    const movedUser = moveUser(user, 'Moscow')

    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.city).toBe('Moscow')


})

test('upgrade laptop to Lenovo', () => {
    const user: UserWithLaptopType = {

        name: 'Jameson',
        hair: 40,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            model: 'Asus Rog'
        }
    }
    const upgradeLaptop = upgradeUserLaptop(user, 'Lenovo')

    expect(user).not.toBe(upgradeLaptop)
    expect(user.laptop).not.toBe(upgradeLaptop.laptop)
    expect(upgradeLaptop.laptop.model).toBe('Lenovo')
    expect(user.laptop.model).toBe('Asus Rog')
})


                            /// ARRAY ///

test('upgrade laptop to Lenovo', () => {
    const user: UserWithLaptopType & UserWithBooksType = {

        name: 'Jameson',
        hair: 40,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            model: 'Asus Rog'
        },
        books: ['HTML', 'CSS', 'REACT', 'JS']
    }
    const userCopy = moveUserToOtherHouse(user, 99)

    expect(user).not.toBe(userCopy)
    expect(user.books).toBe(userCopy.books)
    expect(user.laptop.model).toBe(userCopy.laptop.model)
    expect(user.address.house).not.toBe(userCopy.address.house)
    expect(userCopy.address.house).toBe(99)
})

test('add new books to user', () => {
    let user: UserWithLaptopType & UserWithBooksType = {

        name: 'Jameson',
        hair: 40,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            model: 'Asus Rog'
        },
        books: ['HTML', 'CSS', 'REACT', 'JS']
    }
    let userCopy = addNewBooksToUser(user, 'Angular')

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[4]).toBe('Angular')
    expect(userCopy.books.length).toBe(5)
})

test('update JS to TS', () => {
    let user: UserWithLaptopType & UserWithBooksType = {

        name: 'Jameson',
        hair: 40,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            model: 'Asus Rog'
        },
        books: ['HTML', 'CSS', 'REACT', 'JS']
    }
    let userCopy = updateBook(user, 'JS', 'TS')

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[3]).toBe('TS')
    expect(userCopy.books.length).toBe(4)
})

test('remove js', () => {
    let user: UserWithLaptopType & UserWithBooksType = {

        name: 'Jameson',
        hair: 40,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            model: 'Asus Rog'
        },
        books: ['HTML', 'CSS','JS', 'REACT' ]
    }
    let userCopy = removeBook(user, 'JS')

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[2]).toBe('REACT')
    expect(userCopy.books.length).toBe(3)
})

test('remove js', () => {
    let user: UserWithLaptopType & WithCompaniesType = {

        name: 'Jameson',
        hair: 40,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            model: 'Asus Rog'
        },
        companies: [{id: 1, title: 'Google'}, {id:2, title: 'Yandex'}]
    }

    let userCopy = addNewCompany(user, 1, 'PandaMan')
    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.companies).not.toBe(userCopy.companies)
    expect(userCopy.companies[0].title).toBe('PandaMan')

})


test('add company', () => {
    let user: UserWithLaptopType & WithCompaniesType = {

        name: 'Jameson',
        hair: 40,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            model: 'Asus Rog'
        },
        companies: [{id: 1, title: 'Google'}, {id:2, title: 'Yandex'}]
    }

    let userCopy = addNewCompany(user, 1, 'PandaMan')
    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.companies).not.toBe(userCopy.companies)
    expect(userCopy.companies[0].title).toBe('PandaMan')

})

//ассоциативный массив
test('update company title', () => {

    let companies = {
        'Jameson' : [{id: 1, title: 'Google'}, {id: 2, title: 'Yandex'}],
        'Marley' : [{id: 2, title: 'PandaMan'}]
    }

    let copy= updateCompanyTitle1(companies, 'Jameson', 1, 'Tesla')

    expect(copy[ 'Jameson']).not.toBe(companies['Jameson'])
    expect(copy['Marley']).toBe(companies['Marley'])
    expect(copy[ 'Jameson'][0].title).toBe('Tesla')
})