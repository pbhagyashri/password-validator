import React, { useState, useEffect } from 'react'
import {
    validatePassword,
    findPasswordError,
    doesPasswordMatch,
} from '../utils/helper'
import { debounce } from 'throttle-debounce'

function Form() {
    const [userPassword, setUserPassword] = useState('')
    const [userConfirmationPassword, setuserConfirmationPassword] = useState('')
    const [passwordErrors, setPasswordErrors] = useState('')

    const handleUserPasswordChange = (e) => {
        setUserPassword(e.target.value)
        // debounce(700, false, () => {
        //     setPasswordErrors(findPasswordError(userPassword))
        // })()
    }

    const handleConfirmationPasswordChange = (e) => {
        setuserConfirmationPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setPasswordErrors(findPasswordError(userPassword))
        //console.log(doesPasswordMatch(userConfirmationPassword, userPassword))
        // console.log('valid password')
    }

    return (
        <div className="align-left">
            <h1>Please Login</h1>
            <p>{passwordErrors}</p>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input
                    type="text"
                    value={userPassword}
                    onChange={(e) => handleUserPasswordChange(e)}
                    placeholder="please enter your password"
                    required
                />
                <input
                    type="text"
                    value={userConfirmationPassword}
                    onChange={(e) => handleConfirmationPasswordChange(e)}
                    placeholder="please enter confirmation password"
                />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form
