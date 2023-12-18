import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchOrder = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  };

  return (
    <form onSubmit={handleChange}>
      <input
        className="w-28 rounded-md bg-yellow-200 px-4 py-2 text-sm italic transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-600 focus:ring-opacity-50 sm:w-64 sm:focus:w-72"
        placeholder="Search for the order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
};
export default SearchOrder;
