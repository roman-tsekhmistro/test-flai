/** @format */
import styled from 'styled-components';
import Burger from '../common/Burger/Burger';
import SidebarList from '../common/SidebarList/SidebarList';

const StyledSidebar = styled.aside`
  color: #654342;
  background-color: #000;
  font-size: 24px;
  height: 100vh;
  max-width: 90px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-image: linear-gradient(to top, #313234 0%, #000 100%);
`;

const LeftSidebar = () => {
  return (
    <StyledSidebar>
      <Burger />
      <SidebarList />
    </StyledSidebar>
  );
};

export default LeftSidebar;
