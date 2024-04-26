import { Router } from "express";
import { RestaurantController } from "../controllers/restaurant.controller";
import { IsRestaurantIdValid } from "../middleware/isRestaurantIdValid.middleware";

export const restaurantRouter = Router();

const restaurantController = new RestaurantController();

restaurantRouter.post("/", restaurantController.create);
restaurantRouter.get("/", restaurantController.getMany);
restaurantRouter.get("/:id", IsRestaurantIdValid.execute, restaurantController.getOne);
restaurantRouter.patch("/:id", IsRestaurantIdValid.execute, restaurantController.update);
restaurantRouter.delete("/:id", IsRestaurantIdValid.execute, restaurantController.remove);
