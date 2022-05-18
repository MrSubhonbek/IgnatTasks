import React from 'react'
import { IAffair } from './HW2'

type AffairPropsType = {
    // key не нужно типизировать
    affair: IAffair // need to fix any
    deleteAffairCallback: ( _id:number)=>void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = (id:number) => {
        props.deleteAffairCallback(id)
    }// need to fix

    return (
        <div>
            {props.affair.name}
            <span> </span>
            {props.affair.priority}
            <button onClick={()=>deleteCallback(props.affair._id)}>X</button>
        </div>
    )
}

export default Affair
