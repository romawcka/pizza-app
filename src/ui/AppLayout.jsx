import { Outlet } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import { useIsLoading } from "../hooks/useStatusHook";
import Header from "./Header";
import Spinner from "./Spinner";

export const AppLayout = () => {
  const isLoading = useIsLoading();

  return (
    <div className="layout">
      <Header />
      {isLoading && <Spinner />}
      <main>
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
};
