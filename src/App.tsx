import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Button } from "./components/ui/button";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <p className="text-4xl text-blue-500">
                Welcome to Sports Roadmap DNS Test
              </p>
              <Button>Login</Button>
            </>
          }
        />
        <Route path="/profile" element={<p>Profile Page</p>} />
      </Routes>
    </Router>
  );
}

export default App;
