import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import styled from "@emotion/styled";
import { Box } from "@mui/system";

import LogoImg from "../../Images/logo.png";
import { theme } from "../../utils/theme.ts";
import { Typography } from "@mui/material";
import ProfileDetail from "./ProfileDetail/index.tsx";

const LogoBox = styled(Box)`
  width: 110px;
  height: 100%;
  display: table;
  & > * {
    line-height: 0;
    display: block;
    vertical-align: middle;
    display: table-cell;
  }
`;

const StyledAppBar = styled(AppBar)`
  box-shadow: none;
  margin-bottom: 10px;
  background-color: ${theme.palette.lineColor.dark};
`;

export default function Header() {
  return (
    <React.Fragment>
      <StyledAppBar position="sticky">
        <Toolbar>
          <Box
            display="flex"
            justifyContent="space-between"
            width="100%"
            sx={{ overflowX: "auto", overflowY: "unset" }}
          >
            <Box display="flex" alignItems="center">
              <LogoBox>
                <a href={"/patientList"}>
                  <img
                    src={LogoImg}
                    alt="prolaio"
                    width={105}
                    height={38}
                    style={{
                      width: "auto",
                    }}
                  />
                </a>
              </LogoBox>
              <Box display="flex">
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ flexGrow: 1 }}
                ></Typography>
              </Box>
            </Box>
            <Box mx={2} display="flex" alignItems="center">
              <ProfileDetail />
            </Box>
          </Box>
        </Toolbar>
      </StyledAppBar>
    </React.Fragment>
  );
}
