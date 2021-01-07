import { postExampleSchema } from "../../schemas/exampleSchema";
import { hashExample } from "../../services/exampleService";

async function getExamples(req, res, next) {
  try {
    const { value, error } = postExampleSchema.validate(req.body);
    if (error) {
      return next({ status: 400, message: "Schema error" });
    }

    const hash = await hashExample(value.example);
    return res.send({ hash });
  } catch (err) {
    next(err);
  }
}

export { getExamples };
