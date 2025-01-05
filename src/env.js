import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = (() => {
  return createEnv({
    shared: {
      GH_URL: z.string().url(),
      LINKEDIN_URL: z.string().url(),
      SOURCE_URL: z.string().url(),
      BASE_URL: z.string().url().optional().default("localhost:3000"),
    },
    runtimeEnv: {
      GH_URL: process.env.GH_URL,
      LINKEDIN_URL: process.env.LINKEDIN_URL,
      SOURCE_URL: process.env.SOURCE_URL,
      BASE_URL: process.env.VERCEL_PROJECT_PRODUCTION_URL,
    },
    skipValidation: !!process.env.SKIP_ENV_VALIDATION,
    emptyStringAsUndefined: true,
  });
})();
