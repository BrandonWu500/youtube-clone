import styled from 'styled-components';

const Container = styled.div`
  margin-left: ${(props) =>
    props.expand ? 'var(--sidebar-width)' : 'var(--sidebar-short-width)'};
  background-color: ${({ theme }) => theme.bgSecondary};
  padding: 1em 5em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - var(--topbar-height));
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  padding: 1em 2em;
  border: 2px solid ${({ theme }) => theme.bgSoft};
  background-color: ${({ theme }) => theme.bg};
`;
const Title = styled.h1`
  color: ${({ theme }) => theme.textSecondary};
`;
const Subtitle = styled.h2`
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;
const Input = styled.input`
  width: 100%;
  font-size: 1rem;
  padding: 0.5em;
  border: 1px solid ${({ theme }) => theme.bgSoft};
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
  &::placeholder {
    color: ${({ theme }) => theme.textSoft};
  }
`;
const Button = styled.button`
  font-size: 1.1rem;
  padding: 0.5em 1em;
  background-color: ${({ theme }) => theme.accent};
  color: ${({ theme }) => theme.bgSecondary};
  border: 0;
`;
const Footer = styled.div`
  display: flex;
  gap: 2em;
  justify-content: space-between;
  margin-top: 1em;
  color: ${({ theme }) => theme.text};
`;
const Left = styled.div``;
const Right = styled.div`
  display: flex;
  gap: 1em;
`;
const FooterLink = styled.span``;

export const Signin = ({ isSidebarExpanded }) => {
  return (
    <Container expand={isSidebarExpanded}>
      <Form>
        <Title>Sign in</Title>
        <Subtitle>to continue to YouTube Clone</Subtitle>
        <Input placeholder="username" />
        <Input placeholder="password" type="password" />
        <Button>Sign in</Button>
        <Title>or</Title>
        <Input placeholder="username" />
        <Input placeholder="email" type="email" />
        <Input placeholder="password" type="password" />
        <Input placeholder="confirm password" type="password" />
        <Button>Sign up</Button>
      </Form>
      <Footer>
        <Left>
          <FooterLink>English (United States)</FooterLink>
        </Left>
        <Right>
          <FooterLink>Help</FooterLink>
          <FooterLink>Privacy</FooterLink>
          <FooterLink>Terms</FooterLink>
        </Right>
      </Footer>
    </Container>
  );
};
