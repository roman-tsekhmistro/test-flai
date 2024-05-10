/** @format */

import styled from 'styled-components';
import playBtn from '../../../assets/icons/play-btn.svg';
import albumPoster from '../../../assets/icons/track-image.svg';

const StyledAlbumPosterWrapper = styled.div`
  position: relative;
  height: fit-content;
  padding-top: 27px;
`;

const StyledAlbumPoster = styled.img`
  border-radius: 50%;
  height: 80px;
  width: 80px;
`;

const StyledPlayBtn = styled.button`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translateX(-45%);
  border: none;
  padding: 0;
  background-color: transparent;
`;

const ArtistPoster = () => {
  return (
    <StyledAlbumPosterWrapper>
      <StyledAlbumPoster src={albumPoster} alt='album poster' />
      <StyledPlayBtn>
        <img src={playBtn} alt='' />
      </StyledPlayBtn>
    </StyledAlbumPosterWrapper>
  );
};

export default ArtistPoster;
