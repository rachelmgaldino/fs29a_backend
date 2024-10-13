// const CryptoJS = require('crypto-js')
// const crypto = require("crypto");
const bcrypt = require("bcrypt");

const Helpers = {
  // generateHashPassword: (password) => {
  //     const value = CryptoJS.MD5(password).toString()
  //     return value;
  // },
  // formatDateToBr: (dateEn) => {
  //     // Converter Data
  //     return dateEn;
  // }

  generateHashPassword: async (password) => {
    const saltRounds = 10; // Number of salt rounds (10 is a common, secure choice)
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  },
  comparePasswords: async (password, hashedPassword) => {
    const match = await bcrypt.compare(password, hashedPassword);
    return match;
  },
};

module.exports = Helpers;

/* Explanation:
1. bcrypt.hash(password, saltRounds):
Generates a salted hash of the password. The saltRounds parameter controls how many times the hashing algorithm runs (higher values increase security but also processing time).
2. bcrypt.compare(password, hashedPassword):
This method securely compares the plain text password provided by the user with the hashed password stored in the database.
*/
