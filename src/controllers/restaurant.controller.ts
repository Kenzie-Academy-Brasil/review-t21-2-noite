import { Request, Response } from "express";
import { RestaurantService } from "../services/restaurant.service";

export class RestaurantController {
   create(request: Request, response: Response) {
      const restaurantService = new RestaurantService();

      const restaurant = restaurantService.create(request.body);

      return response.status(201).json(restaurant);
   }

   getMany(request: Request, response: Response) {
      const restaurantService = new RestaurantService();

      const restaurants = restaurantService.getMany(
         request.query.search as string,
         request.query.category as string
      );

      return response.status(200).json(restaurants);
   }

   getOne(request: Request, response: Response) {
      const restaurantService = new RestaurantService();

      const restaurant = restaurantService.getOne(+request.params.id);

      return response.status(200).json(restaurant);
   }

   update(request: Request, response: Response) {
      const restaurantService = new RestaurantService();

      const restaurant = restaurantService.update(+request.params.id, request.body);

      return response.status(200).json(restaurant);
   }

   remove(request: Request, response: Response) {
      const restaurantService = new RestaurantService();

      restaurantService.remove(+request.params.id);

      return response.status(204).json();
   }
}
