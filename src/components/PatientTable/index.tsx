"use client";

import {
  Box,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  tableCellClasses,
  tableRowClasses,
} from "@mui/material";
import { styled as MuiStyle } from "@mui/material/styles";
import styled from "@emotion/styled";
import { theme } from "../../utils/theme.ts";
import { PatientDetailModal } from "../PatientDetail/index.tsx";
import { useState } from "react";
import React from "react";
import Header from "../AppHeader/index.tsx";

const rows: any = [
  {
    name: "101-0001, Subject (draft)",
    email: "-",
    age: "55",
    gender: "M",
  },
  {
    name: "101-0002, Subject (draft)",
    email: "-",
    age: "45",
    gender: "F",
  },
  {
    name: "101-0003, Subject (draft)",
    email: "-",
    age: "25",
    gender: "M",
  },
  {
    name: "101-0004, Subject (draft)",
    email: "-",
    age: "35",
    gender: "M",
  },
  {
    name: "101-0005, Subject (draft)",
    email: "-",
    age: "55",
    gender: "M",
  },
  {
    name: "101-0006, Subject (draft)",
    email: "-",
    age: "55",
    gender: "M",
  },
  {
    name: "101-0007, Subject (draft)",
    email: "-",
    age: "45",
    gender: "F",
  },
  {
    name: "101-0008, Subject (draft)",
    email: "-",
    age: "25",
    gender: "M",
  },
  {
    name: "101-0009, Subject (draft)",
    email: "-",
    age: "35",
    gender: "M",
  },
];

const headerColumns = ["Name", "Email", "Age", "Gender"];
const rowColumns = ["name", "email", "age", "gender"];

export const StickyTableHead = MuiStyle(TableHead)`
  position: sticky;
  top: 4px;
  z-index: 2;
  @supports (-webkit-hyphens:none)
  {
    top: 0px;
  }
`;
const StyledTableRow = styled(TableRow)({
  boxShadow: "none !important",
});
export const StyledHeaderCell = styled(TableCell)`
  line-height: 18px;
  text-align: left;
  &.action {
    padding: 0;
  }
  .rotated-cont {
    width: 30px;
  }
  .rotated-txt {
    width: 90px;
    transform: rotate(-90deg) translateX(0px) translateY(100%);
    transform-origin: bottom left;
  }
  .filter-cont {
    position: absolute;
    bottom: 2px;
    left: calc(50% - 14px);
  }
  &.horizontal-label {
    padding-bottom: 5px;
  }
`;
export const WrapperBox = styled(Box)`
  display: flex;
`;

export const InnerBox = styled(Box)`
  display: flex;
  align-items: center;
`;
export const PatientDetailBox = styled(Box)`
  font-family: Poppins;
  font-style: normal;
  text-decoration: auto;
`;
const TableContainerStyles = {
  height: "100%",
  pl: "var(--container-padding)",
  pr: "var(--container-padding)",
  backgroundColor: "white",
  position: "relative",
};
export const TableRootStyle = {
  [`& td`]: {
    padding: "5px 8px",
    height: "75px",
    borderBottom: `1px solid ${theme.palette.lineColor.main}`,
    borderTop: `1px solid ${theme.palette.lineColor.main}`,
    borderRadius: 0,
    borderTopLeftRadius: 0,
  },
  [`& thead th.${tableCellClasses.root}`]: {
    borderBottom: `1px solid ${theme.palette.lineColor.main}`,
  },
  [`& tr`]: {
    boxShadow: "none",
    background: "none",
  },
  [`& tr:hover`]: {
    boxShadow: "none",
    background: "none",
  },
  [`& tbody .${tableCellClasses.root}:first-of-type`]: {
    borderLeft: `1px solid ${theme.palette.lineColor.main}`,
    borderTopLeftRadius: "8px",
    borderBottomLeftRadius: "8px",
  },
  [`& tbody .${tableCellClasses.root}:last-of-type`]: {
    borderRight: `1px solid ${theme.palette.lineColor.main}`,
    borderTopRightRadius: "8px",
    borderBottomRightRadius: "8px",
  },
  [`& thead .${tableCellClasses.root}:first-of-type`]: {
    borderTopLeftRadius: "0",
    borderBottomLeftRadius: "0",
  },
  [`& thead .${tableCellClasses.root}:last-of-type`]: {
    borderTopRightRadius: "0",
    borderBottomRightRadius: "0",
  },
  [`& thead .${tableCellClasses.root}`]: {
    borderBottom: `1px solid transparent`,
    verticalAlign: "bottom",
  },
  [`& thead.empty-table .${tableCellClasses.root}`]: {
    borderBottom: `1px solid ${theme.palette.lineColor.main}`,
  },
  [`& .${tableCellClasses.root}:first-of-type`]: {
    borderTopLeftRadius: "5px",
    borderBottomLeftRadius: "5px",
  },
  [`& .${tableCellClasses.root}:last-child`]: {
    borderTopRightRadius: "5px",
    borderBottomRightRadius: "5px",
  },
  [`& tbody .${tableRowClasses.root}`]: {
    boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
    borderRadius: "8px",
  },
  [`& tbody .${tableRowClasses.hover}:hover`]: {
    boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
    background: "none",
  },
  borderCollapse: "separate",
  borderSpacing: "0px 4px",
};

