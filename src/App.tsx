import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import * as S from "./App.styles";
import Home from "./components/pages/Home";
import Resume from "./components/pages/Resume";
import Stats from "./components/pages/Stats";

function App() {
  return (
    <Router>
      <S.WrapperRouterContainer>
        <S.NavigationMenu>
          <S.NavigationList>
            <S.NavigationListItem>
              <Link to="/">Home</Link>
            </S.NavigationListItem>
            <S.NavigationListItem>
              <Link to="/resume">Resume</Link>
            </S.NavigationListItem>
            <S.NavigationListItem>
              <Link to="/stats">Stats</Link>
            </S.NavigationListItem>
          </S.NavigationList>
        </S.NavigationMenu>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/stats" element={<Stats />} />
        </Routes>
      </S.WrapperRouterContainer>
    </Router>
  );
}

export default App;
