import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "./generated/prisma/client.js";

declare global {
  var __tradersPrisma: PrismaClient | undefined;
}

function createClient() {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error("DATABASE_URL tanimli degil (.env kontrol et)");
  }
  return new PrismaClient({ adapter: new PrismaPg({ connectionString }) });
}

export const prisma = globalThis.__tradersPrisma ?? createClient();

if (process.env.NODE_ENV !== "production") {
  globalThis.__tradersPrisma = prisma;
}
