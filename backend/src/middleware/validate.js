export const validate = (schema) => (req, _res, next) => {
  const data = { body: req.body, params: req.params, query: req.query };

  const { error, value } = schema.validate(data, { abortEarly: false });

  if (error) {
    const details = error.details.map((d) => d.message);
    return next({
      statusCode: 400,
      message: "Validation failed",
      details,
    });
  }

  req.body = value.body;
  req.params = value.params;
  req.query = value.query;
  next();
};
