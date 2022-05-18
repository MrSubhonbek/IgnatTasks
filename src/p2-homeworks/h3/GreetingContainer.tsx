import React, { MouseEventHandler, useState } from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({ users, addUserCallback }) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value) // need to fix
        setError("")
    }
    const addUser = () => {
        if (name.trim()) {
            alert(`Hello  ${name}!`) // need to fix
            addUserCallback(name);
            setName("")
        } else {
            setError("incorrectly added username!!!")
        }
    }

    const totalUsers = users.length // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
