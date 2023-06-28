import LandingPage from "./components/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import GetStarted from "./components/GetStarted";
import Header from "./components/Navbar";
import MovieDetails from "./components/MovieDetails";
import BrowsePage from "./components/BrowsePage";
import WatchList from "./components/WatchList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<GetStarted />} />
        <Route path="/browse" element={<BrowsePage />} />
        <Route path="/header" element={<Header />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/watchList" element={<WatchList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
