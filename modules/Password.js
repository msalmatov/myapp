const { hash, compare } = require("bcrypt");

class Password {
  static hash(password) {
    return hash(password, 10);
  }

  static verify(password, hashedPassword) {
    return compare(password, hashedPassword);
  }
}

module.exports = Password;
