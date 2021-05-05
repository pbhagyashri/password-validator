import { debounce } from 'throttle-debounce'

export const debounceFunc = debounce(1000, (string) => {
    validateString(string)
})

export const validateString = (password) => {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[[{}@$\]!%|#^*?*&,_\-.:;+=><])[A-Za-z\d\\[{}@$\]!%|#^*?*&,_\-.:;+=><]{6,}$/
    const capital = /^(?=.*[A-Z])/
    const smallLetter = /^(?=.*[a-z])/
    const specialChar = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[[{}@$\]!%|#^*?*&,_\-.:;+=><])/
    const length = /(?=.*[[{}@$\]!%|#^*?*&,_\-.:;+=><])/
    const numbers = /(?=.*\d)/

    let errors = ''

    if (re.test(password)) {
        return true
        console.log('valid password')
    } else {
        if (!capital.test(password)) {
            errors = 'must contain atleast 1 capital letter'
        }
        if (!smallLetter.test(password)) {
            errors = 'must contain atleast 1 small letter'
        }
        if (!specialChar.test(password)) {
            errors = 'must contain atleast 1 special char'
        }
        if (!numbers.test(password)) {
            errors = 'must contain atleast 1 number'
        }
    }

    console.log(errors)
    return errors
    // if (!capital.test(password)) {
    //     console.log('must contain atleast 1 capital letter')
    // } else if (!smallLetter.test(password)) {
    //     console.log('must contain atleast 1 small letter')
    // } else if (!specialChar) {
    //     console.log('must contain atleast 1 special char')
    // } else if (
    //     capital.test(password) &&
    //     smallLetter.test(password) &&
    //     !specialChar
    // ) {
    //     console.log('must contain atleast 1 special char!!')
    // } else {
    //     console.log('did not match anything')
    // }
    // const isValidPass = false

    // if (re.test(password)) {
    //     isValidPass = true
    // } else if (!capital.test(password)) {
    //     console.log('not capital')
    // } else if (!smallLetter) {
    //     console.log('not small')
    // } else if (!specialChar) {
    //     console.log('not specialChar')
    // } else if (!length) {
    //     console.log('not long enough')
    // }
}

export const doesContainCapLetter = (password) => {
    const capital = /^(?=.*[A-Z])/
    return capital.test(password)
}

export const doesContainSpecChar = (password) => {
    const specialChar = /(?=.*[@$!%*?&])/
    return specialChar.test(password)
}
