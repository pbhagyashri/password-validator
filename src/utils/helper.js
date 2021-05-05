import { debounce } from 'throttle-debounce'

export const debounceFunc = debounce(1000, (string) => {
    validateString(string)
})

export const validateString = (password) => {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/
    const capital = /^(?=.*[A-Z])/
    const smallLetter = /[a-z]/
    const specialChar = /(?=.*[@$!%*?&])/
    const length = /[A-Za-z\d@$!%*?&]{6,}$/

    const isValidPass = false

    if (re.test(password)) {
        console.log('correct password')
    } else if (!capital.test(password)) {
        console.log('not capital')
    } else if (!smallLetter) {
        console.log('not small')
    } else if (!specialChar) {
        console.log('not specialChar')
    } else if (!length) {
        console.log('not long enough')
    }

    // return re.test(password)
}
// regex.test('sa@2Qd')

// const str = 'sa@2Qdas'

// const regex = new RegExp(
//     "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
// )

// console.log(regex.test(str))

// console.log(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test('sa@2Qdew'));
