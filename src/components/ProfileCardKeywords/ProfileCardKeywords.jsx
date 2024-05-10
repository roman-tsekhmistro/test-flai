/** @format */

import styled from 'styled-components';
import { keywords } from '../../data/ProfileCardKeywords';
import KeywordsItem from '../common/KeywordsItem/KeywordsItem';

const StyledProfileCardKeywords = styled.ul`
  display: flex;
  align-items: center;
  gap: 5px;

  & p {
    margin-right: 5px;
    font-weight: 600;
    font-size: 12px;
    color: #8e8f92;
  }
`;

const ProfileCardKeywords = () => {
  return (
    <StyledProfileCardKeywords>
      <p>Keywords:</p>
      {keywords.map((keyword, i) => (
        <KeywordsItem text={keyword} key={i} />
      ))}
    </StyledProfileCardKeywords>
  );
};

export default ProfileCardKeywords;
