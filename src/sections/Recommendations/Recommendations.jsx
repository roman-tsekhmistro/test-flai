/** @format */

import styled from 'styled-components';
import lockIcon from '../../assets/icons/lock.svg';
import recommendationsIcon from '../../assets/icons/sections-icons/recommendations.svg';
import RecommendationsList from '../../components/RecommendationsList/RecommendationsList';
import SectionHeading from '../../components/common/SectionHeading/SectionHeading';

const StyledRecommendationsWrapper = styled.section`
  font-family: 'Montserrat';

  color: #fff;
  padding: 0 40px 62px;
`;

const StyledRecommendationsHeader = styled.header`
  display: flex;
  flex-direction: column;
  margin-top: 30px;

  & hr {
    border: 1px solid rgba(255, 255, 255, 0.05);
  }
`;

const StyledRecommendationsHeaderList = styled.ul`
  display: flex;
  gap: 30px;
`;

const StyledRecommendationsListBtn = styled.button`
  display: flex;
  gap: 10px;
  align-items: center;
  position: relative;
  font-family: 'Montserrat';
  border: none;
  background-color: transparent;
  font-weight: 600;
  font-size: 14px;
  line-height: 143%;
  color: ${(props) => props.color};

  &:after {
    content: '${(props) => props.after}';
    position: absolute;
    left: 0;
    top: 15px;
    padding-bottom: ${(props) => props.marginBottom};
  }
`;

const StyledHeaderArticle = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  backdrop-filter: blur(100px);
  background: radial-gradient(
    1086.25% 50% at 50% 50%,
    rgb(33, 33, 34) 0%,
    rgb(33, 33, 34) 100%
  );
  margin-top: 20px;
`;

const StyledHeaderArticleText = styled.h3`
  font-weight: 600;
  font-size: 14px;
  line-height: 143%;
  color: #fff;

  & span {
    font-weight: 700;
    color: #d1fd0a;
  }
`;

const Recommendations = () => {
  return (
    <StyledRecommendationsWrapper>
      <SectionHeading
        heading='Recommendations from AI'
        icon={recommendationsIcon}
        color='#D1FD0A'
      />
      <StyledRecommendationsHeader>
        <StyledRecommendationsHeaderList>
          <StyledRecommendationsListBtn color={'#D1FD0A'} after={'______'}>
            Base
          </StyledRecommendationsListBtn>
          <StyledRecommendationsListBtn color={'#8E8F92'}>
            Advanced
            <img src={lockIcon} alt='' />
          </StyledRecommendationsListBtn>
        </StyledRecommendationsHeaderList>
        <hr />
        <StyledHeaderArticle>
          <StyledHeaderArticleText>
            😥 you followed <span>2/10</span> recommendations
          </StyledHeaderArticleText>
        </StyledHeaderArticle>
      </StyledRecommendationsHeader>
      <RecommendationsList />
    </StyledRecommendationsWrapper>
  );
};

export default Recommendations;
