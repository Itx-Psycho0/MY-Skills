export interface AppError extends Error {
    statusCode: number;
}

export class InternalServerError implements AppError {
    statusCode: number;
    message: string;
    name: string;
    constructor(message: string) {
        this.message = message;
        this.statusCode = 500;
        this.name = 'InternalServerError';
    }
}