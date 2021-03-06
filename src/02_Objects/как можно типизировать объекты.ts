export type LocalCityType = {
    title : string
    countryTitle : string
}
export type AddressType = {
    streetTitle: string
    city: LocalCityType
}
export type StudentType = {
    name:string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechnologiesType>
}
export type TechnologiesType = {
    id: number
    title: string
}

export const student :StudentType = {
    name: 'Jameson',
    age: 30,
    isActive: false,
    address: {
        streetTitle: 'Surganova',
        city: {
            title: 'Minsk',
            countryTitle: 'Belarus'
        }
    },
    technologies: [
        {
            id: 1,
            title: 'HTML'
        },
        {
            id: 2,
            title: 'CSS'
        },
        {
            id : 3,
            title: 'React'
        }
    ]
}
