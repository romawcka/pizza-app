import ButtonLink from '../../components/ui/ButtonLink';

const EmptyCart = () => {
  return (
    <div className="py-3">
      <ButtonLink to="/menu">Back to menu</ButtonLink>

      <p className="mt-4 text-center font-semibold">
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </div>
  );
};

export default EmptyCart;
