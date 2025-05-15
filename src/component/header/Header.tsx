import IconButton from "component/buttons/IconButton";
import { IHeader } from "./interfaces";
import { AppBar, ToolbarContainer } from "./styles";
import { MenuIcon } from "assets/icons";
import { buttonTypes } from "component/buttons/constants/buttonTypes";
import SettingsMenu from "./SettingMenu";

const Header = ({ open, handleDrawerOpen }: IHeader): React.ReactElement => {
  return (
    <AppBar position="fixed" open={open}>
      <ToolbarContainer open={open}>
        <IconButton
          buttonType={buttonTypes.inherit}
          Icon={MenuIcon}
          edge="start"
          sx={{
            ...(open && { display: "none" }),
          }}
          onClick={handleDrawerOpen}
        ></IconButton>
        <SettingsMenu />
      </ToolbarContainer>
    </AppBar>
  );
};
export default Header;
