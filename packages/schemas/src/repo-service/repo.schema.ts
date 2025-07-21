import { 
    integer, 
    uuid, 
    text,
    timestamp,
    boolean,
    pgTable,
} from "drizzle-orm/pg-core"
import { Name, relations } from "drizzle-orm"

const RepositoryTable = pgTable("repositories", {
    Id: uuid('id').defaultRandom().unique().notNull().primaryKey(),

    // Repository's name
    Name: text('name').notNull().unique(),
    LowerName: text('lower_name').notNull().unique(),

    // Repository's description
    Description: text('description').notNull(),

    // Repository's owner
    OwnerId: uuid('owner_id').notNull(),

    // Repository's creation and update timestamps
    CreatedAt: timestamp('created_at').defaultNow().notNull(),
    UpdatedAt: timestamp('updated_at').defaultNow().notNull().$default(() => new Date()),

    // Repository's visibility
    Visibility: text('visibility').default('public').notNull(),
})

export type RepositorySelect = typeof RepositoryTable.$inferSelect;
export type RepositoryInsert = typeof RepositoryTable.$inferInsert;