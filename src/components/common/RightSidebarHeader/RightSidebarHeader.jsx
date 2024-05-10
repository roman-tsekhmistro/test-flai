/** @format */

import styled from 'styled-components';

const StyledRightSidebarHeader = styled.article`
  display: flex;
  flex-direction: column;
  background-color: #d1fd0a;
  height: 110px;
  width: 100%;
  padding: 20px;
  font-family: 'Montserrat';
`;

const StyledSubHeading = styled.h2`
  font-weight: 600;
  font-size: 12px;
  line-height: 110%;
  color: #6f8800;
  text-transform: capitalize;
`;

const StyledHeading = styled.h1`
  font-weight: 700;
  font-size: 16px;
  line-height: 110%;
  color: #000;
  margin-top: 3px;
`;

const StyledButton = styled.button`
  font-family: 'Montserrat';
  background-color: #000;
  border-radius: 5px;
  width: 131px;
  height: 30px;
  padding: 6px 15px;
  color: #fff;
  border: none;
  font-weight: 700;
  font-size: 14px;
  line-height: 110%;
  margin-top: 18px;
`;

const RightSidebarHeader = () => {
  return (
    <StyledRightSidebarHeader>
      <StyledSubHeading>Free plan</StyledSubHeading>
      <StyledHeading>There are 10 free requests left</StyledHeading>
      <StyledButton>Buy Premium</StyledButton>
    </StyledRightSidebarHeader>
  );
};

export default RightSidebarHeader;
