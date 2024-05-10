/** @format */

import styled from 'styled-components';
import btnIcon from '../../assets/icons/chat-btn.svg';

const StyledChatInput = styled.input.attrs(() => ({
  type: 'text',
  placeholder: 'Enter your request...',
}))`
  position: relative;
  background: #212122;
  width: 100%;
  height: 70px;
  padding: 20px;
  margin: 0;
  border: none;
  &::placeholder {
    font-weight: 500;
    font-size: 14px;
    line-height: 143%;
    color: #8c8e92;
  }
`;

const StyledChatBtn = styled.button`
  position: absolute;
  right: 21px;
  bottom: 27px;
  height: 20px;
  width: 20px;
  border: none;
  background-color: transparent;
`;

const ChatInput = () => {
  return (
    <>
      <StyledChatInput />
      <StyledChatBtn>
        <img src={btnIcon} alt='' />
      </StyledChatBtn>
    </>
  );
};

export default ChatInput;
