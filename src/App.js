import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserStore } from "./context/UserContext";
import Notifications from "./pages/Notifications";
import Post from "./pages/Post";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <UserStore>
      <BrowserRouter>
        <Routes>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/post" element={<Post />} />
          <Route path="*" element={<p>Not found!</p>} />
        </Routes>
      </BrowserRouter>
    </UserStore>
  );
}

export default App;
