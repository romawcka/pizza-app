import { Link } from "react-router-dom";
import SearchOrder from "../features/order/searchOrder";

const Header = () => {
  return (
    <header>
      <Link to="/">Pizza Day</Link>
      <SearchOrder />
      <p>User Name</p>
    </header>
  );
};
export default Header;
