import {CityType, GovernmentBuildingsType} from "../02_Objects/02";

export const demolishHousesOnTheStreet = (city: CityType, street: string) => {
    city.houses = city.houses.filter(house => house.address.street.title !== street)
}  // фильтруем все здания которые находятся на улице не равной улице в тесте

export const getBuildingWithStaffCountGreaterThen =
    (buildings: Array<GovernmentBuildingsType>, number: number) => {
        return buildings.filter( build => build.staffCount > number)
}