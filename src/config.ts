import { z, object, string, url } from "zod/v4";

export const Config = object({
    title: string(),
    icon: url(),
});

export type Config = z.infer<typeof Config>;
