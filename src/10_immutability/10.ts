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
export type UserWithBooksType = UserType & {
    books: Array<string>
}

export type CompanyType = {id: number, title:string}
export type WithCompaniesType = {
    companies: Array<CompanyType>
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

/// ARRAY ///

export function moveUserToOtherHouse(user: UserWithLaptopType & UserWithBooksType, house: number) {
    return {
        ...user, address: {...user.address, house: house}
    }
}

export function addNewBooksToUser(user: UserWithLaptopType & UserWithBooksType, newBook: string) {
    return {
        ...user, books: [...user.books, newBook]
    }
}

export function updateBook(user: UserWithLaptopType & UserWithBooksType, oldBook: string, newBook: string) {
    return {
        ...user, books: user.books.map(el => el === oldBook ? newBook : el)
    }
}

export function removeBook(user: UserWithLaptopType & UserWithBooksType, bookForDelete: string) {
    return {
        ...user, books: user.books.filter(el => el !== bookForDelete)
    }
}

export function addNewCompany(user: WithCompaniesType & UserWithLaptopType, newId: number, newTitle: string) {
    return {
        ...user, companies: user.companies.map(el => el.id === newId ? {...el, title: newTitle} : el)
    }
}

export const updateCompanyTitle1 = (companies: { [key: string]: Array<CompanyType>},
                                   userName: string,
                                   companyId: number,
                                   newTitle: string) => {

    return {
        ...companies, [userName] : companies[userName].map(el => el.id === companyId
        ? {...el, title: newTitle} : el)
    }
    //let companyCopy = {...companies}
    //companyCopy[userName] = companyCopy[userName].map(el => el.id === companyId
    //    ? {...el, title: newTitle} : el)
    //return companyCopy
}


