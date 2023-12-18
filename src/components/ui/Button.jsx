import { memo } from 'react';
import { Link } from 'react-router-dom';

const Button = ({ disabled, children, to, type }) => {
  const base =
    'duration-400 text-sm focus:ring inline-block rounded-xl bg-yellow-500 font-semibold uppercase tracking-wide text-slate-800 transition-colors hover:bg-yellow-400 focus:bg-yellow-400 focus:outline-none focus:ring-yellow-400 focus:ring-offset-2 disabled:cursor-not-allowed ';
  const styles = {
    primary: base + ' px-4 py-3 md:px-6 md:py-4',
    small: base + ' px-3.5 py-2 md:px-5 md:py-2.5 text-xs',
    secondary:
      'duration-400 text-sm focus:ring inline-block rounded-xl border-2 border-stone-300 font-semibold uppercase tracking-wide text-slate-500 transition-colors hover:bg-stone-300 hover:text-stone-700 focus:bg-stone-300 focus:outline-none focus:ring-stone-300 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-[10px] md:px-6 md:py-[14px]',
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  return (
    <button className={styles[type]} disabled={disabled}>
      {children}
    </button>
  );
};

export default memo(Button);
