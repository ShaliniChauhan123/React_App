import { useAuth0 } from "@auth0/auth0-react";
import styled from "@emotion/styled";
import { Box, LinearProgress } from "@mui/material";
import { ProviderProps } from "../../config";
import AuthenticationError from "../AuthenticationError/index.tsx";

const TransitionOverlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  pointer-event: none;
  transition: 0.5s;
  top: 0;
  opacity: 1;
  background: #fff;
`;

export default function AuthInitialize({ children }: ProviderProps) {
  const { error, isLoading, isAuthenticated } = useAuth0();
  const hideOverlay = isAuthenticated || !isLoading;

  if (error) {
    return <AuthenticationError />;
  }

  return (
    <>
      {/* loader overlay */}
      <TransitionOverlay style={{ opacity: hideOverlay ? 0 : 1 }}>
        <Box sx={{ width: "100%" }}>
          <LinearProgress />
        </Box>
      </TransitionOverlay>

      {isLoading ? <></> : children}
    </>
  );
}
