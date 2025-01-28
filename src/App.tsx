import { BrowserRouter, Routes, Route } from "react-router-dom";
import Wrapper from "./pages/Wrapper";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/register"
          element={
            <Wrapper>
              <Register />
            </Wrapper>
          }
        />
        <Route
          path="/login"
          element={
            <Wrapper>
              <Login />
            </Wrapper>
          }
        />
        <Route
          path="/dashboard"
          element={
            <Wrapper>
              <Dashboard />
            </Wrapper>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
