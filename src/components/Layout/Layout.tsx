import { FC, Suspense } from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import LoaderRotatingLines from "../LoaderRotatingLines/LoaderRotatingLines";

const Layout: FC = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<LoaderRotatingLines />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
