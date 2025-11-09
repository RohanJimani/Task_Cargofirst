import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import Jobs from "./pages/Jobs";
import Profile from "./pages/Profile";
import Analytics from "./pages/Analytics";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/auth" element={<Auth/>} />
        <Route path="/dash" element={<Dashboard/>} />
        <Route path="/jobs" element={<Jobs/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/analytics" element={<Analytics/>} />
        



      </Routes>
    </BrowserRouter>
  );
}

export default App;
