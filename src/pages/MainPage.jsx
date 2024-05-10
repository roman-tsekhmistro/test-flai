/** @format */

import styled from 'styled-components';
import MainPageHeader from '../components/MainPageHeader/MainPageHeader';
import ProfileCard from '../components/ProfileCard/ProfileCard';
import Audience from '../sections/Audience/Audience';
import GrowthTable from '../sections/GrowthTable/GrowthTable';
import Recommendations from '../sections/Recommendations/Recommendations';
import RelatedSounds from '../sections/RelatedSounds/RelatedSounds';

const StyledMainPage = styled.main`
  display: flex;
  flex-direction: column;
  background-color: #0d0d0e;
  width: 100%;
  height: fit-content;
`;

const MainPage = () => {
  return (
    <StyledMainPage>
      <MainPageHeader />
      <ProfileCard />
      <GrowthTable />
      <Audience />
      <RelatedSounds />
      <Recommendations />
    </StyledMainPage>
  );
};

export default MainPage;
