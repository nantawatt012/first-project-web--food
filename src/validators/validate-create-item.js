import Joi from "joi";

const createItemSchema = Joi.object({
  name: Joi.string().trim().required().messages({
    "string.empty": "Product name is required"
  }),
  price: Joi.string()
    // .pattern(/^[0-9]$/)
    .required()
    .messages({
      "string.empty": "Product price is required"
    }),
  description: Joi.optional(),
  type: Joi.string(),
  itemLeft: Joi.optional()
});

const validateCreateItem = (input) => {
  const { error } = createItemSchema.validate(input, { abortEarly: false });

  if (error) {
    const result = error.details.reduce((acc, el) => {
      acc[el.path[0]] = el.message;
      return acc;
    }, {});

    return result;
  }
};

export default validateCreateItem;
