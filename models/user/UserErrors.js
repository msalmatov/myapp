const GeneralErrors = require("../../modules/GeneralErrors");

class UserErrors extends GeneralErrors {
  static UserNotFound(data = null) {
    return new GeneralErrors(56001, "User not found", data);
  }

  static InvalidPassword(data = null) {
    return new GeneralErrors(56002, "Invalid password", data);
  }

  static UserAlreadyExists(data = null) {
    return new GeneralErrors(56003, "User already exists", data);
  }

  static UserValidationFailed(data = null) {
    return new GeneralErrors(56004, "User validation failed", data);
  }
}

module.exports = UserErrors;
