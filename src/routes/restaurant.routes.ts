import { Router } from "express";
import { RestaurantController } from "../controllers/restaurant.controller";
import { IsRestaurantIdValid } from "../middleware/isRestaurantIdValid.middleware";
import { ValidateBody } from "../middleware/validateBody.middleware";
import {
   createRestaurantSchema,
   updateRestaurantSchema,
} from "../schemas/restaurant.schema";

export const restaurantRouter = Router();

const restaurantController = new RestaurantController();

restaurantRouter.post(
   "/",
   ValidateBody.execute(createRestaurantSchema),
   restaurantController.create
);
restaurantRouter.get("/", restaurantController.getMany);
restaurantRouter.get("/:id", IsRestaurantIdValid.execute, restaurantController.getOne);
restaurantRouter.patch(
   "/:id",
   IsRestaurantIdValid.execute,
   ValidateBody.execute(updateRestaurantSchema),
   restaurantController.update
);
restaurantRouter.delete("/:id", IsRestaurantIdValid.execute, restaurantController.remove);
