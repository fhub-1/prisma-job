import { z } from "zod";

// making sure the form inputs are required by default
const requiredstring = z.string().min(1, "Required")

export const createJobSchema = z.object({
    title: requiredstring.max(100),
    type: requiredstring
})


export const jobFilterSchema = z.object({
    q: z.string().optional(),
    type: z.string().optional(),
    location: z.string().optional(),
    remote: z.coerce.boolean().optional(),
});

export type JobFilterValues = z.infer<typeof jobFilterSchema>;