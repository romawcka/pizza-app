import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, redirect, useActionData } from 'react-router-dom';
import Button from '../../components/ui/Button';
import { useIsSubmitting } from '../../hooks/useStatusHook';
import { createOrder } from '../../services/apiRestaurant';
import store from '../../store';
import { formatCurrency } from '../../utils/helpers';
import EmptyCart from '../cart/EmptyCart';
import { clearItems, getCart } from '../cart/cartSlice';
import { fetchAddress, getUser } from '../user/userSlice';

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

const CreateOrder = () => {
  const [withPriority, setWithPriority] = useState(false);
  const dispatch = useDispatch();

  const {
    name,
    status: addressStatus,
    position,
    address,
    error: addressError,
  } = useSelector(getUser);

  const isLoadingGeo = addressStatus === 'loading';
  const isRejectedGeo = addressStatus === 'rejected';

  const cart = useSelector(getCart);
  const totalCartPrice = cart.reduce((sum, item) => sum + item.totalPrice, 0);

  const priorityPrice = withPriority ? totalCartPrice * 0.2 : 0;
  const totalPrice = totalCartPrice + priorityPrice;

  const isSubmitting = useIsSubmitting();
  const formError = useActionData();

  const handleGeoPosition = (e) => {
    e.preventDefault();
    dispatch(fetchAddress());
  };

  return (
    <div className="px-4 py-6">
      {cart.length ? (
        <>
          <h2 className="mb-8 text-xl font-semibold">
            Ready to order? Let&apos;s go!
          </h2>
          <Form method="POST">
            <div className="mb-5 flex  flex-col  gap-2 sm:flex-row sm:items-center">
              <label className="sm:basis-40">First Name</label>
              <input
                type="text"
                name="customer"
                required
                className="input grow"
                defaultValue={name}
              />
            </div>

            <div className="mb-5 flex  flex-col  gap-2 sm:flex-row sm:items-center">
              <label className="sm:basis-40">Phone number</label>
              <div className="grow">
                <input
                  type="tel"
                  name="phone"
                  required
                  className="input w-full"
                />
                {formError && (
                  <p className="mt-2 rounded-lg bg-red-200 p-2 text-center text-xs text-red-600">
                    {formError}
                  </p>
                )}
              </div>
            </div>

            <div className="relative mb-5  flex  flex-col gap-2 sm:flex-row sm:items-center">
              <label className="sm:basis-40">Address</label>
              <div className="grow">
                <input
                  type="text"
                  name="address"
                  required
                  className="input w-full"
                  defaultValue={address}
                  disabled={isLoadingGeo}
                />
                {isRejectedGeo && (
                  <p className="mt-2 rounded-lg bg-red-200 p-2 text-center text-xs text-red-600">
                    {addressError}
                  </p>
                )}
              </div>
              {!address && !isRejectedGeo && (
                <span className="absolute right-1 top-[38px] z-50 sm:right-2 sm:top-[7px]">
                  <Button
                    type="rounded"
                    onClick={handleGeoPosition}
                    disabled={isLoadingGeo}
                  >
                    📍
                  </Button>
                </span>
              )}
            </div>

            <div className="mb-10 flex items-center justify-center gap-4">
              <input
                type="checkbox"
                name="priority"
                id="priority"
                className="h-[20px] w-[20px] rounded-lg accent-yellow-500 focus:outline-none focus:ring focus:ring-yellow-600 focus:ring-offset-2"
                value={withPriority}
                onChange={(e) => setWithPriority(e.target.checked)}
              />
              <label htmlFor="priority" className="font-medium">
                Want to yo give your order priority?
              </label>
            </div>
            <div>
              {/* благодаря этой форме мы скрыто передаем данные их формы в функцию action */}
              <input type="hidden" name="cart" value={JSON.stringify(cart)} />
              <input
                type="hidden"
                name="position"
                value={
                  position.longitude && position.longitude
                    ? JSON.stringify(
                        `${position.latitude}, ${position.longitude}`,
                      )
                    : ''
                }
              />

              <Button type="primary" disabled={isSubmitting || isLoadingGeo}>
                {!isSubmitting
                  ? `Order now for ${formatCurrency(totalPrice)}`
                  : 'Placing your order...'}
              </Button>
            </div>
          </Form>
        </>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === 'true',
  };

  const errors = {};
  if (!isValidPhone(order.phone))
    return (errors.phone = 'Please indicate the correct phone number');
  if (Object.keys(errors).length > 0) return errors;

  const newOrder = await createOrder(order);
  store.dispatch(clearItems());

  return redirect(`/order/${newOrder.id}`);
};

export default CreateOrder;
