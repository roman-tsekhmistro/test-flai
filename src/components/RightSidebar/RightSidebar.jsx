/** @format */

import styled from 'styled-components';
import ChatInput from '../ChatInput/ChatInput';
import RightSidebarHeader from '../common/RightSidebarHeader/RightSidebarHeader';
import SidebarChat from '../common/SidebarChat/SidebarChat';

const StyledRightSidebar = styled.aside`
  height: 100vh;
  width: 100%;
  max-width: 360px;
  background-color: #000;
  display: flex;
  flex-direction: column;
  font-family: 'Montserrat';
`;

const RightSidebar = () => {
  return (
    <StyledRightSidebar>
      <RightSidebarHeader />
      <SidebarChat />
      <ChatInput />
    </StyledRightSidebar>
  );
};

export default RightSidebar;
