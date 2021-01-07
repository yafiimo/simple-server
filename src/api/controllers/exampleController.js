import { postExampleSchema } from "../../schemas/exampleSchema";
import { hashExample } from "../../services/exampleService";

async function postExamples(req, res, next) {
  try {
    const { value, error } = postExampleSchema.validate(req.body);
    if (error) {
      return next({ status: 400, message: "Schema error" });
    }

    const hash = await hashExample(value.example);
    res.status(200).send({ hash });
  } catch (err) {
    next(err);
  }
}

export { postExamples };
