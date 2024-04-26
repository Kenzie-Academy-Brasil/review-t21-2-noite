import express, { json } from "express";
import { restaurantRouter } from "./routes/restaurant.routes";
import { HandleErrors } from "./middleware/handleErrors.middleware";

export const app = express();

app.use(json());

app.use("/restaurants", restaurantRouter);

app.use(HandleErrors.execute);