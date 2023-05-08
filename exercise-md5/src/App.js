import logo from "./logo.svg";
import "./App.css";
import Ss1 from "./components/Ss1/ss1";
import Ss2 from "./components/Ss2/ss2";
import Ss3 from "./components/Ss3/ss3";
import Ss4 from "./components/Ss4_FormAndRouter/ss4FormAndRouter";
import Ss5ApiClient from "./components/Ss5_ApiClient/ss5ApiClient";
import ManageBook from "./components/Ss5_ApiClient/manageBook/manageBook";
import Ss6Redux from "./components/Ss6_Redux/Ss6_Redux";
import { Route, Routes } from "react-router-dom";
import ImplemetationReduxThunk from "./components/Ss6_Redux/ImplementationReduxThunk/ImplemetationReduxThunk";
import ListUser from "./components/Ss6_Redux/ImplementationReduxThunk/ListUser";
import Fibonacci from "./components/typescript/fibonaci";

function App() {
  return (
    <div className="App">
      {/* <Ss1 /> */}
      {/* <Ss2 /> */}
      {/* <Ss3 /> */}
      {/* <Ss4 /> */}
      <Ss5ApiClient />
      {/* <Ss6Redux /> */}
      {/* <Fibonacci num={10} /> */}
      {/* <Routes>
        <Route path="*" Component={ImplemetationReduxThunk} />
        <Route path="//user" Component={ListUser} />
      </Routes> */}
    </div>
  );
}

export default App;
