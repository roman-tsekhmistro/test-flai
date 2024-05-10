/** @format */

import styled from 'styled-components';
import appleMusic from '../../../assets/icons/social-medias/apple_music.svg';
import spotify from '../../../assets/icons/social-medias/spotify.svg';
import tikTok from '../../../assets/icons/social-medias/tik-tok.svg';

const StyledSocialLinks = styled.ul`
  display: flex;
  gap: 8px;
`;

const SocialLinksList = () => {
  return (
    <StyledSocialLinks>
      <img src={spotify} alt='spotify icon' />
      <img src={appleMusic} alt='Apple music icon' />
      <img src={tikTok} alt='Tik Tok icon' />
    </StyledSocialLinks>
  );
};

export default SocialLinksList;
