import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { formatCurrency } from '../../utils/helpers';
import { getCart } from './cartSlice';

const CartOverview = () => {
  const store = useSelector(getCart);
  const orderQty = store.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = store.reduce((sum, item) => sum + item.totalPrice, 0);
  const qtyPizza = orderQty > 1 ? 'pizzas' : 'pizza';

  if (!orderQty) return null;

  return (
    <div className="flex flex-row items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>
          {orderQty} {qtyPizza}
        </span>
        <span>{formatCurrency(totalPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
};

export default CartOverview;
