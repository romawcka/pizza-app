import { memo } from "react";
import { formatCurrency } from '../../utils/helpers';
import Button from "../../components/ui/Button";

const CartItem = ({ item }) => {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex flex-row items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <Button type={'small'}>Delete</Button>
      </div>
    </li>
  );
}

export default memo(CartItem);
