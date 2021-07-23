import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../interfaces";

export default function Header() {
  const user = useSelector((state: RootState) => state.user);
  return (
    <header>
      <div className="header_inner">
        <div className="logo">
          <Link to="/">GreatReads</Link>
        </div>
        <div className="menu">
          <Link to="/readinglist">Reading List</Link>
          <Link to="/completedlist">Completed List</Link>
          <Link to="/dashboard">{user.name}</Link>
        </div>
      </div>
    </header>
  );
}
