import { Class, type PrismaClient } from "@prisma/client";

export default async function seedFlights(db: PrismaClient) {
  const seats = [
    {
      number: "1A",
      price: 10000,
      class: Class.ECONOMY,
    },
    {
      number: "1B",
      price: 10000,
      class: Class.ECONOMY,
    },
    {
      number: "1C",
      price: 10000,
      class: Class.ECONOMY,
    },
    {
      number: "1D",
      price: 10000,
      class: Class.ECONOMY,
    },
    {
      number: "1E",
      price: 10000,
      class: Class.ECONOMY,
    },
    {
      number: "1F",
      price: 10000,
      class: Class.ECONOMY,
    },
    {
      number: "1G",
      price: 10000,
      class: Class.ECONOMY,
    },
    {
      number: "1H",
      price: 10000,
      class: Class.ECONOMY,
    },
    {
      number: "1I",
      price: 10000,
      class: Class.ECONOMY,
    },
    {
      number: "1J",
      price: 10000,
      class: Class.ECONOMY,
    },
    {
      number: "1K",
      price: 10000,
      class: Class.ECONOMY,
    },
    {
      number: "1L",
      price: 10000,
      class: Class.ECONOMY,
    },
    {
      number: "1M",
      price: 10000,
      class: Class.ECONOMY,
    },
    {
      number: "1N",
      price: 10000,
      class: Class.ECONOMY,
    },
    {
      number: "1O",
      price: 10000,
      class: Class.ECONOMY,
    },
    {
      number: "1P",
      price: 10000,
      class: Class.ECONOMY,
    },
    {
      number: "1Q",
      price: 10000,
      class: Class.ECONOMY,
    },
    {
      number: "1R",
      price: 10000,
      class: Class.ECONOMY,
    },
    {
      number: "1S",
      price: 10000,
      class: Class.ECONOMY,
    },
    {
      number: "1T",
      price: 10000,
      class: Class.ECONOMY,
    },
  ];

  const flight1 = await db.flight.create({
    data: {
      flightNumber: "AI-101",
      origin: "Mumbai",
      destination: "Delhi",
      departureTime: new Date("2024-04-04 10:00:00"),
      arrivalTime: new Date("2024-04-04 12:00:00"),
      airline: "Air India",
      aircraft: "Boeing 747",
      distance: 1000,
      Seats: {
        create: seats,
      },
    },
  });

  const flight2 = await db.flight.create({
    data: {
      flightNumber: "AI-102",
      origin: "Delhi",
      destination: "Mumbai",
      departureTime: new Date("2024-04-04 10:00:00"),
      arrivalTime: new Date("2024-04-04 12:00:00"),
      airline: "Air India",
      aircraft: "Boeing 747",
      distance: 1000,
      Seats: {
        create: seats,
      },
    },
  });

  const flight3 = await db.flight.create({
    data: {
      flightNumber: "AI-103",
      origin: "Chennai",
      destination: "Mumbai",
      departureTime: new Date("2024-04-05 11:00:00"),
      arrivalTime: new Date("2024-04-05 15:00:00"),
      airline: "Air India",
      aircraft: "Boeing 747",
      distance: 1000,
      Seats: {
        create: seats,
      },
    },
  });

  const flight4 = await db.flight.create({
    data: {
      flightNumber: "AI-104",
      origin: "Mumbai",
      destination: "Chennai",
      departureTime: new Date("2024-04-05 11:00:00"),
      arrivalTime: new Date("2024-04-05 15:00:00"),
      airline: "Air India",
      aircraft: "Boeing 747",
      distance: 1000,
      Seats: {
        create: seats,
      },
    },
  });

  const flight5 = await db.flight.create({
    data: {
      flightNumber: "AI-105",
      origin: "Mumbai",
      destination: "Kolkata",
      departureTime: new Date("2024-04-06 11:00:00"),
      arrivalTime: new Date("2024-04-06 17:00:00"),
      airline: "Air India",
      aircraft: "Boeing 747",
      distance: 1000,
      Seats: {
        create: seats,
      },
    },
  });
}
