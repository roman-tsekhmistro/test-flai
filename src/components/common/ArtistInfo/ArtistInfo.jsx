/** @format */
import styled from 'styled-components';
import detailsBtn from '../../../assets/icons/details-btn.svg';
import SocialLinksList from '../SocialLinksList/SocialLinksList';

const StyledArtistName = styled.h2`
  font-weight: 700;
  font-size: 18px;
  line-height: 111%;
`;

const StyledMusicGenre = styled.h3`
  font-weight: 600;
  font-size: 14px;
  line-height: 143%;
`;

const StyledArtistStatus = styled.h3`
  font-weight: 600;
  font-size: 12px;
  line-height: 167%;
  color: #8e8f92;
  display: flex;
  align-items: center;
  gap: 0 5px;
`;

const StyledType = styled(StyledArtistStatus)`
  display: flex;
  align-items: center;
`;

const StyledTypeBtn = styled.button`
  border: none;
  border-radius: 20px;
  padding: 3px 15px;
  width: 85px;
  height: 24px;
  background: rgba(39, 69, 145, 0.25);
  font-weight: 700;
  font-size: 10px;
  line-height: 180%;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #6993ff;
`;

const StyledArtistInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: #fff;
  padding-top: 27px;
`;

const StyledArtistDetails = styled.button`
  border: none;
  background-color: transparent;
`;

const ArtistInfo = () => {
  return (
    <StyledArtistInfo>
      <StyledArtistStatus>
        Official Artist
        <StyledArtistDetails>
          <img src={detailsBtn} alt='' />
        </StyledArtistDetails>
      </StyledArtistStatus>
      <StyledArtistName>Khabane Lame</StyledArtistName>
      <StyledMusicGenre>Melodic sound</StyledMusicGenre>
      <StyledType>
        Type: <StyledTypeBtn>original</StyledTypeBtn>
      </StyledType>
      <SocialLinksList />
    </StyledArtistInfo>
  );
};

export default ArtistInfo;
