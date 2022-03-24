import {GovernmentBuildingsType, HouseType} from "../02_Objects/02";

export type ManType = {
    name: string
    age: number
}

const people: ManType[] = [
    {name: 'Jameson Post', age: 25},
    {name: 'Jane Alabama', age: 35},
    {name: 'Marley Hampton', age: 20}
]

const stack = ['CSS', 'HTML', 'TypeScript', 'React']

const developer = people.map(man =>(
    { stack, // stack :['CSS', 'HTML', 'TypeScript', 'React']
        firstName: man.name.split(' ')[0],
        latsName: man.name.split(' ')[1]
    }
))

const messages = people.map(man => `Hello ${man.name.split(' ')[0]}. Good morning!`)
const messages1 = people.map( man => ({
    greeting:'Hello' + man.name
}))

export const getStreetTitlesOfGovernmentBuildings = (buildings: Array<GovernmentBuildingsType>) => {
    return buildings.map( el => el.address.street.title)
}

export const getStreetsTitleOgHouse = (houses: Array<HouseType>) => {
    return houses.map(el => el.address.street.title)

}

export const createMessages = (houses: Array<HouseType>) => {
    return houses.map( el => `Hello guys from ${el.address.street.title}`)
}