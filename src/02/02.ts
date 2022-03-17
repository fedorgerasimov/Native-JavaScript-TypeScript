export type CityType = {
    title: string
    houses : Array<HousesType>
    governmentBuildings: Array<string>
    citizensNumber: number
}

type StreetType = {
    title: string
}

type AddressType = {
    number: string
    street: StreetType
}

type HousesType = {
    buildedAt: number
    repaired: boolean
    address: AddressType

}

