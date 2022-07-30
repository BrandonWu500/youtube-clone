import styled from 'styled-components';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Container = styled.button`
  display: flex;
  align-items: center;
  gap: 1em;
  border: 3px solid ${({ theme }) => theme.accent};
  color: ${({ theme }) => theme.accent};
  background-color: transparent;
  font-weight: 500;
  font-size: 1.5rem;
  padding: 0.5em;
  cursor: pointer;
`;
const Text = styled.span`
  font-size: 1.2rem;
`;
export const SigninBtn = () => {
  return (
    <Container>
      <AccountCircleIcon fontSize="inherit" />
      <Text>SIGN IN</Text>
    </Container>
  );
};
