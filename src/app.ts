import express, { json } from "express";
import { restaurantRouter } from "./routes/restaurant.routes";
import { HandleErrors } from "./middleware/handleErrors.middleware";
import helmet from "helmet";

export const app = express();

app.use(helmet());

app.use(json());

app.use("/restaurants", restaurantRouter);

app.use(HandleErrors.execute);