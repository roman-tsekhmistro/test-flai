/** @format */

import styled from 'styled-components';

const StyledMainPageHeaderInfo = styled.p`
  font-weight: 600;
  font-size: 10px;
  line-height: 200%;
  text-align: right;
  color: #37373a;

  & span {
    font-weight: 700;
  }
`;

const StyledHeaderInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainPageHeaderInfo = () => {
  return (
    <StyledHeaderInfoWrapper>
      <StyledMainPageHeaderInfo>
        Last update: <span>13.03.2024</span>
      </StyledMainPageHeaderInfo>
      <StyledMainPageHeaderInfo>
        Date added to the platform: <span>17.12.2023</span>
      </StyledMainPageHeaderInfo>
    </StyledHeaderInfoWrapper>
  );
};

export default MainPageHeaderInfo;
