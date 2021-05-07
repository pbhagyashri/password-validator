const {
    findPasswordError,
    doesPasswordMatch,
    validatePassword,
} = require('./helper.js')

test('test that password is valid', () => {
    expect(findPasswordError('we12@#DG')).toBe(false)
})

test('tests password length', () => {
    expect(findPasswordError('we12@')).toBe('Must be 6 characters long')
})

test('tests password contains a number when user enters atleast 6 small letters', () => {
    expect(findPasswordError('weQWa@')).toBe('Must contain at-least 1 number')
})

test('tests password contains a special character when user enters small letter and numbers', () => {
    expect(findPasswordError('weQWw1')).toBe(
        'Must contain a special character(#$%&!..)'
    )
})

test('tests password contains a capital letter when when user enters small letter, special character, and numbers', () => {
    expect(findPasswordError('we@#w1')).toBe(
        'Must contain at-least 1 capital letter'
    )
})

test('tests password contains capital letter', () => {
    expect(findPasswordError('we12@wer')).toBe(
        'Must contain at-least 1 capital letter'
    )
})

test('tests password contains a number', () => {
    expect(findPasswordError('weQWa@')).toBe('Must contain at-least 1 number')
})

test('tests password contains a number', () => {
    expect(findPasswordError('weQWaq')).toBe('Must contain at-least 1 number')
})

test('tests password contains a special character', () => {
    expect(findPasswordError('weQWa12')).toBe(
        'Must contain a special character(#$%&!..)'
    )
})

test('tests that password match when matching password are provided', () => {
    expect(doesPasswordMatch('Qfdg123@#', 'Qfdg123@#')).toBe(true)
})

test('tests that password match when mismatched password are provided', () => {
    expect(doesPasswordMatch('!@sdf342AGD', '!@sdf342Aal')).toBe(
        'Password must match'
    )
})

test('test if password is valid', () => {
    expect(validatePassword('SDSdsf!@23456')).toBe(true)
})

test('test if password is invalid', () => {
    expect(validatePassword('SDSds3456')).toBe(false)
})
