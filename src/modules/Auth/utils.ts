import config from "../../app.config.ts";
const CODE_RE = /[?&]code=[^&]+/;
const STATE_RE = /[?&]state=[^&]+/;
const ERROR_RE = /[?&]error=[^&]+/;
const AUTHENTICATION_STATE_KEY = ["a0.spajs.txs", config.auth0.clientId].join(
  "."
);

export const hasAuthParams = (searchParams = window.location.search): boolean =>
  (CODE_RE.test(searchParams) || ERROR_RE.test(searchParams)) &&
  STATE_RE.test(searchParams);

export function getAccessToken() {
  const key = [
    "@@auth0spajs@@",
    config.auth0.clientId,
    config.auth0.audience,
    config.auth0.scope,
  ].join("::");
  const data = localStorage.getItem(key);
  try {
    return JSON.parse(data as string)?.body?.access_token;
  } catch (_) {
    return "";
  }
}

export function getIdToken() {
  const key = ["@@auth0spajs@@", config.auth0.clientId, "@@user@@"].join("::");
  const data = localStorage.getItem(key);
  try {
    return JSON.parse(data as string)?.id_token;
  } catch (_) {
    return "";
  }
}

export function getAuthenticationState() {
  return sessionStorage.getItem(AUTHENTICATION_STATE_KEY);
}

export function removeAuthenticationState() {
  return sessionStorage.removeItem(AUTHENTICATION_STATE_KEY);
}

export function authHeaders() {
  const accessToken = getAccessToken();
  const idToken = getIdToken();
  return {
    Authorization: `Bearer ${accessToken}`,
    "X-ID-Token": `${idToken}`,
  };
}
