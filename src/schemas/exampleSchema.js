import Joi from "joi";

export const postExampleSchema = Joi.object().keys({
  example: Joi.string().required(),
});
