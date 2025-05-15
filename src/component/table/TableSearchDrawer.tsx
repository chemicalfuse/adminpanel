import React, { useContext } from "react";

import { Button, Card, CardActions, ClickAwayListener } from "@mui/material";

import { SearchIcon } from "assets/icons";
import InputsStructure from "component/inputs/InputsStructure";
import { useTableSearchDrawer } from "component/table/hooks/useTableSearchDrawer";
import { ITableContext, ITableSearchDrawer } from "component/table/interfaces";
import { useTableSearchDrawerStyles } from "component/table/styles";
import { TableContext } from "component/table/Table";

const TableSearchDrawer = ({
  open,
  setOpen,
}: ITableSearchDrawer): React.ReactElement => {
  const classes = useTableSearchDrawerStyles();

  const { setFieldValue, searchByFields, emptyFields } = useTableSearchDrawer({
    setOpen,
  });

  const store: ITableContext = useContext(TableContext);
  return (
    <>
      {open && (
        <ClickAwayListener onClickAway={() => setOpen(false)}>
          <Card classes={{ root: classes.root }}>
            <InputsStructure
              fields={store.searchFields}
              setFieldValue={setFieldValue}
              className={classes.fieldWrapper}
              variant="flex"
            />

            <CardActions className={classes.cardActions}>
              <Button
                color="primary"
                onClick={searchByFields}
                startIcon={<SearchIcon />}
              >
                Search
              </Button>
              <Button onClick={emptyFields}>Reset</Button>
            </CardActions>
          </Card>
        </ClickAwayListener>
      )}
    </>
  );
};

export default TableSearchDrawer;
