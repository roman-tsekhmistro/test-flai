/** @format */

import styled from 'styled-components';
import downloadIcon from '../../assets/icons/header-download-btn.svg';
import updateIcon from '../../assets/icons/header-update-btn.svg';
import MainPageHeaderInfo from '../common/MainPageHeaderInfo/MainPageHeaderInfo';
import HeaderBtn from '../utilities/HeaderBtn/HeaderBtn';

const StyledMainPageHeader = styled.article`
  font-family: 'Montserrat';
  width: 100%;
  height: 40px;
  font-weight: 700;
  font-size: 14px;
  line-height: 143%;
  color: #404044;
  padding: 13px 40px 0;
  display: flex;
  justify-content: space-between;
`;

const StyledMainPageHeaderInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0 30px;
`;

const MainPageHeader = () => {
  return (
    <StyledMainPageHeader>
      AI Prediction
      <StyledMainPageHeaderInfo>
        <MainPageHeaderInfo />
        <HeaderBtn
          icon={updateIcon}
          label='Update'
          handleClick={() => alert('Hello world!')}
        />
        <HeaderBtn
          icon={downloadIcon}
          label='Download'
          handleClick={() => alert('Your downloading is start')}
        />
      </StyledMainPageHeaderInfo>
    </StyledMainPageHeader>
  );
};

export default MainPageHeader;
