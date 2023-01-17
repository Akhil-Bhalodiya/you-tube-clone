// import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppContext } from "./context/contextApi";
import Header from "./components/Header";
import Feed from "./components/Feed";
import LeftNav from "./components/LeftNav";
import leftNavMenuItem from "./components/LeftNavMenuItem";
import SearchResult from "./components/SearchResult";
import VideoDetail from "./components/VideoDetail";

const App = () => {
  return (
    <AppContext>
      <Router>
        <div className="flex flex-col h-full">
          <Header />
          <Routes>
            <Route path="/" excat element={<Feed />} />
            <Route path="/searchResult/:searchQuery" element={<SearchResult />} />
            <Route path="/video/:id" element={<VideoDetail />} />
          </Routes>
        </div>
      </Router>
    </AppContext>
  );
};
export default App; 
