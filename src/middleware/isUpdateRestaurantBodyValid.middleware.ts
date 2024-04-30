import { NextFunction, Request, Response } from "express";
import { updateRestaurantSchema } from "../schemas/restaurant.schema";

export class IsUpdateRestaurantBodyValid{
    static execute(request: Request, response: Response, next: NextFunction) {
        request.body = updateRestaurantSchema.parse(request.body);

        next();
    }
}