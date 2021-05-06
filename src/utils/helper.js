export const validatePassword = (password) => {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[[{}@$\]!%|#^*?*&,_\-.:;+=><])[A-Za-z\d\\[{}@$\]!%|#^*?*&,_\-.:;+=><]{6,}$/
    return re.test(password)
}

export const findPasswordError = (password) => {
    const capital = /^(?=.*[A-Z])/
    const smallLetter = /^(?=.*[a-z])/
    const specialChar = /(?=.*[[{}@$\]!%|#^*?*&,_\-.:;+=><])/
    const numbers = /(?=.*\d)/

    let errors = ''
    if (!smallLetter.test(password)) {
        errors = 'Must contain at-least 1 small letter'
    }
    if (!capital.test(password)) {
        errors = 'Must contain at-least 1 capital letter'
    }
    if (!specialChar.test(password)) {
        errors = 'Must contain a special character(#$%&!..)'
    }
    if (!numbers.test(password)) {
        errors = 'Must contain at-least 1 number'
    }
    if (password.length < 6) {
        errors = 'Must be 6 characters long'
    }

    return errors || false
}

export const doesPasswordMatch = (userInput, originalPassword) => {
    return userInput.trim() === originalPassword || 'Password must match'
}
