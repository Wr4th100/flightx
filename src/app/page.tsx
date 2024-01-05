import { getServerAuthSession } from "@/server/auth";
import { api } from "@/trpc/server";
import Navbar from "@/components/navbar/Navbar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default async function Home() {
  const session = await getServerAuthSession();
  const flights = await api.flight.getAllFlightsFuture.query();

  return (
    <div>
      <Navbar />
      <div className="flex flex-col p-8">
        <p className="text-4xl font-bold">All Flights</p>
        <div className="mt-4 flex flex-wrap gap-4">
          {flights.map((flight) => {
            let availableSeats = 0;
            flight.Seats.forEach((seat) => {
              if (seat.class) {
                availableSeats++;
              }
            });

            return (
              <Card>
                <CardHeader>
                  <CardTitle>Flight: {flight.flightNumber}</CardTitle>
                  <CardDescription>
                    {flight.arrivalTime.toLocaleString()} -{" "}
                    {flight.departureTime.toLocaleString()}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    {flight.origin} - {flight.destination}
                  </p>
                  <p>
                    {flight.airline} - {flight.aircraft}
                  </p>
                  <p>{availableSeats} seats available out of {flight.Seats.length}</p>
                </CardContent>
                <CardFooter>
                  
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
