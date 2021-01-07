import * as exampleController from "../controllers/exampleController";

function exampleRouter(router) {
  router.post("/", exampleController.postExamples);
}

export default exampleRouter;
