import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import {
    validatePassword,
    findPasswordError,
    doesPasswordMatch,
} from '../utils/helper'

export default function Form() {
    const history = useHistory()
    const [userPassword, setUserPassword] = useState('')
    const [userConfirmationPassword, setuserConfirmationPassword] = useState('')
    const [passwordErrors, setPasswordErrors] = useState('')
    const [confPasswordErrors, setConfPasswordErrors] = useState('')
    const [showSuccessMessage, setShowSuccessMessage] = useState(false)

    const handleUserPasswordChange = (e) => {
        setUserPassword(e.target.value)
    }

    const handleConfirmationPasswordChange = (e) => {
        setuserConfirmationPassword(e.target.value)
    }

    useEffect(() => {
        if (showSuccessMessage) {
            history.push('/success')
        }
    }, [showSuccessMessage])

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!validatePassword(userPassword)) {
            setPasswordErrors(findPasswordError(userPassword))
            setShowSuccessMessage(false)
        } else {
            if (
                doesPasswordMatch(userConfirmationPassword, userPassword) ==
                'Password must match'
            ) {
                setShowSuccessMessage(false)
                setConfPasswordErrors(
                    doesPasswordMatch(userConfirmationPassword, userPassword)
                )
            } else {
                setShowSuccessMessage(true)
            }
        }
    }

    return (
        <>
            <div>
                <h1>Please Login</h1>
                <form onSubmit={(e) => handleSubmit(e)} className="login-form">
                    <div className="login-form__input-cont">
                        <input
                            className={
                                passwordErrors &&
                                'login-form__input-with-errors'
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
                                passwordErrors &&
                                'login-form__input-with-errors'
                            }
                            type="text"
                            value={userConfirmationPassword}
                            onChange={(e) =>
                                handleConfirmationPasswordChange(e)
                            }
                            placeholder="please enter confirmation password"
                        />
                        <span className="error-message">
                            {confPasswordErrors}
                        </span>
                    </div>
                    <button className="login-form__btn">Submit</button>
                </form>
            </div>
        </>
    )
}
