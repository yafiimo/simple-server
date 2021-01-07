import * as exampleController from "../exampleController";
import * as exampleService from "../../../services/exampleService";
import { postExampleSchema } from "../../../schemas/exampleSchema";

jest.mock("../../../services/exampleService");
jest.mock("../../../schemas/exampleSchema");

const example = "example";

const setUpTest = () => {
  const req = {
    body: {},
  };
  const res = {};
  Object.assign(res, {
    status: jest.fn(
      function status() {
        return this;
      }.bind(res)
    ),
    send: jest.fn(
      function send() {
        return this;
      }.bind(res)
    ),
  });
  const next = jest.fn();
  return { req, res, next };
};

beforeEach(() => {
  jest.clearAllMocks();
});

test("postExamples completes and returns a hash", async () => {
  const { req, res, next } = setUpTest();
  req.body.example = example;

  await exampleController.postExamples(req, res, next);

  expect(postExampleSchema.validate).toHaveBeenCalledWith(req.body);
  expect(exampleService.hashExample).toHaveBeenCalledWith(example);
  expect(res.status).toHaveBeenCalledWith(200);
  expect(res.send).toHaveBeenCalledWith({ hash: expect.any(String) });
});

test("postExamples requires example in request", async () => {
  const { req, res, next } = setUpTest();
  await exampleController.postExamples(req, res, next);

  expect(exampleService.hashExample).toHaveBeenCalledTimes(0);
  expect(next).toHaveBeenCalledWith({
    status: 400,
    message: "Schema error",
  });
});
