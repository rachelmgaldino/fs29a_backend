const CryptoJS = require('crypto-js')

const Helpers = {
    generateHashPassword: (password) => {
        const value = CryptoJS.MD5(password).toString()
        return value;
    },
    formatDateToBr: (dateEn) => {
        // Converter Data
        return dateEn;
    }
}

module.exports = Helpers;