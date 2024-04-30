import { z } from "zod";
import { restaurantSchema } from "../schemas/restaurant.schema";

export type TRestaurant = z.infer<typeof restaurantSchema>;
export type TRestaurantCreateData = Pick<TRestaurant, "name" | "category">;
export type TRestaurantUpdateData = Partial<TRestaurantCreateData>;