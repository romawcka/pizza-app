import { memo } from 'react';
import { formatCurrency } from '../../utils/helpers';

const OrderItem = ({ item, isLoadingIngredients, ingredients }) => {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="space-y-1 py-3">
      <div className="flex flex-row items-center justify-between gap-4 text-sm">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
      <p className="text-sm capitalize italic text-stone-500">
        {isLoadingIngredients
          ? 'Loading ingredients...'
          : ingredients.join(', ')}
      </p>
    </li>
  );
};

export default memo(OrderItem);
