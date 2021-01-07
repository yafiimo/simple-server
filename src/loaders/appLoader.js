import bodyParser from "body-parser";
import cors from "cors";

const expressLoader = async (app) => {
  app.use(bodyParser.json());
  app.use(cors());

  return app;
};

export default expressLoader;
