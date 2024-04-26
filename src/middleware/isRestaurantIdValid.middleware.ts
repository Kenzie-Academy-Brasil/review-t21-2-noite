import { NextFunction, Request, Response } from "express";
import { restaurantDatabase } from "../database/database";
import { AppError } from "../error/AppError";

export class IsRestaurantIdValid {
   static execute(request: Request, response: Response, next: NextFunction) {
      const isRestaurantValid = restaurantDatabase.some(
         (restaurant) => restaurant.id === +request.params.id
      );

      if (!isRestaurantValid) {
         throw new AppError("Restaurant not found.", 404);
      }

      next();
   }
}
