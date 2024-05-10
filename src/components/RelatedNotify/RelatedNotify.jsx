/** @format */

import styled from 'styled-components';
import notifyIcon from '../../assets/icons/related-bell.svg';

const StyledRelatedNotify = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 70px;
  background-color: #212122;
  font-family: 'Montserrat';
`;

const StyledNotifyHeading = styled.h3`
  font-weight: 600;
  font-size: 12px;
  line-height: 125%;
  color: #fff;
  margin-right: 20px;
`;

const StyledNotifyBtn = styled.button`
  border: none;
  border-radius: 20px;
  background: #d1fd0a;
  padding: 3px 20px;
  font-weight: 700;
  font-size: 12px;
  line-height: 167%;
`;

const RelatedNotify = () => {
  return (
    <StyledRelatedNotify>
      <img src={notifyIcon} alt='related notify icon' />
      <StyledNotifyHeading>
        Notify me when these features start working
      </StyledNotifyHeading>
      <StyledNotifyBtn>Notify Me</StyledNotifyBtn>
    </StyledRelatedNotify>
  );
};

export default RelatedNotify;
