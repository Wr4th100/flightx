import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";
import type { Gender } from "@prisma/client";

export const userRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  create: publicProcedure
    .input(
      z.object({
        name: z.string().min(1),
        mobile: z.string().min(1),
        email: z.string().min(1),
        password: z.string().min(1),
        gender: z.string().min(1),
        nationality: z.string().min(1),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.user.create({
        data: {
          name: input.name,
          mobile: input.mobile,
          email: input.email,
          gender: input.gender as Gender,
          password: input.password,
          nationality: input.nationality,
        },
      });
    }),
});
