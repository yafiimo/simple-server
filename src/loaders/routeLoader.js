import express from "express";
import exampleRoutes from "../api/routes/exampleRoutes";

const routeLoader = async (app) => {
  const exampleRouter = express.Router();
  exampleRoutes(exampleRouter);
  app.use("/api/examples", exampleRouter);

  app.use(errorHandler);
  return app;
};

// eslint-disable-next-line no-unused-vars
const errorHandler = async (err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  console.log(err.message);
  res.status(err.status || 500);
  res.send("Error");
};

export default routeLoader;
export { errorHandler };
