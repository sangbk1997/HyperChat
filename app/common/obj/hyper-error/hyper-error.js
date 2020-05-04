class HyperError extends Error {
    constructor(code = 'GENERIC', status = 500, ...params) {
        super(...params)

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, HyperError)
        }

        this.code = code
        this.status = status
    }
}

module.exports = HyperError
