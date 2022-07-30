import styled from 'styled-components';

const Container = styled.div`
  height: 200vh;
  margin-left: var(--sidebar-width);
  background-color: ${({ theme }) => theme.bgSecondary};
  padding: 1em;
`;

export const Content = () => {
  return <Container>Content</Container>;
};
