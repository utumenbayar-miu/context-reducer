import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserContext from "./context/UserContext";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { UserStore } from "./context/UserContext";

function App() {
  return (
    <UserStore>
      <BrowserRouter>
        <Routes>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="*" element={<p>Not found!</p>} />
        </Routes>
      </BrowserRouter>
    </UserStore>
  );
}

export default App;
