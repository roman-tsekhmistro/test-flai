/** @format */

import styled from 'styled-components';
import lockIcon from '../../../assets/icons/lock.svg';

const StyledMusicInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  font-weight: 600;
  font-size: 12px;
  color: #fff;
  padding-top: 27px;
`;

const StyledMusicDuration = styled.h3`
  color: #8e8f92;

  & span {
    color: #fff;
  }
`;

const StyledBitrate = styled(StyledMusicDuration)`
  display: flex;
  gap: 5px;

  & span {
    position: relative;
    color: #fff;

    &::after {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      content: url(${lockIcon});
      left: -5px;
      top: -5px;
      width: 66px;
      height: 24px;
      backdrop-filter: blur(4px);
      background: rgba(217, 217, 217, 0.1);
    }
  }
`;

const MusicInfo = () => {
  return (
    <StyledMusicInfoWrapper>
      <h3>🔥🔥🔥 Trending</h3>
      <StyledMusicDuration>
        Duration: <span>00:45</span>
      </StyledMusicDuration>
      <StyledBitrate>
        Bitrate: <span>320 kbps</span>
      </StyledBitrate>
    </StyledMusicInfoWrapper>
  );
};

export default MusicInfo;
