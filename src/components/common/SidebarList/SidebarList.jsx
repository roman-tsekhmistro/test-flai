/** @format */

import styled from 'styled-components';
import bellIcon from '../../../assets/icons/bell.svg';
import profileIcon from '../../../assets/icons/profile.svg';
import settingsIcon from '../../../assets/icons/settings.svg';
import SidebarListItem from '../SidebarListItem/SidebarListItem';

const StyledSidebarList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

const SidebarList = () => {
  return (
    <StyledSidebarList>
      <SidebarListItem img={bellIcon} />
      <SidebarListItem img={settingsIcon} />
      <SidebarListItem img={profileIcon} />
    </StyledSidebarList>
  );
};

export default SidebarList;
