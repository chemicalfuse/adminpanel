import React, { useContext, useRef } from "react";
import {
  IUseTableSearchDrawer,
  useTableSearchDrawerProps,
} from "../interfaces";
import { TableContext } from "../Table";

export const useTableSearchDrawer = ({
  setOpen,
}: useTableSearchDrawerProps): IUseTableSearchDrawer => {
  const store = useContext(TableContext);
  const timeoutRef = useRef(null);
  const setFieldValue = (value: any, fieldName: string): void => {
    if (timeoutRef.current !== null) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      timeoutRef.current = null;
      store.handleSearchFieldChange(value, fieldName);
    }, 500);
  };
  const searchByFields = (): void => {
    store.searchByFields();
    setOpen(false);
  };
  const emptyFields = (): void => {
    store.resentFieldsValues();
    setOpen(false);
  };

  return {
    setFieldValue,
    searchByFields,
    emptyFields,
  };
};
