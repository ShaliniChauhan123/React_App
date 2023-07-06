import axios from "axios";
import Config from "../app.config.ts";
import { authHeaders } from "../modules/Auth/utils.ts";

export const getSessionUser = async () => {
  const url = `${Config.backendUrl}/users/me`;
  const { data } = await axios.get(url, {
    headers: {
      ...authHeaders(),
    },
  });
  return {
    ...data,
  };
};
