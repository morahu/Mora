import { UserInsert, UserSelect, UserTable } from '../../../packages/schemas/src/user-service.schema';
import { asyncHandler } from '../../../packages/utils/src/asyncHandler';
import { postgresDb } from '../../../packages/schemas/src/drizzle';
import { eq } from 'drizzle-orm';
export class UserService {
    private readonly db = postgresDb;

    public async isUserExists(name: UserSelect['LowerName']): Promise<boolean> {
        const user = await this.db
            .select()
            .from(UserTable)
            .where(eq(UserTable.LowerName, name.toLowerCase()));

        return user.length > 0;
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