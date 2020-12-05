import {UnknownError} from './UnknownError';

export class CreateUserError extends UnknownError {
    constructor(message) {
        super(message)
        this.name = 'CreateUserError'
        this.message = message
    }
}