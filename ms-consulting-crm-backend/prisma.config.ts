import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",

  migrations: {
    path: "prisma/migrations",
  },

  datasource: {
    url: "postgresql://mscrm_user:MsCrm2026%21@localhost:5432/mscrm?schema=public",
  },
});