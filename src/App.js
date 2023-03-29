import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import Landing from "./pages/Landing";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />}>
            <Route index element={<Landing />} />
          </Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="home" element={<Dashboard />}></Route>
          <Route path="*" element={<ErrorBoundary />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;