export class UnknownError extends Error {
    constructor(message) {
        super(message)
        this.name = 'UnknownError'
        this.message = message
    }

    toJSON() {
        return {
            error: {
                name: this.name,
                message: this.message,
                stack: this.stack
            }
        }
    }
}