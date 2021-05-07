const GeneralError = require("../../modules/GeneralError");

class UserError extends GeneralError {
  constructor(code, message) {
    super(code, "UserError", message);
  }

  static UserNotFound() {
    return new UserError(56001, "User not found");
  }

  static InvalidPassword() {
    return new UserError(56002, "Invalid password");
  }

  static UserAlreadyExists() {
    return new UserError(56003, "User already exists");
  }

  static UserValidationFailed() {
    return new UserError(56004, "User validation failed");
  }
}

module.exports = UserError;
