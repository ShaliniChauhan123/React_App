import { CSSProperties } from "react";
import { createTheme } from "@mui/material/styles";
const BLUE = "#388CCA";
const BLUE_LIGHT = "#8ec2ed";
const BLUE_DARK = "#173462";
const BLUE_TEXT = "#2E88F6";
const BLACK = "#000";
const DARK_GRAY = "#616060"; //Granite Gray; Border
const DARK_GRAY2 = "#353535"; //Border
const RED = "#E73931"; //Traffic light
const YELLOW = "#FCD719"; //Traffic light
const GREEN = "#3DAA35"; //Traffic light
const GREEN_APPLE = "#5DCB4B"; //Probably same as traffic light green
const GREEN_LIGHTEST = "#B5E8B2"; //traffic light light green
const GRAY = "#9C9C9C"; //Traffic light
const GRAY_BRIGHT = "#EFEFEF"; //Traffic light empty
const GRAY_LIGHT_SILVER = "#D9D9D9"; //mobile view patient tab overlay box
const PINK = "#ea999a"; // detail line charts
const LINE_COLOR = "#E4E4E7";
const HEADING_COLOR = "#141414";
export const TABLE_BACKGROUND = "rgba(242, 247, 255, 0.6)";

interface ExtendedPalette {
  diagnosticTestChart: {
    current: string;
    previous: string;
  };
  black: {
    light2: string;
    light: string;
    main: string;
  };
  pink: {
    main: string;
  };
  green: {
    main: string;
    light: string;
    light2: string;
  };
  gray: {
    dark2: string;
    dark: string;
    main: string;
    light: string;
    light2: string;
  };
  blue: {
    main: string;
    light: string;
    dark: string;
    text: string;
  };
  yellow: {
    main: string;
  };
  red: {
    main: string;
  };
  lineColor: {
    main: string;
    dark: string;
  };
}

interface ExtendedTypographyVariants {
  patientName: CSSProperties;
  patientDetails: CSSProperties;
  riskAssessmentHeading: CSSProperties;
  riskAssessmentUpdate: CSSProperties;
  widgetHeadings: CSSProperties;
  actionsCommentsList: CSSProperties;
  dataStatusLabels: CSSProperties;
  historyTableHeadings: CSSProperties;
  historyTableCells: CSSProperties;
  operationClinicalDetails: CSSProperties;
  headerText: CSSProperties;
  badgeText: CSSProperties;
  dropdownFilters: CSSProperties;
  bubbleFilterDropdown: CSSProperties;
  bubbleFilterSearch: CSSProperties;
  tableHeader: CSSProperties;
  tableContent: CSSProperties;
  tooltipTitle: CSSProperties;
  tooltipContent: CSSProperties;
  tooltipEmailContent: CSSProperties;
  operationsDetailsTableSubHeading: CSSProperties;
  devicesTitle: CSSProperties;
  devicesSmallText: CSSProperties;
  devicesContent: CSSProperties;
  devicesButtonText: CSSProperties;
  componentTitle: CSSProperties;
  operationsDataCollectionMonitoringPeriodTitle: CSSProperties;
  operationsDataCollectionBehindText: CSSProperties;
  operationsDataCollectionBehindTitle: CSSProperties;
  operationsDataCollectionBehindContent: CSSProperties;
  enrollmentStatusEnrolledDetails: CSSProperties;
  enrollmentStatusHistoryDetails: CSSProperties;
  healthDataTitle: CSSProperties;
  healthDataSubTitle: CSSProperties;
  componentContent: CSSProperties;
  monitoringAdherenceTitle: CSSProperties;
  monitoringAdherenceMessage: CSSProperties;
  monitoringAdherenceStatus: CSSProperties;
  monitoringAdherenceDate: CSSProperties;
  operationalActionsSubTitle: CSSProperties;
  operationalActionsDateTime: CSSProperties;
  monitoringPeriodSubHeadings: CSSProperties;
  monitoringPeriodStartDate: CSSProperties;
  operationsPatientInfoTitle: CSSProperties;
  operationsPatientInfoAge: CSSProperties;
  operationsPatientInfoContent: CSSProperties;
  operationDetailsSliderTab: CSSProperties;
}

