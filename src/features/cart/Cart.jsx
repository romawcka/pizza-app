import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/ui/Button';
import ButtonLink from '../../components/ui/ButtonLink';
import CartItem from './CartItem';
import EmptyCart from './EmptyCart';
import { clearItems, getCart } from './cartSlice';

const Cart = () => {
  const name = useSelector((store) => store.user.name);
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  return (
    <div className="px-4 py-3">
      {cart.length ? (
        <>
          <ButtonLink to={'/menu'}>Back to menu</ButtonLink>

          <h2 className="mt-7 text-xl font-semibold">Your cart, {name}</h2>
          <ul className="mt-3 divide-y divide-stone-200 border-b">
            {cart.map((item) => (
              <CartItem item={item} key={item.pizzaId} />
            ))}
          </ul>
          <div className="mt-6 space-x-3">
            <Button to="/order/new" type={'primary'}>
              Order pizzas
            </Button>
            <Button type="secondary" onClick={() => dispatch(clearItems())}>
              Clear cart
            </Button>
          </div>
        </>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};

export default Cart;
