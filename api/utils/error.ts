class CustomError extends Error {
    statusCode: number;
    message: string;

    constructor() {
        super();
        this.statusCode = 500;
        this.message = 'Internal Server Error';
    }
}

const errorHandler = (statusCode, message) => {
    const error = new CustomError();
    error.statusCode = statusCode;
    error.message = message;
    return error;
}

export default errorHandler;
