import { ReactNode } from "react";
import { Auth0ProviderOptions } from "@auth0/auth0-react";
import config from "../../app.config.ts";

export const PROVIDER_CONFIG: Auth0ProviderOptions = {
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
export interface ProviderProps {
  children: ReactNode;
}

export const ROUTER_AFTER_AUTH = "/";
