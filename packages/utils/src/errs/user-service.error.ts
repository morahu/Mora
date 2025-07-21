export class ErrorUserAlreadyExist extends Error {
    constructor(message: string = "User already exist") {
        super(message);
        this.name = "ErrorUserAlreadyExists";
    }
}

export class ErrorUserNotExit extends Error {
    constructor(message: string = "User does not exist") {
        super(message);
        this.name = "ErrorUserNotExists";
    }
}

export class ErrorEmailAlreadyUsed extends Error {
    constructor(message: string = "Email is already used") {
        super(message);
        this.name = "ErrorEmailAlreadyUsed";
    }
}

export class ErrorUserNotFound extends Error {
    constructor(message: string = "User not found") {
        super(message);
        this.name = "ErrorUserNotFound";
    }
}