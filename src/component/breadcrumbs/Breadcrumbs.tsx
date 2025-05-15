import { Typography } from "@mui/material";
import { IBreadcrumbs } from "./interfaces";
import MuiBreadcrumbs from "@mui/material/Breadcrumbs";
const Breadcrumbs = ({ breadcrumbs }: IBreadcrumbs): React.ReactElement => {
  return (
    <MuiBreadcrumbs separator="›" aria-label="breadcrumb">
      <Typography variant="caption"></Typography>
      <Typography variant="caption">{breadcrumbs}</Typography>
    </MuiBreadcrumbs>
  );
};
export default Breadcrumbs;
