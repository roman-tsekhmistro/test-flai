/** @format */

import styled from 'styled-components';
import ProfileCardKeywords from '../ProfileCardKeywords/ProfileCardKeywords';
import ProfileCardStat from '../ProfileCardStat/ProfileCardStat';
import ArtistInfo from '../common/ArtistInfo/ArtistInfo';
import ArtistPoster from '../common/ArtistPoster/ArtistPoster';
import CountryStat from '../common/CountryStat/CountryStat';
import MusicInfo from '../common/MusicInfo/MusicInfo';

const StyledProfileCard = styled.div`
  display: flex;
  font-family: 'Montserrat';
  width: 100%;
  height: 240px;
  background-color: #131314;
  margin-top: 15px;
  padding: 0 0 12px 40px;
`;

const StyledProfileCardInfo = styled.article`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-right: 40px;
`;

const StyledCardWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  & hr {
    margin: 15px 0 10px;
    border: 1px solid rgba(255, 255, 255, 0.03);
    width: 100%;
  }
`;

const StyledTrackWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

const ProfileCard = () => {
  return (
    <StyledProfileCard>
      <StyledCardWrapper>
        <StyledProfileCardInfo>
          <StyledTrackWrapper>
            <ArtistPoster />
            <ArtistInfo />
          </StyledTrackWrapper>
          <MusicInfo />
          <CountryStat />
        </StyledProfileCardInfo>
        <hr />
        <ProfileCardKeywords />
      </StyledCardWrapper>
      <ProfileCardStat />
    </StyledProfileCard>
  );
};

export default ProfileCard;
