// import { useState } from 'react'
import "./App.css";
import { AppContext } from "./context/contextApi";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Feed from "./components/Feed";
import SearchResults from "./components/SearchResults";
import VideoDetail from "./components/VideoDetail";

function App() {
  return (
    <AppContext>
      <BrowserRouter>
        <div className="flex flex-col h-full">
          <Header />
          <Routes>
            <Route path="/" exact element={<Feed />} />
            <Route
              path="/searchResults/:searchQuery"
              element={<SearchResults />}
            />
            <Route path="/video/:id" element={<VideoDetail />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AppContext>
  );
}

export default App;
