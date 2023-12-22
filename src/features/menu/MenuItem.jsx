import { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/ui/Button';
import ButtonQtyUpdate from '../../components/ui/ButtonQtyUpdate';
import DeleteButton from '../../components/ui/DeleteButton';
import { formatCurrency } from '../../utils/helpers';
import { addItem, getQntOfPizza } from '../cart/cartSlice';

const MenuItem = ({ pizza }) => {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const currentQntById = useSelector(getQntOfPizza(id));
  const dispatch = useDispatch();

  const handleAddItem = () => {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  };

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? 'opacity-60 grayscale' : ''}`}
      />
      <div className="flex flex-1 flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(', ')}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-slate-500">
              Sold out
            </p>
          )}

          {!!currentQntById && (
            <div className="flex flex-row items-center gap-3 sm:gap-8">
              <ButtonQtyUpdate pizzaId={id}>{currentQntById}</ButtonQtyUpdate>
              <DeleteButton pizzaId={id} currentQntById />
            </div>
          )}
          {!soldOut && !currentQntById && (
            <Button onClick={handleAddItem} type={'small'}>
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
};

export default memo(MenuItem);
