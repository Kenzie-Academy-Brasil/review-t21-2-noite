import { NextFunction, Request, Response } from "express";
import { createRestaurantSchema } from "../schemas/restaurant.schema";
//import { ValidatorError } from "../error/ValidatorError";
//import { validateBody } from "../utils/validateBody";

/*
const createRestaurantSchema = {
    name: {
        required: true,
        type: "string"
    },
    category: {
        required: true,
        type: "string"
    }
}
*/

export class IsCreateRestaurantBodyValid {
   static execute(request: Request, response: Response, next: NextFunction) {
      // executar uma lógica que utiliza o meu schema e valida o corpo

      //console.log(Object.keys(createRestaurantSchema));
      //console.log(Object.values(createRestaurantSchema));
      //console.log(Object.entries(request.body));

      /*
      const errors = validateBody(createRestaurantSchema, request.body);

      if(errors.length > 0){
        throw new ValidatorError(errors);
      }

      /*

      if(!request.body.name || !request.body.category){
        throw new AppError("Missing body parameter.", 422);
      }

      if(typeof request.body.name !== "string" || typeof request.body.category !== "string"){
        throw new AppError("Wrong body parameter data type.", 422);
      }

      request.body = {
        name: request.body.name,
        category: request.body.category
      };

      */

      /*
            garantir que name e category sejam fornecidos no corpo da requisição
            garantir que ambas as chaves sejam strings
            filtrar o corpo para garantir que chaves indesejadas possam avançar na lógica
      */

      // 1 - executar todas as regras de validação no valor recebido como parâmetro
      // 2 - serializar um objeto com base em um schema (filtrar)
      request.body = createRestaurantSchema.parse(request.body);

      next();
   }
}
