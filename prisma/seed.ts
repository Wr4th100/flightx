import { db as prisma } from "@/server/db";
import seedFlights from "./seeds/seedFlights";

async function main() {
  await seedFlights(prisma);
}

main()
  .then(() => {
    console.log("Seeding complete ✅");
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