declare module "@mui/material/styles/createPalette" {
  interface Palette extends ExtendedPalette {}
  interface PaletteOptions extends ExtendedPalette {}
}
declare module "@mui/material/styles" {
  interface TypographyVariants extends ExtendedTypographyVariants {}
  // allow configuration using `createTheme`
  interface TypographyVariantsOptions extends ExtendedTypographyVariants {}
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    patientName: true;
    patientDetails: true;
    riskAssessmentHeading: true;
    riskAssessmentUpdate: true;
    widgetHeadings: true;
    actionsCommentsList: true;
    dataStatusLabels: true;
    historyTableHeadings: true;
    historyTableCells: true;
    operationClinicalDetails: true;
    headerText: true;
    badgeText: true;
    dropdownFilters: true;
    bubbleFilterDropdown: true;
    bubbleFilterSearch: true;
    tableHeader: true;
    tableContent: true;
    tooltipTitle: true;
    tooltipContent: true;
    tooltipEmailContent: true;
    operationsDetailsTableSubHeading: true;
    devicesTitle: true;
    devicesSmallText: true;
    devicesContent: true;
    devicesButtonText: true;
    componentTitle: true;
    operationsDataCollectionMonitoringPeriodTitle: true;
    operationsDataCollectionBehindText: true;
    operationsDataCollectionBehindTitle: true;
    operationsDataCollectionBehindContent: true;
    enrollmentStatusEnrolledDetails: true;
    enrollmentStatusHistoryDetails: true;
    healthDataTitle: true;
    healthDataSubTitle: true;
    componentContent: true;
    monitoringAdherenceTitle: true;
    monitoringAdherenceMessage: true;
    monitoringAdherenceStatus: true;
    monitoringAdherenceDate: true;
    operationalActionsSubTitle: true;
    operationalActionsDateTime: true;
    monitoringPeriodSubHeadings: true;
    monitoringPeriodStartDate: true;
    operationsPatientInfoTitle: true;
    operationsPatientInfoAge: true;
    operationsPatientInfoContent: true;
    operationDetailsSliderTab: true;
  }
}

