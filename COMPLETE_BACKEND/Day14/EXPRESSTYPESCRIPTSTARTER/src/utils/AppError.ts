export interface AppError extends Error {
    statusCode: number;
}

export class InternalError implements AppError {
    statusCode: number;
    name: string;
    message: string;
    constructor(message: string) {
        this.statusCode = 500;
        this.message = message;
        this.name = "InternalError";
    }
}