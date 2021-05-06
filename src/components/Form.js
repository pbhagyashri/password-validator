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
    const [confPasswordErrors, setConfPasswordErrors] = useState('')

    const handleUserPasswordChange = (e) => {
        setUserPassword(e.target.value)
    }

    const handleConfirmationPasswordChange = (e) => {
        setuserConfirmationPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setPasswordErrors(findPasswordError(userPassword))
        setConfPasswordErrors(
            doesPasswordMatch(userConfirmationPassword, userPassword)
        )
    }

    useEffect(() => {
        console.log(`passwordErrors`, passwordErrors.length)
    })

    return (
        <>
            <h1>Please Login</h1>
            <form onSubmit={(e) => handleSubmit(e)} className="login-form">
                <div className="login-form__input-cont">
                    <input
                        className={
                            passwordErrors && 'login-form__input-with-errors'
                        }
                        type="text"
                        value={userPassword}
                        onChange={(e) => handleUserPasswordChange(e)}
                        placeholder="please enter your password"
                        required
                    />
                    <span className="error-message">{passwordErrors}</span>
                </div>
                <div className="login-form__input-cont">
                    <input
                        className={
                            passwordErrors && 'login-form__input-with-errors'
                        }
                        type="text"
                        value={userConfirmationPassword}
                        onChange={(e) => handleConfirmationPasswordChange(e)}
                        placeholder="please enter confirmation password"
                        required
                    />
                    <span className="error-message">{confPasswordErrors}</span>
                </div>
                <button className="login-form__btn">Submit</button>
            </form>
        </>
    )
}

export default Form
