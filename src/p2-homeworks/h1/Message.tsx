import React from 'react'
import staly from './Message.module.css'

interface IProps {
    avatar: string,
    name: string,
    message: string,
    time: string
}

function Message(props: IProps) {
    return (
        <div>
            <div className={staly.message}>
                <img src={props.avatar} alt="avatar" />
                <div className={staly.d33}>
                    <div>
                        <div>{props.name}</div>
                        <div>{props.message}</div>
                    </div>
                    <div className={staly.time}>{props.time}</div>
                </div>
            </div>
        </div>
    )
}

export default Message
