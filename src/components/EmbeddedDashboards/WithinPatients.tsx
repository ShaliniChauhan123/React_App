import { Grid } from "@mui/material";
import { embedDashboard } from "@superset-ui/embedded-sdk";
import React, { useEffect } from "react";

const WithinPatients = () => {
  const getToken = async () => {
    return "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjp7ImZpcnN0X25hbWUiOiJNeUFwcCIsInVzZXJuYW1lIjoiZ2x1ZWxhYnMxIiwibGFzdF9uYW1lIjoiVXNlciJ9LCJyZXNvdXJjZXMiOlt7InR5cGUiOiJkYXNoYm9hcmQiLCJpZCI6ImI1M2Y5NzI2LTVhZmMtNGE3My1iNjkyLWMzNDc3NzRlOTZhMSJ9XSwicmxzX3J1bGVzIjpbXSwiaWF0IjoxNjg4NTQxOTYxLjQ3NDI4NTgsImV4cCI6MTY4ODU0MjI2MS40NzQyODU4LCJhdWQiOiJodHRwOi8vc3VwZXJzZXQ6ODA4OC8iLCJ0eXBlIjoiZ3Vlc3QifQ.pzVt4FO-JJpqRWPwNet5Fj9w_KXI0Zo7KOpXuBfWxKU";
  };

  useEffect(() => {
    // Call the function to fetch the guest token
    const embed = async () => {
      await embedDashboard({
        id: "b53f9726-5afc-4a73-b692-c347774e96a1", // given by the Superset embedding UI
        supersetDomain: "https://superset.dev.prolaio.com",
        mountPoint: document.getElementById("dashboard")!, // html element in which iframe render
        fetchGuestToken: () => getToken(),
        dashboardUiConfig: {
          hideTitle: true,
          hideChartControls: true,
          hideTab: true,
          filters: { visible: false },
        },
      });
    };
    if (document.getElementById("dashboard")) {
      embed();
    }
  }, []);
  return (
    <Grid item xs={12} pt={"20px"}>
      <div style={{ width: "100%", height: "100%" }} id="dashboard" />
    </Grid>
  );
};

export default WithinPatients;
