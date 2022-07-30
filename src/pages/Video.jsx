import styled from 'styled-components';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ReplyIcon from '@mui/icons-material/Reply';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import channel from '../images/channel.png';
import { Comment } from '../components/Comment';
import { Card } from '../components/Card';

const Container = styled.div`
  margin-left: ${(props) =>
    props.expand ? 'var(--sidebar-width)' : 'var(--sidebar-short-width)'};
  background-color: ${({ theme }) => theme.bgSecondary};
  padding: 1em 5em;
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 2em;
  height: 200vh;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
`;
const VidWrapper = styled.div`
  width: 100%;
  height: 50vh;
  background-color: darkgray;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
`;
const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;
const Right = styled.div``;
const VidTitle = styled.h1`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.textSecondary};
`;
const VidInfo = styled.span`
  color: ${({ theme }) => theme.textSoft};
  font-size: 1.2rem;
`;
const Btns = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
`;
const Btn = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  border: 0;
  background-color: transparent;
  color: ${({ theme }) => theme.textSecondary};
  text-transform: uppercase;
`;
const BtnText = styled.span``;
const Desc = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
  padding: 1em 0;
`;
const DescLeft = styled.div`
  display: flex;
  gap: 1em;
`;
const DescRight = styled.div``;
const DescText = styled.div`
  display: flex;
  flex-direction: column;
`;
const ChannelImg = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
`;
const ChannelName = styled.h3`
  color: ${({ theme }) => theme.textSecondary};
  font-size: 0.9rem;
  margin-bottom: 0.5em;
  margin-top: 1em;
`;
const SubCount = styled.span`
  margin-bottom: 2em;
  color: ${({ theme }) => theme.textSoft};
`;
const SubBtn = styled.button`
  background-color: crimson;
  color: white;
  border: 0;
  padding: 1em;
`;
const DescPara = styled.p`
  color: ${({ theme }) => theme.text};
`;

const Comments = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3em;
`;
const AddComment = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
`;
const CommmentInput = styled.input`
  font-size: 1rem;
  padding: 0.5em;
  border: 0;
  border-bottom: 1px solid gray;
  background-color: transparent;
  width: 100%;
`;
const Recs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

export const Video = ({ isSidebarExpanded }) => {
  return (
    <Container expand={isSidebarExpanded}>
      <Content>
        <VidWrapper>Video</VidWrapper>
        <Info>
          <Left>
            <VidTitle>Video Title</VidTitle>
            <VidInfo>123 views • 1 day ago</VidInfo>
          </Left>
          <Right>
            <Btns>
              <Btn>
                <ThumbUpIcon />
                <BtnText>123</BtnText>
              </Btn>
              <Btn>
                <ThumbDownIcon />
                <BtnText>Dislike</BtnText>
              </Btn>
              <Btn>
                <ReplyIcon />
                <BtnText>Share</BtnText>
              </Btn>
              <Btn>
                <PlaylistAddIcon />
                <BtnText>Save</BtnText>
              </Btn>
            </Btns>
          </Right>
        </Info>
        <Desc>
          <DescLeft>
            <ChannelImg src={channel} />
            <DescText>
              <ChannelName>Channel Name</ChannelName>
              <SubCount>200k subscribers</SubCount>
              <DescPara>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo
                itaque nisi repudiandae quia quam necessitatibus nobis quod
                consequatur perspiciatis ea?
              </DescPara>
            </DescText>
          </DescLeft>
          <DescRight>
            <SubBtn>SUBSCRIBE</SubBtn>
          </DescRight>
        </Desc>
        <Comments>
          <AddComment>
            <ChannelImg src={channel} />
            <CommmentInput placeholder="Add a comment..." />
          </AddComment>
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
        </Comments>
      </Content>
      <Recs>
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
      </Recs>
    </Container>
  );
};
