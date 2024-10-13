// const CryptoJS = require('crypto-js')
const crypto = require("crypto");

const Helpers = {
  // generateHashPassword: (password) => {
  //     const value = CryptoJS.MD5(password).toString()
  //     return value;
  // },
  // formatDateToBr: (dateEn) => {
  //     // Converter Data
  //     return dateEn;
  // }

  generateHashPassword: (password) => {
    const value = crypto.createHash("md5").update(password).digest("hex");
    return value;
  },
};

module.exports = Helpers;

/* Explanation:
1. crypto.createHash('md5'):
This initializes a hash object using the MD5 algorithm.
2. .update(password):
Feeds the password string into the hash function.
3. .digest('hex'):
Converts the hash to a hexadecimal string, similar to how CryptoJS.MD5(password).toString() works in your original code. */
