import { z } from "zod";

/*
{
  "name": "Sushi da Alex",
  "category": "Sushi"
}
*/

export const createRestaurantSchema = z.object({
    name: z.string().min(1),
    category: z.string().min(1)
});

export const updateRestaurantSchema = createRestaurantSchema.partial();