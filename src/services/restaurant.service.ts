import { generateId, restaurantDatabase } from "../database/database";
import {
   TRestaurant,
   TRestaurantCreateData,
   TRestaurantUpdateData,
} from "../interfaces/restaurant.interface";

export class RestaurantService {
   create(data: TRestaurantCreateData) {
      const now = new Date();

      const restaurant: TRestaurant = {
         id: generateId(),
         ...data,
         createdAt: now,
         updatedAt: now,
      };

      restaurantDatabase.push(restaurant);

      return restaurant;
   }

   getMany(search?: string, category?: string) {
      const results =
         search || category
            ? restaurantDatabase.filter((restaurant) => {
                 return (category
                    ? category === restaurant.category
                    : true) && (search
                    ? restaurant.name.toLowerCase().includes(search.toLowerCase())
                    : true);
              })
            : restaurantDatabase;

      return results;
   }

   getOne(id: number) {
      const restaurant = restaurantDatabase.find((restaurant) => restaurant.id === id);

      return restaurant;
   }

   update(id: number, data: TRestaurantUpdateData) {
      const currentRestaurant = restaurantDatabase.find(
         (restaurant) => restaurant.id === id
      ) as TRestaurant;

      const now = new Date();

      const updatedRestaurant: TRestaurant = {
         ...currentRestaurant,
         ...data,
         updatedAt: now,
      };

      const index = restaurantDatabase.findIndex((restaurant) => restaurant.id === id);

      restaurantDatabase.splice(index, 1, updatedRestaurant);

      return updatedRestaurant;
   }

   remove(id: number) {
      const index = restaurantDatabase.findIndex((restaurant) => restaurant.id === id);

      restaurantDatabase.splice(index, 1);
   }
}

//Criar, ler os Restaurantes, ler um restaurante específico, atualizar, excluir
