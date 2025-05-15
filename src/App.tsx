import "App.css";
import { ThemeProvider } from "@mui/material";
import Theme from "assets/style/Theme";
import AuthBox from "component/auth/AuthBox";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <AuthBox></AuthBox>
    </ThemeProvider>
  );
}

export default App;
