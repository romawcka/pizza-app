import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AppLayout from './components/ui/AppLayout';
import Error from './components/ui/Error';
import Home from './components/ui/Home';
import Cart from './features/cart/Cart';
import Menu, { loader as menuLoader } from './features/menu/Menu';
import CreateOrder, {
  action as orderAction,
} from './features/order/CreateOrder';
import Order, { loader as orderLoader } from './features/order/Order';
import { action as prioritizeAction } from './features/order/UpdatePriority';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/menu',
        element: <Menu />,
        loader: menuLoader,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/order/new',
        element: <CreateOrder />,
        action: orderAction,
      },
      {
        path: '/order/:orderId',
        element: <Order />,
        action: prioritizeAction,
        loader: orderLoader,
      },
    ],
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
