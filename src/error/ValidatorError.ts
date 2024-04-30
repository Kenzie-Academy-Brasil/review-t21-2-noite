import { IValidationError } from "../interfaces/error.interface";

export class ValidatorError extends Error {
   errors: string[];
   statusCode: number;

   constructor(errors: string[], statusCode = 422) {
      super();
      this.errors = errors;
      this.statusCode = statusCode;
   }
}
