import { useSelector } from 'react-redux';
import CreateUser from '../../features/user/CreateUser';
import Button from './Button';

const Home = () => {
  const name = useSelector((store) => store.user.name);
  return (
    <div className="my-10 text-center sm:my-16">
      <h1 className="font-pizza mb-8 text-xl font-semibold md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {!name ? (
        <CreateUser />
      ) : (
        <Button to="/menu" type="primary">
          Go to the menu, {name}
        </Button>
      )}
    </div>
  );
};

export default Home;
