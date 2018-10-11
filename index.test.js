/* eslint-env jest */
const { numberToArabic } = require('./index')
describe('numerToArabic', () => {
    test('should convert digit 982 to arabic digit', () => {
        expect(numberToArabic(982)).toEqual('٩٨٢')
    })

    test('should convert digit 564 to arabic digit', () => {
        expect(numberToArabic(564)).toEqual('٥٦٤')
    })

    test('should convert digit 108 to arabic digit', () => {
        expect(numberToArabic(108)).toEqual('١٠٨')
    })
})
