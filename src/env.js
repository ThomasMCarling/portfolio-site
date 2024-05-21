import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  shared: {
    GH_URL: z.string().url(),
    LINKEDIN_URL: z.string().url(),
    SOURCE_URL: z.string().url(),
  },
  runtimeEnv: {
    GH_URL: process.env.GH_URL,
    LINKEDIN_URL: process.env.LINKEDIN_URL,
    SOURCE_URL: process.env.SOURCE_URL,
  },
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  emptyStringAsUndefined: true,
});
