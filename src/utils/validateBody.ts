export const validateBody = (schema: object, body: any) => {
   let errors: string[] = [];

   Object.entries(schema).forEach(([key, value]) => {
      if (!body[key]) {
         errors.push(`${key} is required.`);
      }

      if (typeof body[key] !== value.type) {
         errors.push(`${key} should be a ${value.type}`);
      }
   });

   return errors;
};