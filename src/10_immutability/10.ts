export type UserType = {
    name: string
    hair: number
    address: { city: string, house?: number }
}

export type LaptopType = {
    model: string
}

export type  UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export function makeHairstyle(u: UserType, power: number) {
    const copy = {
        ...u,
        hair: u.hair / power
    }
    // copy.hair = u.hair / power
    return copy
}

//меняем только вложенный объект
export function moveUser(user: UserWithLaptopType, city: string) {
    /*   const copy = {
           ...user
       }
       copy.address = {...copy.address, city:city}
       return copy*/
    return {
        ...user, address: {...user.address, city: city}
    }
}

export function upgradeUserLaptop(user: UserWithLaptopType, model: string) {
    return {
        ...user, laptop: {...user.laptop, model: model}
    }
}

