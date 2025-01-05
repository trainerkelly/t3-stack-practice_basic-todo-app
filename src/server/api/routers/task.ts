import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { db } from "~/server/db";
import { tasks } from "~/server/db/schema";

export const taskRouter = createTRPCRouter({
  getTasks: publicProcedure.query(async () => {
    return await db.select().from(tasks).all();
  }),
});
