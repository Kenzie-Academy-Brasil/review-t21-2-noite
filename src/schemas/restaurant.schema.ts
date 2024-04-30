import { z } from "zod";

export const restaurantSchema = z.object({
  id: z.number().positive(),
  name: z.string().min(1),
  category: z.string().min(1),
  createdAt: z.date(),
  updatedAt: z.date()
});

export const createRestaurantSchema = restaurantSchema.pick({
  name: true,
  category: true
});

export const updateRestaurantSchema = createRestaurantSchema.partial();