import logo from "./logo.svg";
import Labs from "./Labs";
import Kanbas from "./Kanbas";
import Signin from "./project/users/signin";
import HelloWorld from "./Labs/a3/HelloWorld";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import StateManagement from "./Lectures/StateManagement";
import Assignment3 from "./Labs/a3";
// import Modules from "./Database/modules";
import Project from "./project";
import Signup from "./project/users/signup";
import Table from "./project/users/table";
import Client from "./project/users/client";
import Account from "./project/users/account";

function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="Kanbas" />} />
          <Route path="/Hello" element={<HelloWorld />} />
          <Route path="/Labs/*" element={<Labs />}>
            
            <Route index element={<Assignment3 />} />

          </Route>
          {/* <Route path="/courses/:courseId" component={<Modules />} /> */}
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/account" element={<Account />} />
          <Route path="/table" element={<Table />} />
          <Route path="/client" element={<client />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
          <Route path="/Lectures" element={<StateManagement />} />
          <Route path="/project/*" element={<Project/>} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
