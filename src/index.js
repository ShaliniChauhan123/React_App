import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "@mui/material/styles";

import { theme } from "./utils/theme.ts";
import AppQueryClientProvider from "./context/queryClient.tsx";
import "../src/styles/globals.css";
import { BrowserRouter as Router } from "react-router-dom";
import history from "./utils/history.ts";
import { useCallback, useEffect, useRef } from "react";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import styled from "@emotion/styled";
import {
  getAuthenticationState,
  removeAuthenticationState,
} from "./modules/Auth/index.ts";
import { hasAuthParams } from "./modules/Auth/utils.ts";
import axios from "axios";
import AuthInitialize from "./modules/Auth/components/AuthInitialize/index.tsx";
import config from "./app.config.ts";
import { postLogout } from "./utils/utils.ts";
import { useNavigate } from "react-router-dom";
import React from "react";
import { ROUTER_AFTER_AUTH } from "./modules/Auth/config.ts";

const TransitionWrapper = styled.div`
  transition: 0.5s;
`;

const AuthWrapper = ({ children }) => {
  const { isAuthenticated, loginWithRedirect, handleRedirectCallback, logout } =
    useAuth0();

  const didLoginInitialize = useRef(false);
  const didTokenRetrievalInitialize = useRef(false);
  const didNetworkInterceptInitialize = useRef(false);
  const navigate = useNavigate();
  const logoutHandler = useCallback(async () => {
    await logout({
      logoutParams: {
        returnTo: config.auth0.redirectUri,
      },
    });
    postLogout();
  }, [logout]);

  // network call failure intercept
  useEffect(() => {
    if (didNetworkInterceptInitialize.current) return;

    didNetworkInterceptInitialize.current = true;
    axios.interceptors.response.use(
      (response) => {
        return response;
      },
      function (error) {
        if (error.response.status === 401) {
          logoutHandler();
        }
        return Promise.reject(error);
      }
    );
  }, [logoutHandler]);

  // clear auth state if app is loaded before completing authentication
  useEffect(() => {
    const stateValue = getAuthenticationState();
    if (!hasAuthParams() && stateValue) {
      removeAuthenticationState();
      window.location.reload();
    }
  }, []);

  // Auth0 callback handler after successful authentication
  useEffect(() => {
    const stateValue = getAuthenticationState();
    if (!handleRedirectCallback) return;
    if (!stateValue || !hasAuthParams()) return;

    // extract code from url params then fetch auth tokens
    (async () => {
      didTokenRetrievalInitialize.current = true;
      await handleRedirectCallback();
      navigate(ROUTER_AFTER_AUTH);
    })();
  }, [handleRedirectCallback, navigate]);

  // initiate login if no session is found
  useEffect(() => {
    const stateValue = getAuthenticationState();
    if (didLoginInitialize.current) return;
    if (didTokenRetrievalInitialize.current) return;

    if (isAuthenticated || hasAuthParams() || stateValue) return;

    // initiate login
    setTimeout(() => {
      didLoginInitialize.current = true;
      loginWithRedirect();
    }, 500);
  }, [isAuthenticated, loginWithRedirect]);

  return (
    <TransitionWrapper style={{ opacity: isAuthenticated ? 1 : 0 }}>
      {isAuthenticated ? children : <></>}
    </TransitionWrapper>
  );
};

export const providerConfig = {
  domain: config.auth0.domain,
  clientId: config.auth0.clientId,
  cacheLocation: "localstorage",
  skipRedirectCallback: true,
  authorizationParams: {
    scope: config.auth0.scope,
    redirect_uri: config.auth0.redirectUri,
    audience: config.auth0.audience,
  },
};
const root = createRoot(document.getElementById("root"));
root.render(
  <Router history={history}>
    <Auth0Provider {...providerConfig}>
      <AuthInitialize>
        <AuthWrapper>
          <ThemeProvider theme={theme}>
            <AppQueryClientProvider>
              {/* <head> */}
              <title>Prolaio Care Team</title>
              <meta name="description" content="Prolaio Care Team"></meta>
              {/* </head> */}

              <App />
            </AppQueryClientProvider>
          </ThemeProvider>
        </AuthWrapper>
      </AuthInitialize>
    </Auth0Provider>
  </Router>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
