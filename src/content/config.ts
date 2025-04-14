import { defineCollection, z } from "astro:content";

const tattoos = defineCollection({
    schema: z.object({
        img: z.string()
    })
})

export const collections = { tattoos };