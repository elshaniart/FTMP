import { BrowserRouter, Routes, Route } from "react-router-dom";
import Wrapper from "./pages/Wrapper";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Onboarding from "./pages/Onboarding";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Wrapper>
              <Home />
            </Wrapper>
          }
        />
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
          path="/onboarding"
          element={
            <Wrapper>
              <Onboarding />
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
