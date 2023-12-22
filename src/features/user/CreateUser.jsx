import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/ui/Button';
import { createName } from './userSlice';

const CreateUser = () => {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username) return;
    dispatch(createName(username));
    navigate('/menu');
    setUsername('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4 text-sm text-stone-600 md:text-base">
        👋 Welcome! Please start by telling us your name:
      </p>
      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input mb-5 w-72"
      />

      {username !== '' && (
        <div>
          <Button type={'primary'}>Start ordering</Button>
        </div>
      )}
    </form>
  );
};

export default CreateUser;
