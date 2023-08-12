import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";

// import * as ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  pageSize = 9;
  apiKey = process.env.REACT_APP_NEWS_API;
  state = {
    progress: 10,
  };
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };

  render() {
    return (
      <BrowserRouter>
        <LoadingBar color="#f11946" progress={this.state.progress} height={3} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div>
                <Navbar />
                <News
                  setProgress={this.setProgress}
                  pageSize={this.pageSize}
                  country="in"
                  apiKey={this.apiKey}
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
                  setProgress={this.setProgress}
                  pageSize={this.pageSize}
                  country="in"
                  apiKey={this.apiKey}
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
                  setProgress={this.setProgress}
                  pageSize={this.pageSize}
                  country="in"
                  apiKey={this.apiKey}
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
                  setProgress={this.setProgress}
                  pageSize={this.pageSize}
                  country="in"
                  apiKey={this.apiKey}
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
                  setProgress={this.setProgress}
                  pageSize={this.pageSize}
                  country="in"
                  apiKey={this.apiKey}
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
                  setProgress={this.setProgress}
                  pageSize={this.pageSize}
                  country="in"
                  apiKey={this.apiKey}
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
                  setProgress={this.setProgress}
                  pageSize={this.pageSize}
                  country="in"
                  apiKey={this.apiKey}
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
                  setProgress={this.setProgress}
                  pageSize={this.pageSize}
                  country="in"
                  apiKey={this.apiKey}
                  key="technology"
                  category="technology"
                />
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    );
  }
}