export const ColorWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  -webkit-box-align: stretch;
  align-items: stretch;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  & > div {
    width: 23px;
    height: 100%;
  }
  & > div:first-of-type {
    border-top-left-radius: 7px;
  }
  & > div:last-of-type {
    border-bottom-left-radius: 7px;
  }
`;

const DisableTableContainerStyles = { overflowX: "none" };
export default function PatientTable() {
  const [showPatientDetailModal, setShowPatientDetailModal] = useState(false);
  console.log("first", showPatientDetailModal);
  return (
    <Box
      sx={{ width: "100%", height: "calc(100% - 32px)", position: "relative" }}
    >
      <Header />
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          width: "var(--container-padding)",
          zIndex: "15",
        }}
      ></div>
      <TableContainer
        sx={
          rows.length > 0 ? TableContainerStyles : DisableTableContainerStyles
        }
      >
        <Table stickyHeader aria-label="sticky table" sx={TableRootStyle}>
          <StickyTableHead className={rows?.length === 0 ? "empty-table" : ""}>
            <TableRow>
              <th
                style={{ transform: "scale(1, 15)", background: "#fff" }}
                key={`column-header-background-cover`}
                colSpan={100}
              ></th>
            </TableRow>
            <TableRow>
              {headerColumns.map((i) => (
                <>
                  <StyledHeaderCell
                    className={"horizontal-label"}
                    sx={{
                      minWidth: "260px",
                      pl: "30px",
                      position: "sticky",
                      left: 20,
                      zIndex: 11,
                      backgroundColor: "white",
                    }}
                  >
                    <WrapperBox>
                      <Typography>{i}</Typography>
                    </WrapperBox>
                  </StyledHeaderCell>
                </>
              ))}
            </TableRow>
          </StickyTableHead>

          <TableBody>
            {rows.map((row: any, index: number) => {
              return (
                <>
                  <StyledTableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={`row-${index}-${row.id}`}
                  >
                    {rowColumns.map((column) => (
                      <>
                        <TableCell
                          //  key={`detail-${parentKey}`}
                          sx={{
                            pl: "30px!important",
                            position: "sticky",
                            left: 20,
                            zIndex: 1,
                            backgroundColor: "white",
                          }}
                        >
                          {column === "name" && (
                            <ColorWrapper>
                              {rows.map(({ r }: any) => (
                                <div
                                  key={r}
                                  style={{
                                    backgroundColor: "rgb(252, 220, 235)",
                                  }}
                                ></div>
                              ))}
                            </ColorWrapper>
                          )}
                          <PatientDetailBox>
                            <Stack>
                              <Box>
                                <Typography
                                  variant="body1"
                                  fontFamily={"inherit"}
                                  display="inline-block"
                                  sx={
                                    column === "name"
                                      ? {
                                          textDecoration: "underline",
                                          cursor: "pointer",
                                          color: "rgb(46, 136, 246)",
                                        }
                                      : {}
                                  }
                                  onClick={() =>
                                    column === "name" &&
                                    setShowPatientDetailModal(
                                      !showPatientDetailModal
                                    )
                                  }
                                >
                                  {row[`${column}`]}
                                </Typography>
                              </Box>
                            </Stack>
                          </PatientDetailBox>
                        </TableCell>
                      </>
                    ))}
                  </StyledTableRow>
                </>
              );
            })}
          </TableBody>
          <PatientDetailModal
            open={showPatientDetailModal}
            //patientId={data.id}
            onClose={(val: boolean) => setShowPatientDetailModal(val)}
          />
        </Table>
      </TableContainer>
    </Box>
  );
}
