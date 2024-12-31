// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import {
  boolean,
  integer,
  pgTableCreator,
  timestamp,
  text,
} from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator(
  (name) => `t3-stack-practice_basic-todo-app_${name}`
);

export const tasks = createTable("tasks", {
  id: integer("id").primaryKey().notNull(),
  task: text("task").notNull(),
  completed: boolean("completed"),
  dateAdded: timestamp("date-added"),
  dateCompleted: timestamp("date-completed"),
});
