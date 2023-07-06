import * as React from "react";
import styled from "@emotion/styled";
import { Box } from "@mui/system";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowDropDown from "../../../Images/arrow-drop-down.svg";
import { theme } from "../../../utils/theme.ts";
import { Menu, MenuItem, Typography } from "@mui/material";
import { useSessionUser } from "../../../hooks/index.ts";
import { useAuth0 } from "@auth0/auth0-react";
import config from "../../../app.config.ts";
import { postLogout } from "../../../utils/utils.ts";

export enum UserRole {
  USER = "USER",
}

const UserDetailBox = styled(Box)`
  float: right;
`;
const StyledAvatar = styled(Avatar)`
  & > svg {
    width: 46px;
    height: 46px;
    background: ${theme.palette.lineColor.main};
  }
`;
const StyledArrowDropDown = styled.img`
  width: 13;
  height: 7;
  font-size: 2.2rem;
  margin-left: 10px;
  transition: transform 100ms ease;
  cursor: pointer;
`;

interface SettingOption {
  label: string;
  code: string;
  link?: string;
  type: "link" | "function";
  role?: UserRole;
}
const SETTINGS: SettingOption[] = [
  {
    label: "Logout",
    code: "logout",
    type: "function",
  },
];

function ProfileDetail() {
  const { user, logout: authLogout } = useAuth0();
  const { data: sessionUser } = useSessionUser();
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const filteredSettings = React.useMemo(() => {
    const roleKey = Object.keys(user || {}).find((key) => key.match("roles$"));
    return SETTINGS.filter((item) =>
      item.role ? roleKey && user?.[roleKey]?.includes(item.role) : true
    );
  }, [user]);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleLogout = async () => {
    try {
      await authLogout({
        logoutParams: {
          returnTo: config.auth0.redirectUri,
        },
      });
      postLogout();
    } catch (e) {
      console.log("error while logout : ", e);
    }
  };

  const handleCloseUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(null);
    const optionCode = event.currentTarget.getAttribute("value");
    if (optionCode === "logout") {
      handleLogout();
    }
  };

  return (
    <UserDetailBox>
      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
        sx={{ cursor: "pointer" }}
        onClick={handleOpenUserMenu}
      >
        <StyledAvatar sx={{ width: 42, height: 42 }}>
          {user?.picture ? (
            <img
              src={user?.picture || ""}
              width={42}
              height={42}
              alt={user?.name || "user profile"}
            />
          ) : (
            <AccountCircleIcon fontSize="large" />
          )}
        </StyledAvatar>
        <Box>
          <div style={{ display: "flex" }}>
            <Typography
              variant="body1"
              fontWeight={500}
              style={{ verticalAlign: "middle" }}
            >
              {user?.name || sessionUser?.name}
            </Typography>
            <div
              style={{
                color: "#a1a1a9",
                position: "relative",
              }}
            >
              {anchorElUser === null ? (
                <StyledArrowDropDown src={ArrowDropDown} alt="menu options" />
              ) : (
                <StyledArrowDropDown
                  src={ArrowDropDown}
                  style={{
                    transform: "rotate(180deg)",
                  }}
                  alt="menu options"
                />
              )}
            </div>
          </div>
          <Typography variant="body2">
            {user?.email || sessionUser?.email}
          </Typography>
        </Box>
      </Stack>
      <Menu
        sx={{ mt: "45px" }}
        id="user-profile-menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        autoFocus={false}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {filteredSettings.map((setting) => (
          <MenuItem
            id={"user-profile-dropdown-" + setting.code}
            sx={{ width: "130px" }}
            key={setting.code}
            value={setting.code}
            onClick={handleCloseUserMenu}
          >
            <Typography textAlign="center">
              {setting.type === "link" ? (
                <a href={`/${setting.link}`}>{setting.label}</a>
              ) : (
                <>{setting.label}</>
              )}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </UserDetailBox>
  );
}

export default React.memo(ProfileDetail);
