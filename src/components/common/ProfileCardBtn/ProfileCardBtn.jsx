/** @format */

import styled from 'styled-components';
import btnIcon from '../../../assets/icons/card-btn-icon.svg';

const StyledProfileCardBtn = styled.button`
  font-family: 'Montserrat';
  background: #3f3f41;
  margin-top: 15px;
  border-radius: 30px;
  padding: 5px 15px;
  border: none;
  font-weight: 700;
  font-size: 12px;
  line-height: 167%;
  text-align: center;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 0 6px;
`;

const ProfileCardBtn = () => {
  return (
    <StyledProfileCardBtn>
      <img src={btnIcon} /> Sound to text
    </StyledProfileCardBtn>
  );
};

export default ProfileCardBtn;
