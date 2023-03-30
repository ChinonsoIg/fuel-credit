import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import Landing from "./pages/Landing";
import ErrorBoundary from "./components/ErrorBoundary";
import RequireAuth from "./features/auth/RequireAuth";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route>
            <Route index element={<Landing />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>

          <Route element={<RequireAuth />} >
            <Route path="home" element={<Dashboard />} />
            <Route path="*" element={<ErrorBoundary />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;