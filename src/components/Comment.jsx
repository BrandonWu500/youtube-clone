import styled from 'styled-components';
import channel from '../images/channel.png';
const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
`;
const ChannelImg = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
`;
const Wrapper = styled.div`
  margin-top: 1em;
`;
const Name = styled.h3`
  font-size: 1rem;
  color: ${({ theme }) => theme.textSecondary};
`;
const Date = styled.span`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.textSoft};
`;
const Para = styled.p`
  margin-top: 1em;
  color: ${({ theme }) => theme.text};
`;
export const Comment = () => {
  return (
    <Container>
      <ChannelImg src={channel} />
      <Wrapper>
        <Container>
          <Name>Name</Name>
          <Date>2 hours ago</Date>
        </Container>
        <Para>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
          obcaecati, mollitia non sint deleniti eveniet quisquam officiis dolore
          ex sapiente, voluptatum quibusdam numquam voluptates totam?
        </Para>
      </Wrapper>
    </Container>
  );
};
