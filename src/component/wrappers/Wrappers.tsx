import { BrowserRouter } from "react-router-dom";

export const Wrapper = ({
  children,
}: {
  children: React.ReactElement;
}): React.ReactElement => <BrowserRouter>{children}</BrowserRouter>;
