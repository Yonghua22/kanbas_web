import logo from "./logo.svg";
import Labs from "./Labs";
import Kanbas from "./Kanbas";
import Signin from "./users/Signin";
import HelloWorld from "./Labs/a3/HelloWorld";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import StateManagement from "./Lectures/StateManagement";
import Assignment3 from "./Labs/a3";
// import Modules from "./Database/modules";

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
          <Route path="/Kanbas/*" element={<Kanbas />} />
          <Route path="/Lectures" element={<StateManagement />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
