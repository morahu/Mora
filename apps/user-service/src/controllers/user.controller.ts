import { UserService } from "./user.service";

export class UserController {
    private userService: UserService;

    constructor(userService: UserService) {
        this.userService = userService;
    }

    public async isUserExists() {
        // Logic to check if user exists
    }
    
    public async isEmailUsed() {
        // Logic to check if email is used
    }

    public async getUserById() {
        // Logic to get user by ID
    }

    public async getUserByIds() {
        // Logic to get users by IDs
    }

    public async getUserByName() {
        // Logic to get user by name
    }

    public async getUserByEmail() {
        // Logic to get user by email
    }

    public async createUser() {
        // Logic to create a new user
    }

    public async updateUser() {
        // Logic to update user information
    }

    public async deleteUser() {
        // Logic to delete a user
    }
}

