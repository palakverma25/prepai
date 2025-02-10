/**@type { import("drizzle-kit").Config} */;
export default {
  schema: "./utils/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://neondb_owner:npg_kyYh4numIlN7@ep-quiet-pond-a8wxvu3g-pooler.eastus2.azure.neon.tech/neondb?sslmode=require",
  },
};
