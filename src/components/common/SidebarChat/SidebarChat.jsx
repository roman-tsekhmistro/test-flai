/** @format */

import styled from 'styled-components';
import ChatMessagesList from '../ChatMessagesList/ChatMessagesList';

const StyledSidebarChat = styled.article`
  height: 100%;
  max-height: 750px;
  backdrop-filter: blur(100px);
  background: rgba(49, 50, 52, 0.25);
`;

const SidebarChat = () => {
  return (
    <StyledSidebarChat>
      <ChatMessagesList />
    </StyledSidebarChat>
  );
};

export default SidebarChat;
