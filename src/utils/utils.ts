import { queryClient } from "../context/queryClient.tsx";

export function postLogout() {
  queryClient.clear();
  localStorage.removeItem("token");
  localStorage.removeItem("queryParams");
}
