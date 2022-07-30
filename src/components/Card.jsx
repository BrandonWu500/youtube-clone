import styled from 'styled-components';
import thumbnail from '../images/thumbnail.png';
import channel from '../images/channel.png';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.type === 'sm' ? 'row' : 'column')};
  gap: ${(props) => (props.type === 'sm' ? '0.25em' : '1em')};
`;
const Thumbnail = styled.div`
  width: 100%;
  height: ${(props) => (props.type === 'sm' ? '100px' : '200px')};
  background-color: darkgray;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  flex: ${(props) => props.type === 'sm' && '1'};
`;
const Details = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
  flex: ${(props) => props.type === 'sm' && '1'};
`;
const Left = styled.div``;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const ChannelImg = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  display: ${(props) => props.type === 'sm' && 'none'};
`;
const VideoTitle = styled.h4`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.textSecondary};
`;
const ChannelName = styled.h5`
  font-weight: 500;
  color: ${({ theme }) => theme.text};
  font-size: 0.9rem;
`;
const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
  font-size: 0.85rem;
`;

export const Card = ({ type }) => {
  return (
    <Link to="/video/test">
      <Container type={type}>
        <Thumbnail type={type}>Thumbnail</Thumbnail>
        <Details type={type}>
          <Left>
            <ChannelImg src={channel} type={type} />
          </Left>
          <Right>
            <VideoTitle>Video Title</VideoTitle>
            <ChannelName>Channel Name</ChannelName>
            <Info>123 views • 1 day ago</Info>
          </Right>
        </Details>
      </Container>
    </Link>
  );
};
