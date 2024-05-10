/** @format */

import styled from 'styled-components';

const StyledKeywordsItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  padding: 8px 10px;
  width: 138px;
  height: 24px;
  background: #212122;
  font-weight: 600;
  font-size: 12px;
  line-height: 167%;
  color: #fff;
`;

const KeywordsItem = ({ text }) => {
  return <StyledKeywordsItem>{text}</StyledKeywordsItem>;
};

export default KeywordsItem;
