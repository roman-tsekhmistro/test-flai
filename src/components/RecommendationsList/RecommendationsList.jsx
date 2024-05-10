/** @format */

import styled from 'styled-components';
import { recommendationsList } from '../../data/recommendationsData';
import RecommendationsListItem from '../common/RecommendationsListItem/RecommendationsListItem';

const StyledRecommendationsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px 0;
  margin-top: 30px;
`;

const RecommendationsList = () => {
  return (
    <StyledRecommendationsList>
      {recommendationsList.map((item, i) => (
        <RecommendationsListItem
          name={item.name}
          checkbox={item.checkbox}
          key={i}
          child={item?.child}
        />
      ))}
    </StyledRecommendationsList>
  );
};

export default RecommendationsList;
