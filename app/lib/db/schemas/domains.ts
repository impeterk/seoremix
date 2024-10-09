import { z } from "zod";

export const newDomainSchema = z.object({
  domain: z.string().url(),
  organization: z.string(),
  userId: z.string().uuid(),
  status: z.string(),
});
