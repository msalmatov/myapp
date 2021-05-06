class GeneralErrors extends Error {
  constructor(code, message, data = null, token = null) {
    super(message);
    this.code = code;
    this.data = data;
    this.token = token;
    this.message = { code, message, data, token };
  }

  static NotEnoughPermission(data = null) {
    return new GeneralErrors(49000, "Not enough permission", data);
  }

  static NotAuthenticated(data = null) {
    return new GeneralErrors(48000, "Not authenticated", data);
  }

  static UnknownError(data = null) {
    return new GeneralErrors(55000, "Unknown error", data);
  }

  static ValidationError(data = null) {
    return new GeneralErrors(55001, "Validation error", data);
  }

  static InvalidUploadType(data = null) {
    return new GeneralErrors(55002, "Invalid upload type", data);
  }

  static Success(data = null, token) {
    return new GeneralErrors(0, "Success", data, token);
  }
}

module.exports = GeneralErrors;
