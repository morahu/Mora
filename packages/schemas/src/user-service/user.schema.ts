import { 
    integer, 
    uuid, 
    text,
    timestamp,
    boolean,
    pgTable,
} from "drizzle-orm/pg-core"
import { Name, relations } from "drizzle-orm"

const UserTable = pgTable("users", {
    Id: uuid('id').defaultRandom().unique().notNull().primaryKey(),

    // User's name
    FullName : text('display_name').notNull(),
    LowerName: text('lower_name').notNull().unique(),
    DisplayName: text('display_name').notNull().unique(),

    // User's email
    Email: text('email').notNull().unique(),
    Password: text('password').notNull(),

    // User's profile information

    // User's profile picture
    AvatarUrl: text('avatar_url').notNull(),

    // User's creation and update timestamps
    CreatedAt: timestamp('created_at').defaultNow().notNull(),
    UpdatedAt: timestamp('updated_at').defaultNow().notNull().$default(() => new Date()),

    // User's status
    IsActive: boolean('is_active').default(true).notNull(),
    IsDeleted: boolean('is_deleted').default(false).notNull(),
    IsEmailVerified: boolean('is_email_verified').default(false).notNull(),

    // User's role
    Role: text('role').default('user').notNull(),
    IsAdmin: boolean('is_admin').default(false).notNull(),

    // User's counters
    FollowersCount: integer('followers_count').default(0).notNull(),
    FollowingCount: integer('following_count').default(0).notNull(),
    ReposCount: integer('repos_count').default(0).notNull(),
    StarsCount: integer('stars_count').default(0).notNull(),
})

export { UserTable };
export type UserSelect = typeof UserTable.$inferSelect;
export type UserInsert = typeof UserTable.$inferInsert;

const FollowTable = pgTable("follows",{
    Id: uuid('id').defaultRandom().unique().notNull().primaryKey(),
    UserId: uuid('user_id').notNull().references(() => UserTable.Id),
    FollowerId: uuid('follower_id').notNull().references(() => UserTable.Id),
    CreatedAt: timestamp('created_at').defaultNow().notNull(),
})

export { FollowTable };
export type FollowSelect = typeof FollowTable.$inferSelect;
export type FollowInsert = typeof FollowTable.$inferInsert;

