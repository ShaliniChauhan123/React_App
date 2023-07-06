import { Drawer } from "@mui/material";
import * as React from "react";
import { Fragment } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { styled as MuiStyled } from "@mui/material/styles";
import { Container } from "@mui/system";
import WithinPatients from "../EmbeddedDashboards/WithinPatients.tsx";
import PatientDetailHeader from "../PatientDetailHeader/index.tsx";

const GRID_SPACING = 1.8;
export interface PatientDetailModalProps {
  open: boolean;
  onClose: (val: boolean) => void;
}
export const StyledContainer = MuiStyled(Container)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    paddingLeft: "var(--container-padding)",
    paddingRight: "var(--container-padding)",
  },
}));

export const PatientDetailModal = ({
  open,
  onClose,
}: PatientDetailModalProps) => {
  const onCloseHandler = () => {
    onClose(false);
  };

  const clinicalModalWidthStyles = {
    width: "95%",
    marginTop: "64px",
    paddingBottom: 8,
    backgroundColor: "#F7F7F7",
  };

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onCloseHandler}
      PaperProps={{
        sx: clinicalModalWidthStyles,
      }}
      slotProps={{
        backdrop: {
          style: {
            opacity: 0,
          },
        },
      }}
      transitionDuration={open ? 400 : 0}
    >
      <Fragment>
        <Box sx={{ position: "relative" }}>
          <PatientDetailHeader onClose={onCloseHandler} />
          <Fragment>
            <StyledContainer maxWidth="xl" sx={{ pt: 0.5 }}>
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={GRID_SPACING}>
                  <WithinPatients />
                </Grid>
              </Box>
            </StyledContainer>
          </Fragment>
        </Box>
      </Fragment>
    </Drawer>
  );
};
