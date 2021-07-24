import "./Styles/App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import AllBooks from "./Components/AllBooks/AllBooks";
import ReadingList from "./Components/Pages/ReadingList";
import BookDetails from "./Components/Pages/BookDetails";
import CompletedList from "./Components/Pages/CompletedList";
import Footer from "./Components/Footer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadLocalData } from "./Redux/Actions/bookActions";
import { loadUser } from "./Redux/Actions/userActions";
import { RootState } from "./interfaces";
import Dashboard from "./Components/Pages/Dashboard";

function App() {
  const dispatch = useDispatch();
  const bookState = useSelector((state: RootState) => state.books);
  // Set user name and save to localstorage
  useEffect(() => {
    if (localStorage.getItem("name")) {
      const name: string = localStorage.getItem("name")!;
      dispatch(loadUser({ id: name, name, email: `${name}@g.com` }));
    } else {
      let name: string = prompt("Please enter your name..")!;
      while (!name) {
        name = prompt("Please enter your name..")!;
      }
      localStorage.setItem("name", name);
      dispatch(loadUser({ id: name, name, email: `${name}@g.com` }));
    }
    const data = localStorage.getItem("data");
    if (data) {
      dispatch(loadLocalData(JSON.parse(data)));
    } else {
      localStorage.setItem("data", JSON.stringify(bookState));
    }
  }, []);
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={AllBooks} />
        <Route path="/readinglist" component={ReadingList} />
        <Route path="/details/:id" component={BookDetails} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/completedlist" component={CompletedList} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
