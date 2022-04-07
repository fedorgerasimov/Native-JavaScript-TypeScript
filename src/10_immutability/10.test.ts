import {makeHairstyle, moveUser, upgradeUserLaptop, UserType, UserWithLaptopType} from "./10";


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


