import {student, StudentType} from "../02_Objects/как можно типизировать объекты";
import {CityType, GovernmentBuildingsType, HouseType} from "../02_Objects/02";

export const AddSkill =(student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export const addMoneyToBudget = (building: GovernmentBuildingsType, budget: number) => {
    building.budget += budget
}

export const repairHouse = (house: HouseType) => {
    house.repaired = true
}

export const toFireStaff = (building: GovernmentBuildingsType, staffCount: number) => {
    building.staffCount -=staffCount
}

export const toHireStaff = (building: GovernmentBuildingsType, staffCount: number) => {
    building.staffCount+= staffCount
}

export const createMessage = (props: CityType) => {    // поменял city на props
  /* return 'Hello ' + props.title + ' citizens! All ' + props.citizensNumber*/
    return `Hello ${props.title} citizens! All ${props.citizensNumber}`
}