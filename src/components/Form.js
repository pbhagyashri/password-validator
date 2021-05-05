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
        debugger
        debounceFunc(userPassword)
    }

    return (
        <div className="align-left">
            <h1>Please Login</h1>
            <form>
                <input
                    type="text"
                    value={userPassword}
                    onChange={(e) => handleUserPasswordChange(e)}
                    placeholder="please enter your password"
                />
                <input
                    type="text"
                    value={userConfirmationPassword}
                    onChange={(e) => handleConfirmationPasswordChange(e)}
                    placeholder="please enter confirmation password"
                />
                <button onClick={(e) => handleSubmit(e)}>Submit</button>
            </form>
        </div>
    )
}

export default Form
