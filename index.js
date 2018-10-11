const numberMappings = require('./numberMappings')

const numberToArabic = digit => digit.toString().split("").map(number => numberMappings[number]).join("")

exports.numberToArabic = numberToArabic
