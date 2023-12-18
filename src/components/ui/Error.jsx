import { useNavigate, useRouteError } from 'react-router-dom';
import ButtonLink from './ButtonLink';

const Error = () => {
  const navigate = useNavigate();
  const error = useRouteError();
  const errorData = error.data || error.message;

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{errorData}</p>
      <ButtonLink onClick={() => navigate(-1)}>Go back</ButtonLink>
    </div>
  );
};

export default Error;
