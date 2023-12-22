import { useSelector } from 'react-redux';

const Username = () => {
  const name = useSelector((store) => store.user.name);
  if (!name) return null;
  return <div className="hidden text-sm font-semibold md:block">{name}</div>;
};

export default Username;
