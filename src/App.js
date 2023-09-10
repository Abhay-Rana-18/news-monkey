import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";

// import * as ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = (props) => {
  const pageSize = 9;
  const apiKey = process.env.REACT_APP_NEWS_API;
  let [progress, setProgress] = useState(0);

  

  return (
    <BrowserRouter>
      <LoadingBar color="#f11946" progress={progress} height={3} />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div>
              <Navbar />
              <News
                setProgress={setProgress}
                pageSize={pageSize}
                country="in"
                apiKey={apiKey}
                key="general"
                category="general"
              />
            </div>
          }
        />
        <Route
          exact
          path="/about"
          element={
            <div>
              <Navbar />
              <News
                setProgress={setProgress}
                pageSize={pageSize}
                country="in"
                apiKey={apiKey}
                key="about"
                category="general"
              />
            </div>
          }
        />
        <Route
          exact
          path="/business"
          element={
            <div>
              <Navbar />
              <News
                setProgress={setProgress}
                pageSize={pageSize}
                country="in"
                apiKey={apiKey}
                key="business"
                category="business"
              />
            </div>
          }
        />
        <Route
          exact
          path="/entertainment"
          element={
            <div>
              <Navbar />
              <News
                setProgress={setProgress}
                pageSize={pageSize}
                country="in"
                apiKey={apiKey}
                key="entertainment"
                category="entertainment"
              />
            </div>
          }
        />
        <Route
          exact
          path="/health"
          element={
            <div>
              <Navbar />
              <News
                setProgress={setProgress}
                pageSize={pageSize}
                country="in"
                apiKey={apiKey}
                key="health"
                category="health"
              />
            </div>
          }
        />
        <Route
          exact
          path="/science"
          element={
            <div>
              <Navbar />
              <News
                setProgress={setProgress}
                pageSize={pageSize}
                country="in"
                apiKey={apiKey}
                key="science"
                category="science"
              />
            </div>
          }
        />
        <Route
          exact
          path="/sports"
          element={
            <div>
              <Navbar />
              <News
                setProgress={setProgress}
                pageSize={pageSize}
                country="in"
                apiKey={apiKey}
                key="sports"
                category="sports"
              />
            </div>
          }
        />
        <Route
          exact
          path="/technology"
          element={
            <div>
              <Navbar />
              <News
                setProgress={setProgress}
                pageSize={pageSize}
                country="in"
                apiKey={apiKey}
                key="technology"
                category="technology"
              />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
