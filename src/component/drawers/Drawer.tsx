import React from "react";

import { Drawer as MuiDrawer } from "@mui/material";

import Button from "component/buttons/Button";
import { buttonTypes } from "component/buttons/constants/buttonTypes";
import { IDrawer } from "component/drawers/interfaces";
import { useDrawerStyles } from "component/drawers/styles";
import LoadingComponent from "component/loading/LoadingComponent";

const Drawer = ({
  open,
  children,
  header,
  loading,
  handleClose,
  onSave,
}: IDrawer): React.ReactElement => {
  const classes = useDrawerStyles();

  return (
    <MuiDrawer
      classes={{ root: classes.root }}
      PaperProps={{
        style: { width: "30%", padding: "70px 30px" },
      }}
      anchor="right"
      open={open}
      onClose={handleClose}
    >
      <h3 className={classes.header}>{header}</h3>
      {children}

      <div className={classes.buttonsContainer}>
        <Button
          buttonType={buttonTypes.warning}
          onClick={onSave}
          variant="contained"
          className={classes.button}
        >
          Save
        </Button>
      </div>
      {loading ? <LoadingComponent /> : null}
    </MuiDrawer>
  );
};

export default Drawer;
