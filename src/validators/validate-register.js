import Joi from "joi";

const registerSchema = Joi.object({
  firstName: Joi.string().trim().required().messages({
    "string.empty": "first name is required"
  }),
  lastName: Joi.string().trim().required().messages({
    "string.empty": "last name is required"
  }),
  email: Joi.string().email({ tlds: false }),
  mobile: Joi.string().pattern(/^[0-9]{10}$/),
  password: Joi.string().alphanum().min(6).required().trim().messages({
    "string.empty": "password is required",
    "string.alphanum": "password must contain number or alphabet",
    "string.min": "password must have at least 6 character"
  }),
  confirmPassword: Joi.string()
    .valid(Joi.ref("password"))
    .required()
    .trim()
    .messages({
      "any.only": "password and confirm password did not match",
      "string.empty": "confirm password is required"
    }),
  role: Joi.string().required()
});

const vlidateRegister = (input) => {
  const { error } = registerSchema.validate(input, {
    abortEarly: false
  });

  if (error) {
    //need this ex. {firstName : 'firstName is require'}
    const result = error.details.reduce((acc, el) => {
      acc[el.path[0]] = el.message;
      return acc;
    }, {});

    // console.dir(result);
    return result;
  }
};

export default vlidateRegister;
