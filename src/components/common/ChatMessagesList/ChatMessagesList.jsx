/** @format */

import styled from 'styled-components';
import { messages } from '../../../data/chatData';
import ChatMessageItem from '../ChatMessageItem/ChatMessageItem';

const StyledChatMessagesList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 60px;
  padding: 24px 15px;
`;

const ChatMessagesList = () => {
  return (
    <StyledChatMessagesList>
      {messages.map(({ icon, msgText, username, time }, i) => (
        <ChatMessageItem
          icon={icon}
          msgText={msgText}
          username={username}
          time={time}
          key={i}
        />
      ))}
    </StyledChatMessagesList>
  );
};

export default ChatMessagesList;
