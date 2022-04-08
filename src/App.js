import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import DashboardMainNavbar from "./DashboardCommonFile/DashboardNav/DashboardMainNavbar";
import { testData } from "./store/test/action";
function App() {
  const data = useSelector((store) => store.test);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(testData("mofasser"));
  }, []);
  console.log(data);
  return (
    <div className="App">
      <Router>
        <DashboardMainNavbar />
      </Router>
    </div>
  );
}

export default App;
