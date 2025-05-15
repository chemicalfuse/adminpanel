import React from "react";

import { IconButton as MuiIconButton, Tooltip } from "@mui/material";
import clsx from "clsx";
import { useCommonStyle } from "./styles";
import { IIconButton } from "./interfaces";

const IconButton = (props: IIconButton): React.ReactElement => {
  const classes = useCommonStyle(props);

  const { tooltipText, Icon, fontSize, buttonType, ...rest } = props;

  const icon = (
    <MuiIconButton
      {...rest}
      className={clsx(classes.iconButton, rest.buttonClassName)}
      color={buttonType}
    >
      <Icon
        fontSize={fontSize ? fontSize : "default"}
        className={clsx(classes.icon, rest.iconClassName)}
      />
    </MuiIconButton>
  );

  if (tooltipText)
    return (
      <Tooltip className={clsx(rest.tooltipClassName)} title={tooltipText}>
        {icon}
      </Tooltip>
    );

  return icon;
};

export default IconButton;

IconButton.displayName = "IconButton";
