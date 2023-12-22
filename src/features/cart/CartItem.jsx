import { memo } from 'react';
import { useSelector } from 'react-redux';
import ButtonQtyUpdate from '../../components/ui/ButtonQtyUpdate';
import DeleteButton from '../../components/ui/DeleteButton';
import { formatCurrency } from '../../utils/helpers';
import { getQntOfPizza } from './cartSlice';

const CartItem = ({ item }) => {
  const { pizzaId, name, quantity, totalPrice } = item;
  const qty = useSelector(getQntOfPizza(pizzaId));

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex flex-row items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <ButtonQtyUpdate pizzaId={pizzaId} className="text-sm font-medium">
          {qty}
        </ButtonQtyUpdate>
        <DeleteButton pizzaId={pizzaId} />
      </div>
    </li>
  );
};

export default memo(CartItem);
