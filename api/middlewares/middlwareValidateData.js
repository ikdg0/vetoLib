exports.middlwareValidateData = () => {
    const loginSchema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required()
    });

    return (req, res, next) => {
        const { error } = schema.validate(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }
        next();
    };
};