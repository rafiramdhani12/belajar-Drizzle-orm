import {neon} from "@neondatabase/serverless";
import {drizzle} from "drizzle-orm/neon-http";
import * as schema from "./schema";

const sql = neon(
  "use u url"
);
export const db = drizzle(sql, {schema});
