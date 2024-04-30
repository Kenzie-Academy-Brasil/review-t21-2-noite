import { TRestaurant } from "../interfaces/restaurant.interface";

export const restaurantDatabase: TRestaurant[] = [];

let id = 0;

export function generateId(){
    id++;

    return id;
}