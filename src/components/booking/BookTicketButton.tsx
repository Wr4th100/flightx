import React from "react";
import { Button } from "@/components/ui/button";
import { api } from "@/trpc/react";
import toast from "react-hot-toast";

type Props = {
    flightId: string;
    className?: string;

};

const BookTicketButton = (props: Props) => {
  const bookTicketMutation = api.flight.bookTicket.useMutation({
    onSuccess: () => {
      toast.success("Ticket Booked Successfully");
    },
  });

  return <Button></Button>;
};

export default BookTicketButton;
