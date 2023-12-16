import { useNavigate, useRouteError } from 'react-router-dom';

const Error = () => {
  const navigate = useNavigate();
  const error = useRouteError();
  const errorData = error.data || error.message;

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{errorData}</p>
      <button onClick={() => navigate(-1)}>&larr; Go back</button>
    </div>
  );
};

export default Error;
