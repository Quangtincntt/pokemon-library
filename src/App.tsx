import { Routes, Route } from "react-router-dom";
import { Protected } from "./Context/Protected";
import Game from "./pages/game";
import Login from "./pages/login/index";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/seeLibrary"
        element={
          <Protected>
            <Game />
          </Protected>
        }
      />
    </Routes>
  );
}

export default App;
