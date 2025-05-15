import React from "react";

import { FormControl, InputAdornment, InputLabel } from "@mui/material";

import { SearchIcon } from "assets/icons";
import { buttonTypes } from "component/buttons/constants/buttonTypes";
import IconButton from "component/buttons/IconButton";
import { useTableSearch } from "component/table/hooks/useTableSearch";
import { ITableSearch } from "component/table/interfaces";
import { Input } from "component/table/styles/TableSearch";
import TableSearchDrawer from "component/table/TableSearchDrawer";

const TableSearch = ({
  showSearchDrawer = false,
  styles,
}: ITableSearch): React.ReactElement => {
  const { drawerIsOpen, setDrawerIsOpen, toggleDrawer } = useTableSearch();

  return (
    <div style={{ position: "relative" }}>
      <FormControl variant="outlined">
        <InputLabel htmlFor="outlined-adornment">Search</InputLabel>
        <Input
          id="outlined-adornment"
          type={"text"}
          onClick={toggleDrawer}
          sx={{
            ...styles,
          }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                Icon={SearchIcon}
                buttonType={buttonTypes.primary}
                tooltipText="Search"
              />
            </InputAdornment>
          }
        />
      </FormControl>

      {showSearchDrawer && (
        <TableSearchDrawer open={drawerIsOpen} setOpen={setDrawerIsOpen} />
      )}
    </div>
  );
};

export default TableSearch;
