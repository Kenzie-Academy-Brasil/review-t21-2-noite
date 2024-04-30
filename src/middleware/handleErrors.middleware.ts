import { NextFunction, Request, Response } from "express";
import { AppError } from "../error/AppError";
import { ZodError } from "zod";
import { ValidatorError } from "../error/ValidatorError";

export class HandleErrors {
   static execute(
      error: Error,
      request: Request,
      response: Response,
      next: NextFunction
   ) {
      if (error instanceof AppError) {
         return response.status(error.statusCode).json({ message: error.message });
      }

      if(error instanceof ZodError){
         // 400, 409 (conflict), 422 (entity processed error)
         return response.status(422).json(error);
      }

      if(error instanceof ValidatorError){
         return response.status(error.statusCode).json({ errors: error.errors });
      }

      console.log(error);
      return response.status(500).json({ message: "Internal server error." });
   }
}
