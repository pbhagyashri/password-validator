import React, { useState, useEffect } from 'react'
import { debounce } from 'throttle-debounce'

import { validateString, debounceFunc } from '../utils/helper'

function Form() {
    const [userPassword, setUserPassword] = useState('')
    const [userConfirmationPassword, setuserConfirmationPassword] = useState('')

    const handleUserPasswordChange = (e) => {
        setUserPassword(e.target.value)
    }

    const handleConfirmationPasswordChange = (e) => {
        setuserConfirmationPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    useEffect(() => {
        debounceFunc(userPassword)
    }, [userPassword])

    useEffect(() => {
        debounceFunc(userConfirmationPassword)
    }, [userConfirmationPassword])

    return (
        <div className="align-left">
            <h1>Please Login</h1>
            <form>
                <input
                    type="text"
                    value={userPassword}
                    onChange={(e) => handleUserPasswordChange(e)}
                />
                <input
                    type="text"
                    value={userConfirmationPassword}
                    onChange={(e) => handleConfirmationPasswordChange(e)}
                />
                <button onClick={() => handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default Form
