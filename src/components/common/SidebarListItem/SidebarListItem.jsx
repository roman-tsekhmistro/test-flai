/** @format */

import styled from 'styled-components';

const StyledSidebarListItem = styled.button`
  border: none;
  height: fit-content;
  width: fit-content;
  background-color: transparent;
`;

const SidebarListItem = ({ img }) => {
  return (
    <StyledSidebarListItem>
      <img src={img} alt='' />
    </StyledSidebarListItem>
  );
};

export default SidebarListItem;
