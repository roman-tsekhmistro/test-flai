/** @format */

import styled from 'styled-components';

const StyledChatMessageItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  height: fit-content;
`;

const StyledItemHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const StyledProfileInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const StyledUsername = styled.h3`
  font-weight: 700;
  font-size: 14px;
  line-height: 143%;
  color: #fff;
`;

const StyledUserImg = styled.img`
  src: url(icon);
  height: 36px;
  width: 36px;
`;

const StyledTime = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 167%;
  text-align: right;
  color: #56595c;
`;

const StyledCommentsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StyledCommentItem = styled.li`
  font-weight: 600;
  font-size: 14px;
  line-height: 143%;
  color: #e6e6ed;
  font-family: 'Inconsolata';
`;

const ChatMessageItem = ({ icon, msgText, username, time }) => {
  return (
    <StyledChatMessageItem>
      <StyledItemHeader>
        <StyledProfileInfo>
          <StyledUserImg src={icon} />
          <StyledUsername>{username}</StyledUsername>
        </StyledProfileInfo>
        <StyledTime>{time}</StyledTime>
      </StyledItemHeader>
      <StyledCommentsList>
        {msgText.map((message, i) => (
          <StyledCommentItem key={i}>{message}</StyledCommentItem>
        ))}
      </StyledCommentsList>
    </StyledChatMessageItem>
  );
};

export default ChatMessageItem;
