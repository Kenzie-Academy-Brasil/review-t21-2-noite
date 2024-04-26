export interface IRestaurant{
    id: number;
    name: string;
    category: string;
    createdAt: Date;
    updatedAt: Date;
}

export type TRestaurantCreateData = Pick<IRestaurant, "name" | "category">;
export type TRestaurantUpdateData = Partial<TRestaurantCreateData>;