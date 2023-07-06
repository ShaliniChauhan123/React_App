import { Box } from "@mui/system";

import CloseIcon from "../../Images/close.svg";
import React from "react";

export interface PatientDetailHeaderProps {
  onClose: (val: boolean) => void;
}

export default function PatientDetailHeader(props: PatientDetailHeaderProps) {
  const { onClose } = props;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        position: "sticky",
        top: 0,
        backgroundColor: "white",
        zIndex: 2,
      }}
      px={2}
      pt="48px"
    >
      <Box
        sx={{
          cursor: "pointer",
          margin: "20px",
          position: "absolute",
          right: -6,
          top: -6,
        }}
        onClick={() => onClose(false)}
      >
        <img src={CloseIcon} alt="close-icon" />
      </Box>
    </Box>
  );
}
