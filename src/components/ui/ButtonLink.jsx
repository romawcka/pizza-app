import { memo } from 'react';
import { Link } from 'react-router-dom';

const ButtonLink = ({children, to}) => {
  return (
    <Link to={to} className="text-sm text-blue-600 hover:text-blue-800">
      &larr; {children}
    </Link>
  );
}

export default memo(ButtonLink);