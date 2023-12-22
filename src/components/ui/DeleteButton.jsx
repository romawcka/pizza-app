import { memo } from 'react';
import { useDispatch } from 'react-redux';
import { removeItem } from '../../features/cart/cartSlice';
import Button from './Button';

const DeleteButton = ({ pizzaId }) => {
  const dispatch = useDispatch();
  return (
    <Button onClick={() => dispatch(removeItem(pizzaId))} type="small">
      Delete
    </Button>
  );
};

export default memo(DeleteButton);
