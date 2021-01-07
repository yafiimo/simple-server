import appLoader from "./appLoader";
import routeLoader from "./routeLoader";

// eslint-disable-next-line no-unused-vars
export default async (app, server) => {
  appLoader(app);
  routeLoader(app);

  return app;
};
