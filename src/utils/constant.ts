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
    STATUS_CODE: {
      OK: number;
      CREATED: number;
      UPDATED: number;
      BAD_REQUEST: number;
      UNAUTHORIZED: number;
      FORBIDDEN: number;
      NOT_FOUND: number;
      SERVER_ERROR: number;
    }
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
  STATUS_CODE: {
    OK: 200,
    CREATED: 201,
    UPDATED: 204,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    SERVER_ERROR: 500,
  }
};

export default CONSTANTS;
