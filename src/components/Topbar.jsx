import styled from 'styled-components';
import logo from '../images/logo.png';
import MenuIcon from '@mui/icons-material/Menu';
import { SigninBtn } from './SigninBtn';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

const Container = styled.div`
  position: sticky;
  top: 0;
  height: var(--topbar-height);
  width: 100%;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.textSecondary};
  z-index: 99;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  padding-right: 2em;
`;
const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
  padding: 1em 0;
  margin-left: 2.5em;
`;
const NavToggle = styled.button`
  background-color: transparent;
  border: 0;
  border-radius: 50%;
  color: inherit;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
`;
const LogoImg = styled.img`
  width: 3rem;
  height: 2rem;
`;
const LogoTitle = styled.h2``;
const Center = styled.div``;
const Right = styled.div`
  justify-self: end;
`;
const Search = styled.div`
  display: flex;
  align-items: center;
`;
const SearchInput = styled.input`
  font-size: 1.5rem;
  padding: 0.5em;
  width: 80%;
  height: 2em;
  border: 1px solid ${({ theme }) => theme.bgSoft};
`;
const SearchBtn = styled.button`
  font-size: 1.5rem;
  padding: 0.5em 1em;
  border: 0;
  width: 20%;
  height: 2em;
  background-color: ${({ theme }) => theme.bgSoft};
`;

export const Topbar = ({ isSidebarExpanded, setIsSidebarExpanded }) => {
  return (
    <Container>
      <Left>
        <NavToggle onClick={() => setIsSidebarExpanded(!isSidebarExpanded)}>
          <MenuIcon fontSize="large" />
        </NavToggle>
        <Link to="/">
          <Logo>
            <LogoImg src={logo} />
            <LogoTitle>Youtube Clone</LogoTitle>
          </Logo>
        </Link>
      </Left>
      <Center>
        <Search>
          <SearchInput type="search" placeholder="Search" />
          <SearchBtn>
            <SearchIcon fontSize="inherit" />
          </SearchBtn>
        </Search>
      </Center>
      <Right>
        <Link to="/signin">
          <SigninBtn />
        </Link>
      </Right>
    </Container>
  );
};
