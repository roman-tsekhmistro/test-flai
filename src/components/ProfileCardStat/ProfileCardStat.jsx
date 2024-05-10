/** @format */

import styled from 'styled-components';
import ArticleFooter from '../common/ArticleFooter/ArticleFooter';
import ArticleHeader from '../common/ArticleHeader/ArticleHeader';

const StyledProfileCardStat = styled.article`
  display: flex;
  flex-direction: column;

  width: 150px;
  height: 240px;
`;

const ProfileCardStat = () => {
  return (
    <StyledProfileCardStat>
      <ArticleHeader />
      <ArticleFooter />
    </StyledProfileCardStat>
  );
};

export default ProfileCardStat;
