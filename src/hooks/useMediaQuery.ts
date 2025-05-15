import { Theme } from "@mui/material";
import MuiUseMediaQuery from "@mui/material/useMediaQuery";
import { IUseMediaQUery } from "./interfaces";
const useMediaQuery = (): IUseMediaQUery => {
  const isSm = MuiUseMediaQuery((theme: Theme) => theme.breakpoints.down("md"));
  return {
    isSm,
  };
};
export default useMediaQuery;
