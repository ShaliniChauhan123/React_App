import { useCallback, useEffect, useRef } from "react";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import styled from "@emotion/styled";
import {
  getAuthenticationState,
  removeAuthenticationState,
} from "../../modules/Auth/utils.ts";
import { hasAuthParams } from "../../modules/Auth/utils.ts";
import axios from "axios";
import { PROVIDER_CONFIG, ProviderProps, ROUTER_AFTER_AUTH } from "./config.ts";
import AuthInitialize from "./components/AuthInitialize/index.tsx";
import config from "../../app.config.ts";
import { postLogout } from "../../utils/utils.ts";
import { useNavigate } from "react-router-dom";
import React from "react";

const TransitionWrapper = styled.div`
  transition: 0.5s;
`;

const AuthWrapper = ({ children }: ProviderProps) => {
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

export default function Auth0WrapProvider({ children }: ProviderProps) {
  return (
    <Auth0Provider {...PROVIDER_CONFIG}>
      <AuthInitialize>
        <AuthWrapper>{children}</AuthWrapper>
      </AuthInitialize>
    </Auth0Provider>
  );
}
