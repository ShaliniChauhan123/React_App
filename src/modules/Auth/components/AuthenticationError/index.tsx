import { useAuth0 } from "@auth0/auth0-react";
import { Box, Button, Typography } from "@mui/material";
import { purple } from "@mui/material/colors";
import React from "react";
import { useNavigate } from "react-router-dom";
const primary = purple[500];

export default function AuthenticationError() {
  const { error } = useAuth0();
  const navigate = useNavigate();
  const goBackHandler = () => {
    navigate("/");
    // router.reload();
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: primary,
      }}
    >
      <Typography variant="h1" style={{ color: "white" }}>
        {error?.name}
      </Typography>
      <Typography variant="h6" style={{ color: "white" }}>
        {error?.message}
      </Typography>
      <Button variant="contained" onClick={goBackHandler}>
        Back Home
      </Button>
    </Box>
  );
}
