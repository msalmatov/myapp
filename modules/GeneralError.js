class GeneralError extends Error {
  constructor(code, name, message) {
    super(message);
    this.name = name;
    this.text = message;

    this.code = code;
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, GeneralError);
    }
  }
}

module.exports = GeneralError;
