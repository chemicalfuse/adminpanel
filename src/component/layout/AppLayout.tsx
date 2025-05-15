import { Box } from "@mui/material";
import { IAppLayout } from "./interfaces";
import Header from "component/header/Header";
import useAppLayout from "./hooks/useAppLayout";
import { ContentHeader } from "./styles";
import Breadcrumbs from "component/breadcrumbs/Breadcrumbs";
import { useLocation } from "react-router-dom";
import useMediaQuery from "hooks/useMediaQuery";
import { useEffect } from "react";
import Menu from "component/menu/Menu";

const AppLayout = ({ children }: IAppLayout): React.ReactElement => {
  const location = useLocation();
  const { isSm } = useMediaQuery();

  const { open, handleDrawerOpen, handleDrawerClose } = useAppLayout();
  const currentPath = location.pathname.slice(1).toUpperCase();
  useEffect(() => {
    isSm && handleDrawerClose();
  }, [isSm]);

  return (
    <Box sx={{ display: "flex" }}>
      <Header open={open} handleDrawerOpen={handleDrawerOpen} />
      <Menu open={open} handleDrawerClose={handleDrawerClose} />
      <Box component="main" sx={{ flexGrow: 1, p: 3, width: "50%" }}>
        <ContentHeader />
        <Breadcrumbs breadcrumbs={currentPath} />
        {children}
      </Box>
    </Box>
  );
};

export default AppLayout;
