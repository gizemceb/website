import React from 'react';
import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import en from "./i18n/en.json";
import tr from "./i18n/tr.json";
import {Language} from "./utils/language";
import {IRouteConfig, routes} from "./routers";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Empty} from "./components/templates/Empty";
import {
    CircularProgress,
    CSSReset,
    Flex, Switch,
    ThemeProvider
} from "@chakra-ui/react";
import customTheme from "./theme/theme";

i18n.use(initReactI18next).init({
  resources: {
    en,
    tr,
  },
  lng: "tr",
  fallbackLng: "en",
  interpolation: {
    escapeValue: true,
  },
  react: {
    transSupportBasicHtmlNodes: true,
    transKeepBasicHtmlNodesFor: ["br", "b", "strong", "i"],
  },
});

function App() {
  function renderRoutes() {
    console.log('App mounted');
    Language.change(Language.get());

    return routes
        .filter((r: IRouteConfig) => r.enabled)
        .map((route: IRouteConfig) => {
          if (route.component) {
            const RouteComponent = route.component;
            return (
                <Routes>
                    <Route
                        key={route.key}
                        path={route.url}
                        element={
                            <Empty>
                                <RouteComponent />
                            </Empty>
                        }
                    />
                </Routes>
            );
          } else {
            throw {
              message: `No component or render is available for route: ${route.url}`,
              code: 0,
            };
          }
        });
  }
    return (
        <React.Suspense
            fallback={
                <Flex
                    h="100vh"
                    justifyContent="center"
                    flexDirection="column"
                    alignItems="center"
                    bg="black"
                >
                    <CircularProgress isIndeterminate color="white" />
                </Flex>
            }
        >
            <BrowserRouter>
                <ThemeProvider theme={customTheme}>
                    <CSSReset />
                    <Switch>{renderRoutes()} </Switch>
                </ThemeProvider>
            </BrowserRouter>
        </React.Suspense>
    );
}

export default App;
