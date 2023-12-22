import { memo } from 'react';
import Button from './Button';
import { useDispatch } from 'react-redux';
import { decQtyItem, incQtyItem } from '../../features/cart/cartSlice';

const ButtonQtyUpdate = ({ pizzaId, children }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-2 md:gap-4">
      <Button type="rounded" onClick={() => dispatch(decQtyItem(pizzaId))}>
        -
      </Button>
      {children}
      <Button type="rounded" onClick={() => dispatch(incQtyItem(pizzaId))}>
        +
      </Button>
    </div>
  );
};

export default memo(ButtonQtyUpdate);
