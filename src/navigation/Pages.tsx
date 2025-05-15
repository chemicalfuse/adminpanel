import { allowedRoutes, routes } from "assets/constants/routes";
import AppLayout from "component/layout/AppLayout";
import AuthLayout from "component/layout/AuthLayout";
import LoadingComponent from "component/loading/LoadingComponent";
import Games from "pages/Games/Games";
import Login from "pages/Login/Login";
import Users from "pages/Users/Users";
import { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const Pages = (): React.ReactElement => {
  return (
    <Suspense fallback={<LoadingComponent />}>
      {/* <AppLayout>
        <Routes>
          <Route path={routes.index} element={<Navigate to={routes.users} />} />
          <Route path={routes.users} element={<Users />}></Route>
          <Route path={routes.games} element={<Games />}></Route>
        </Routes>
      </AppLayout> */}
      <AuthLayout>
        <Routes>
          <Route path={allowedRoutes.login} element={<Login />} />
        </Routes>
      </AuthLayout>
    </Suspense>
  );
};
export default Pages;
