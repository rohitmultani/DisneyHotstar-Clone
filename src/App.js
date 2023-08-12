import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Channel from "./components/Pages/Channel/Channel";
import WatchList from "./components/Pages/WatchList/WatchList";
import WatchlistProvider from "./Store/WatchListProvider";
import Home from "./components/Pages/Home/Home";
import Play from "./components/Pages/Play/Play";
import PlayListProvider from "./Store/PlayListProvider";
import Search from "./components/Pages/Search/Search";
import Welcome from "./components/modal/Welcome";
import Tv from "./components/Pages/Tv/Tv";
import Movie from "./components/Pages/Movies/Movies";
import Intro from "./components/Pages/Intro/Intro";
function App() {
  const [isLoad, setLoad] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoad(true);
    }, 4500);
  }, []);
  return (
    <div>
      <PlayListProvider>
        <WatchlistProvider>
          <Routes>
            <Route path="/" element={isLoad ? <Home /> : <Intro />} />
            <Route path="/WatchList" element={<WatchList />} />
            <Route path="/channel" element={<Channel />} />
            <Route path="/Play/*" element={<Play />} />
            <Route path="/search" element={<Search />} />
            <Route path="/profile" element={<Welcome />} />
            <Route path="/Tv/:any" element={<Tv />} />
            <Route path="/movie/:any" element={<Movie />} />
          </Routes>
        </WatchlistProvider>
      </PlayListProvider>
    </div>
  );
}

export default App;
