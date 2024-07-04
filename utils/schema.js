import {pgTable, serial, varchar} from "drizzle-orm/pg-core";

export const Absen = pgTable("Absen", {
  id: serial("id").primaryKey(),
  nama: varchar("nama"),
  email: varchar("email"),
});
