import { useSelector } from "react-redux";
import "./App.css";
import { RootState } from "./type";

function App() {
  const allBooks = useSelector((state: RootState) => state.books.all);
  return (
    <div>
      <h2>Great Reads</h2>
      <h4>Total Books: {allBooks.length}</h4>
    </div>
  );
}

export default App;
