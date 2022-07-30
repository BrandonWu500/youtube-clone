import styled from 'styled-components';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import DownloadIcon from '@mui/icons-material/Download';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import { Link } from 'react-router-dom';

const Container = styled.div`
  padding: 0 1em 1em 1em;
  height: 100vh;
  position: fixed;
  top: var(--topbar-height);
  bottom: 0;
  left: 0;
  width: var(--sidebar-short-width);
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.textSecondary};
`;

const Nav = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;
const NavItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.bgSoft};
    color: ${({ theme }) => theme.bg};
  }
`;
const NavItemIcon = styled.span``;
const NavItemText = styled.span``;

export const Sidebar = ({ darkMode, setDarkMode }) => {
  return (
    <Container>
      <Nav>
        <Link to="/">
          <NavItem>
            <NavItemIcon>
              <HomeIcon />
            </NavItemIcon>
            <NavItemText>Home</NavItemText>
          </NavItem>
        </Link>
        <NavItem>
          <NavItemIcon>
            <ExploreIcon />
          </NavItemIcon>
          <NavItemText>Explore</NavItemText>
        </NavItem>
        <NavItem>
          <NavItemIcon>
            <SubscriptionsIcon />
          </NavItemIcon>
          <NavItemText>Subscriptions</NavItemText>
        </NavItem>
        <NavItem>
          <NavItemIcon>
            <YouTubeIcon />
          </NavItemIcon>
          <NavItemText>Originals</NavItemText>
        </NavItem>
        <NavItem>
          <NavItemIcon>
            <LibraryMusicIcon />
          </NavItemIcon>
          <NavItemText>Music</NavItemText>
        </NavItem>
        <NavItem>
          <NavItemIcon>
            <VideoLibraryIcon />
          </NavItemIcon>
          <NavItemText>Videos</NavItemText>
        </NavItem>
        <NavItem>
          <NavItemIcon>
            <DownloadIcon />
          </NavItemIcon>
          <NavItemText>Downloads</NavItemText>
        </NavItem>
        <NavItem onClick={() => setDarkMode(!darkMode)}>
          <NavItemIcon>
            <SettingsBrightnessIcon />
          </NavItemIcon>
          <NavItemText>{darkMode ? 'Light' : 'Dark'} Mode</NavItemText>
        </NavItem>
      </Nav>
    </Container>
  );
};
