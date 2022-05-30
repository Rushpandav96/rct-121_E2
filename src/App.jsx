import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./Pages/Dashboard";
import { Navbar } from "./Pages/Navbar";
import { PrivateRoute } from "./Pages/PrivateRoute";
import { RegisterPageOne } from "./Pages/RegisterPageOne";
import { RegisterPageTwo } from "./Pages/RegisterPageTwo";

function App() {
  return (
    <div className="App">
      {/* <Navbar></Navbar> */}
      <Routes>
        <Route path="/" element={<Navbar></Navbar>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route
          path="/rpg1"
          element={<RegisterPageOne></RegisterPageOne>}
        ></Route>
        <Route
          path="/rpg2"
          element={<RegisterPageTwo></RegisterPageTwo>}
        ></Route>
        <Route path="/private" element={<PrivateRoute></PrivateRoute>}></Route>
      </Routes>
    </div>
  );
}

export default App;
