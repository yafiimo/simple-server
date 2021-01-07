import * as exampleController from "../controllers/exampleController";

function exampleRouter(router) {
  router.post("/", exampleController.getExamples);
}

export default exampleRouter;
