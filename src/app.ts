import express, { json } from "express";
import { restaurantRouter } from "./routes/restaurant.routes";
import { HandleErrors } from "./middleware/handleErrors.middleware";
import cors from "cors";

export const app = express();

app.use(cors());

app.use(json());

app.use("/restaurants", restaurantRouter);

app.use(HandleErrors.execute);