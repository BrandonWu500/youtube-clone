import styled from 'styled-components';
import { Card } from '../components/Card';

const Container = styled.div`
  margin-left: ${(props) =>
    props.expand ? 'var(--sidebar-width)' : 'var(--sidebar-short-width)'};
  background-color: ${({ theme }) => theme.bgSecondary};
  padding: 1em 5em;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 4em 1em;
`;

export const Home = ({ isSidebarExpanded }) => {
  return (
    <Container expand={isSidebarExpanded}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Container>
  );
};