export const theme = createTheme({
  typography: {
    fontFamily: ["Inter"].join(","),
    body1: {
      color: "#1A1A1A",
    },
    body2: {
      color: "rgba(26,26,26,0.5)",
    },
    patientName: {
      color: HEADING_COLOR,
      fontWeight: 500,
      fontSize: "16px",
      lineHeight: "32px",
      fontFamily: "Inter",
    },
    patientDetails: {
      fontWeight: 500,
      fontSize: "16px",
      lineHeight: "28px",
      color: "rgba(26, 26, 26, 0.5)",
      fontFamily: "Inter",
    },
    riskAssessmentHeading: {
      fontWeight: 700,
      fontSize: "16px",
      lineHeight: "22px",
      color: "#1A1A1A",
      fontFamily: "Inter",
    },
    riskAssessmentUpdate: {
      fontWeight: 400,
      fontSize: "12px",
      lineHeight: "14px",
      color: HEADING_COLOR,
      fontFamily: "Inter",
    },
    widgetHeadings: {
      fontWeight: 600,
      fontSize: "18px",
      lineHeight: "30px",
      color: "#1A1A1A",
      fontFamily: "Inter",
    },
    actionsCommentsList: {
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "22px",
      color: "#000000",
      fontFamily: "Inter",
    },
    dataStatusLabels: {
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "14.94px",
      color: "#000000",
      fontFamily: "Inter",
    },
    historyTableHeadings: {
      fontWeight: 700,
      fontSize: "14px",
      lineHeight: "20px",
      fontFamily: "Inter",
    },
    historyTableCells: {
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "20px",
      fontFamily: "Inter",
    },
    operationClinicalDetails: {
      fontWeight: 500,
      fontSize: "14px",
      lineHeight: "20px",
    },
    headerText: {
      fontWeight: 500,
      fontSize: "16px",
      lineHeight: "24px",
      color: "#1A1A1A",
    },
    badgeText: {
      fontWeight: 400,
      fontSize: "10px",
      lineHeight: "12px",
      color: "#FFFFFF",
    },
    dropdownFilters: {
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "18px",
      fontFamily: "Inter",
    },
    bubbleFilterDropdown: {
      fontWeight: 500,
      fontSize: "14px",
      lineHeight: "16px",
      fontFamily: "Inter",
      color: "#141414",
    },
    bubbleFilterSearch: {
      fontWeight: 500,
      fontSize: "14px",
      lineHeight: "16px",
      fontFamily: "Inter",
      color: "#71717A",
    },
    tableHeader: {
      fontSize: "14px",
      fontWeight: 600,
      lineHeight: "16px",
      color: "#000000",
    },
    tableContent: {
      fontSize: "14px",
      fontWeight: 400,
      color: "#000000",
    },
    tooltipTitle: {
      fontSize: "14px",
      fontWeight: 700,
      lineHeight: "20px",
      color: "#1A1A1A",
    },
    tooltipEmailContent: {
      fontSize: "14px",
      fontWeight: 500,
      lineHeight: "20px",
      color: "#3479E9",
      textDecoration: "underline",
    },
    tooltipContent: {
      fontSize: "14px",
      fontWeight: 500,
      lineHeight: "20px",
      color: "#1A1A1A",
    },
    operationsDetailsTableSubHeading: {
      fontSize: "16px",
      lineHeight: "24px",
      fontWeight: 700,
      color: "#000000",
    },
    devicesTitle: {
      fontWeight: "700",
      fontSize: "16px",
      lineHeight: "24px",
      color: "#27272A",
    },
    devicesSmallText: {
      fontWeight: "400",
      fontSize: "12px",
      lineHeight: "16px",
      color: "#27272A",
    },
    devicesContent: {
      fontWeight: "400",
      fontSize: "16px",
      lineHeight: "24px",
      color: "#27272A",
    },
    devicesButtonText: {
      fontSize: "14px",
      lineHeight: "20px",
      fontWeight: 600,
      color: "#FFFFFF",
    },
    componentTitle: {
      fontSize: "16px",
      fontWeight: 700,
      lineHeight: "24px",
      color: "#1A1A1A",
    },
    operationsDataCollectionMonitoringPeriodTitle: {
      fontSize: "13px",
      lineHeight: "16px",
      fontWeight: 700,
      color: "#000000",
    },
    operationsDataCollectionBehindText: {
      fontSize: "16px",
      lineHeight: "24px",
      fontWeight: 400,
      color: "#141414",
    },
    operationsDataCollectionBehindTitle: {
      fontSize: "14px",
      lineHeight: "16px",
      fontWeight: 400,
      color: "#616060",
    },
    operationsDataCollectionBehindContent: {
      fontSize: "14px",
      lineHeight: "16px",
      fontWeight: 700,
      color: "#616060",
    },
    enrollmentStatusEnrolledDetails: {
      fontSize: "14px",
      lineHeight: "20px",
      fontWeight: 400,
      color: "#616060",
    },
    enrollmentStatusHistoryDetails: {
      fontSize: "14px",
      lineHeight: "20px",
      fontWeight: 400,
      color: "#000000",
    },
    healthDataTitle: {
      fontSize: "18px",
      lineHeight: "32px",
      fontWeight: 600,
      color: "#1A1A1A",
    },
    healthDataSubTitle: {
      fontSize: "15px",
      fontWeight: 700,
      lineHeight: "19px",
    },
    componentContent: {
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "20px",
    },
    monitoringAdherenceTitle: {
      fontSize: "16px",
      lineHeight: "32px",
      fontWeight: 600,
      color: "#1A1A1A",
    },
    monitoringAdherenceMessage: {
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "24px",
      color: "#1A1A1A",
    },
    monitoringAdherenceStatus: {
      fontSize: "15px",
      fontWeight: 400,
      lineHeight: "30px",
      color: "#1A1A1A",
    },
    monitoringAdherenceDate: {
      fontSize: "12px",
      lineHeight: "16px",
      fontWeight: 400,
      color: "#1A1A1A",
    },
    operationalActionsSubTitle: {
      fontSize: "14px",
      lineHeight: "16px",
      fontWeight: 600,
      color: "#1A1A1A",
    },
    operationalActionsDateTime: {
      fontSize: "12px",
      fontWeight: 400,
      lineHeight: "16px",
      color: "#000000",
    },
    monitoringPeriodSubHeadings: {
      fontSize: "13px",
      lineHeight: "16px",
      fontWeight: 700,
      color: "#616060",
    },
    monitoringPeriodStartDate: {
      fontSize: "13px",
      lineHeight: "16px",
      fontWeight: 400,
      color: "#616060",
    },
    operationsPatientInfoTitle: {
      fontSize: "18px",
      fontWeight: 700,
      lineHeight: "34px",
      color: "#141414",
    },
    operationsPatientInfoAge: {
      fontSize: "18px",
      fontWeight: 500,
      lineHeight: "30px",
      color: "rgba(26, 26, 26, 0.5)",
    },
    operationsPatientInfoContent: {
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "16px",
      color: "#616060",
    },
    operationDetailsSliderTab: {
      background: "blue",
    },
  },
  palette: {
    diagnosticTestChart: {
      current: "#2D63B3",
      previous: "#7EC4F0",
    },
    black: {
      light2: "rgba(26, 26, 26, 0.5)",
      light: "rgba(0, 0, 0, 0.87)",
      main: BLACK,
    },
    pink: {
      main: PINK,
    },
    blue: {
      main: BLUE,
      light: BLUE_LIGHT,
      dark: BLUE_DARK,
      text: BLUE_TEXT,
    },
    green: {
      main: GREEN,
      light: GREEN_APPLE,
      light2: GREEN_LIGHTEST,
    },
    gray: {
      dark2: DARK_GRAY2,
      dark: DARK_GRAY,
      main: GRAY,
      light: GRAY_LIGHT_SILVER,
      light2: GRAY_BRIGHT,
    },
    yellow: {
      main: YELLOW,
    },
    red: {
      main: RED,
    },
    lineColor: {
      main: LINE_COLOR,
      dark: "#F0F0F0",
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          background: "#FFFFFF",
          border: `1px solid ${LINE_COLOR}`,
          boxShadow: "0px 1px 3px rgb(0 0 0 / 8%)",
          borderRadius: "8px",
          padding: "6px 12px",
          color: "rgba(26, 26, 26, 0.7)",
          textTransform: "none",
          fontStyle: "normal",
          fontWeight: 500,
          fontSize: "14px",
          lineHeight: "24px",
          "& fieldset": {
            border: 0,
          },
          "&:hover": {
            backgroundColor: "inherit",
            color: "inherit",
            boxShadow: "inherit",
          },
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: "outlined" },
          style: {
            background: "#FFFFFF",
            border: `1px solid ${LINE_COLOR}`,
            boxShadow: "0px 1px 3px rgb(0 0 0 / 8%)",
            borderRadius: "8px",
            padding: "6px 12px",
            color: "rgba(26, 26, 26, 0.7)",
            textTransform: "none",
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: "14px",
            lineHeight: "24px",
            "&:hover": {
              backgroundColor: "inherit",
              color: "inherit",
              boxShadow: "inherit",
            },
          },
        },
      ],
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          color: DARK_GRAY,
          backgroundColor: "white",
          borderRadius: "8px",
          border: "1px solid #D4D4D8",
          padding: "10px",
          margin: 0,
          fontSize: "14px",
          fontWeight: "400",
          maxWidth: "100%",
          "& .MuiTooltip-arrow": {
            "&::before": {
              color: "#FDFDFD",
              border: "1px solid #D4D4D8",
            },
          },
        },
      },
    },
    MuiPagination: {
      styleOverrides: {
        root: {
          "& .MuiPagination-ul > li > button": {
            borderRadius: "8px",
            height: "28px",
            width: "28px",
            borderColor: LINE_COLOR,
            color: "rgba(26, 26, 26, 0.5)",
            margin: "0 2px",
          },
          "& .MuiPagination-ul > li button.Mui-disabled": {
            background: LINE_COLOR,
            opacity: 0.3,
          },
          "& .MuiPagination-ul > li > button.Mui-selected": {
            color: "#1A1A1A",
          },
          "& .MuiPagination-ul > li > button.MuiPaginationItem-text.Mui-selected":
            {
              background: "#FFFFFF",
              border: `1px solid ${LINE_COLOR}`,
            },
          "& .MuiPagination-ul > li:first-of-type button": {
            border: `1px solid ${LINE_COLOR}`,
            boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
            height: "40px",
            width: "40px",
            color: "#1A1A1A",
          },
          "& .MuiPagination-ul > li:last-child button": {
            border: `1px solid ${LINE_COLOR}`,
            boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
            height: "40px",
            width: "40px",
            color: "#1A1A1A",
          },
        },
      },
    },
  },
});
