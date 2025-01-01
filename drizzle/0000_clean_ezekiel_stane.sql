CREATE TABLE IF NOT EXISTS "t3-stack-practice_basic-todo-app_tasks" (
	"id" integer PRIMARY KEY NOT NULL,
	"task" text NOT NULL,
	"completed" boolean,
	"date-added" timestamp,
	"date-completed" timestamp
);
