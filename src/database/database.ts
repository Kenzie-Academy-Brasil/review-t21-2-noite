import { IRestaurant } from "../interfaces/restaurant.interface";

export const restaurantDatabase: IRestaurant[] = [];

let id = 0;

export function generateId(){
    id++;

    return id;
}