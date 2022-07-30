import { Sidebar } from './components/Sidebar';
import './globalStyles.css';
import styled, { ThemeProvider } from 'styled-components';
import { Topbar } from './components/Topbar';
import { useState } from 'react';
import { SidebarExpanded } from './components/SidebarExpanded';
import { Content } from './components/Content';
import { darkTheme, lightTheme } from './utils/Theme';
import { Home } from './pages/Home';
import { Video } from './pages/Video';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Signin } from './pages/Signin';

const Container = styled.div``;

function App() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <BrowserRouter>
          <Topbar
            isSidebarExpanded={isSidebarExpanded}
            setIsSidebarExpanded={setIsSidebarExpanded}
          />
          {isSidebarExpanded ? (
            <SidebarExpanded darkMode={darkMode} setDarkMode={setDarkMode} />
          ) : (
            <Sidebar darkMode={darkMode} setDarkMode={setDarkMode} />
          )}
          <Routes>
            <Route path="/">
              <Route
                index
                element={<Home isSidebarExpanded={isSidebarExpanded} />}
              />
              <Route path="signin" element={<Signin />} />
              <Route path="video">
                <Route
                  path=":id"
                  element={<Video isSidebarExpanded={isSidebarExpanded} />}
                />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;
