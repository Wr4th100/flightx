import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";

export const flightRouter = createTRPCRouter({
  getAllFlightsFuture: publicProcedure.query(async ({ ctx }) => {
    return ctx.db.flight.findMany({
      where: {
        departureTime: {
          gt: new Date(),
        },
      },
      include: {
        Seats: true,
      },
    });
  }),

  bookTicket: protectedProcedure
    .input(
      z.object({
        flightId: z.string().min(1),
        seatId: z.string().min(1),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const { flightId, seatId } = input;

      const seat = await ctx.db.seat.findUnique({
        where: {
          id: seatId,
        },
      });

      if (!seat) {
        throw new Error("Seat not found");
      }

      if (seat.status === "BOOKED") {
        throw new Error("Seat already booked");
      }

      const seatUpdate = ctx.db.seat.update({
        where: {
          id: seatId,
        },
        data: {
          status: "BOOKED",
        },
      });

      const booking = ctx.db.booking.create({
        data: {
          flightId: flightId,
          seatId: seatId,
          userId: ctx.session.user.id,
          status: "CONFIRMED",
        },
      });

      return {
        seat: seatUpdate,
        booking: booking,
      };
    }),
});
