import { Outlet } from "react-router-dom";
import CartOverview from "../../features/cart/CartOverview";
import { useIsLoading } from "../../hooks/useStatusHook";
import Header from "./Header";
import Spinner from './Spinner'

const AppLayout = () => {
  const isLoading = useIsLoading();

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      <Header />
      {isLoading && <Spinner />}
      <div className="overflow-scroll">
        <main className="mx-auto max-w-3xl">
          <Outlet />
        </main>
      </div>
      <CartOverview />
    </div>
  );
};

export default AppLayout