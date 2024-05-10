/** @format */

import styled from 'styled-components';

const StyledHeaderBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  border: none;
  background-color: transparent;
  font-weight: 600;
  font-size: 12px;
  line-height: 167%;
  color: ${(props) => props.color};

  &:hover {
    cursor: pointer;
  }
`;

const HeaderBtn = ({ icon, label, handleClick }) => {
  return (
    <StyledHeaderBtn
      onClick={handleClick}
      color={label === 'Update' ? '#94969c' : '#3c6dff'}
    >
      <img src={icon} alt='' />
      {label}
    </StyledHeaderBtn>
  );
};

export default HeaderBtn;
