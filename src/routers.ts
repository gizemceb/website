import React from "react";
import { urls } from "./utils/language";

const Homepage = React.lazy(() => import("./components/pages/HomePage"));
const Projects = React.lazy(() =>
  import("./components/pages/Projects")
);
const Contact = React.lazy(() =>
  import("./components/pages/Contact")
);

export interface IRouteConfig {
  url: string;
  component: any;
  protectedRoute?: boolean;
  enabled?: boolean;
  key?: string;
}

export const routerDefinitions: { [key: string]: IRouteConfig } = {
  Homepage: {
    url: urls.Homepage,
    component: Homepage,
  },
  Projects: {
    url: urls.Projects,
    component: Projects,
  },
  Contact: {
    url: urls.Contact,
    component: Contact,
  },
};

const routes: IRouteConfig[] = Object.keys(routerDefinitions).map((k) => {
  const route: IRouteConfig = routerDefinitions[k];
  route.enabled = route.enabled !== undefined ? route.enabled : true;
  route.protectedRoute = false;
  if (route?.key || route?.url) {
    route.key = route.key ? route.key : route.url.replace("/", "");
  }
  return route;
});

export { routes };
