import React, {useState} from "react";

export type ManType07 = {
    name: string
    age: number
    lessons: Array<{title: string, name?:string}>
    address: { street : { title : string}}
}

type PropsType = {
    title: string
    man: ManType07
    food?: Array<string>
    car: {model:string}
}

function useMessage (m:string) {
    return [m, function (){}]
}

//Деструктурирующее присваивание
//export const ManComponent: React.FC<PropsType> =({title, man, ...props }) =>
export const ManComponent: React.FC<PropsType> =(props) => {  // Деструктурирующее присваивание
    // const {title, man, ...restProps} = props
    const{title, man: {name} } = props
     const [message, setMessage] = useState<string>('hello')  // = useMessage('hello')

    return <div>
        <h1>{title}</h1>
        <hr/>
        <div>
            {name}
            <div>{props.man.age}</div>
            <div>{props.car.model}</div>

        </div>
    </div>
}