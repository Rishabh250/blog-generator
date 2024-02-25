interface Constants {
    RESPONSE_ERROR: {
      INTERNAL_SERVER_ERROR: string;
      VALIDATION_ERROR: string;
      SERVER_ERROR: string;
      NOT_AUTHORIZED: string;
      NOT_FOUND: string;
      FORBIDDEN: string;
    };
    ERROR: string;
  }

const CONSTANTS: Constants = {
  RESPONSE_ERROR: {
    INTERNAL_SERVER_ERROR: 'Internal server error',
    VALIDATION_ERROR: 'Validation error',
    SERVER_ERROR: 'Server error',
    NOT_AUTHORIZED: 'Not authorized',
    NOT_FOUND: 'Not found',
    FORBIDDEN: 'Forbidden',
  },
  ERROR: 'error',
};

export default CONSTANTS;
