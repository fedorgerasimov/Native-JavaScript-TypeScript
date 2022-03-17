export type StreetType = {
    title: string
}
export type AddressType = {
    number: number
    street: StreetType
}
export type HouseType = {
    buildedAt: number
    repaired: boolean
    address: AddressType

}
export type CityType = {
    title: string
    houses : Array<HouseType>
    governmentBuildings: Array<GovernmentBuildingsType>
    citizensNumber: number
}

export type GovernmentBuildingsType = {
    type: string
    budget: number
    staffCount: number
    address: AddressGovernmentType
}

export type AddressGovernmentType = {
    street: StreetGovernmenType
}

export type StreetGovernmenType = {
    title: string
}
