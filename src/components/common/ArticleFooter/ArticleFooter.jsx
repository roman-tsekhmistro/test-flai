/** @format */

import styled from 'styled-components';

const StyledArticleFooter = styled.footer`
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background: #00be6e;
  font-weight: 600;
  font-size: 13px;
  text-align: center;
  color: #aaffdb;

  & span {
    font-weight: 700;
    font-size: 32px;
    color: #fff;
  }
`;

const ArticleFooter = () => {
  return (
    <StyledArticleFooter>
      Daily Growth <span>+100k</span>
    </StyledArticleFooter>
  );
};

export default ArticleFooter;
