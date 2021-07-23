import "./Styles/App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import AllBooks from "./Components/AllBooks/AllBooks";
import ReadingList from "./Components/Pages/ReadingList";
import BookDetails from "./Components/Pages/BookDetails";
import CompletedList from "./Components/Pages/CompletedList";
import Footer from "./Components/Footer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadLocalData } from "./Redux/Actions/bookActions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    // const data = localStorage.getItem("data");
    // console.log(JSON.parse(data));
    // const saveData = localStorage.getItem('books');
    // if(saveData){
    //   dispatch(loadLocalData(saveData))
    // }
  }, []);
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <AllBooks />
        </Route>
        <Route path="/readinglist">
          <ReadingList />
        </Route>
        <Route path="/details/:id">
          <BookDetails />
        </Route>
        <Route path="/dashboard">
          <main>
            <h3>Welcome Back</h3>
          </main>
        </Route>
        <Route path="/completedlist">
          <CompletedList />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
