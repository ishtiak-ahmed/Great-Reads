import { useSelector } from "react-redux";
import { RootState } from "../../interfaces";

export default function Dashboard() {
  const { books, user } = useSelector((state: RootState) => state);
  const completedBook = books.all.filter((book) => book.status === "done");
  const readingBook = books.all.filter((book) => book.status === "readList");

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <main>
      <div className="dashboard">
        <h2>Welcome back {user.name}</h2>
        <p className="done_book">
          You have read {completedBook.length} books so far.
        </p>
        <p className="read_book">
          And have {readingBook.length} books in reading list.
        </p>
        <p className="warning">
          <em className="warning">
            Currently we don't have any Backend Server. If you logout, all data
            will be cleared.
          </em>
        </p>
        <button className="logout_btn" onClick={handleLogout}>
          Logout
        </button>

        <div className="about_info">
          <p className="message">
            This Website is built with React, Redux, TypeScript and SASS.
            Currently no Backend server for this one. So I used LocalStorage to
            save user Data.
          </p>
        </div>
      </div>
    </main>
  );
}
