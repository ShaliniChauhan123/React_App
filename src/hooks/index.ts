import { useQuery, UseQueryResult } from "react-query";
import { getSessionUser } from "../apis/user.ts";
import { UserRole } from "../components/PatientDetail/index.tsx";

export interface User {
  _id: string;
  name: string;
  email: string;
  role: UserRole;
  program: [];
  providerInstitution: [];
  cohortOptions: [];
}

export const useSessionUser = (): UseQueryResult<User, Error> => {
  return useQuery<User, Error>(
    ["fetchSessionUser"],
    async (): Promise<User> => getSessionUser(),
    {
      staleTime: Infinity,
    }
  );
};
