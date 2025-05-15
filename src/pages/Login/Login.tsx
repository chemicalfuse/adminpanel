import { Stack } from "@mui/material";
import InputPlain from "component/inputs/InputPlain";
import { useLoginStyles } from "./styles";
import Button from "component/buttons/Button";
import { buttonTypes } from "component/buttons/constants/buttonTypes";

const Login = (): React.ReactElement => {
  const classes = useLoginStyles();
  return (
    <>
      <h2>Login</h2>
      <Stack spacing={2}>
        <>
          <InputPlain
            label="Username"
            onChange={(value) => {}}
            value={null}
            className={classes.textField}
          />
          <InputPlain
            type="password"
            label="Password"
            onChange={(value) => {}}
            value={null}
            className={classes.textField}
          />
        </>
        <Button
          disabled={false}
          buttonType={buttonTypes.info}
          onClick={() => {}}
          variant="contained"
        >
          Log In
        </Button>
      </Stack>
    </>
  );
};
export default Login;
