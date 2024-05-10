/** @format */

import styled from 'styled-components';

const StyledBurgerWrapper = styled.div`
  height: 50px;
  width: 50px;
  background-color: #212122;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;

const StyledBurger = styled.div`
  position: relative;
  width: 20px;
  height: 2px;
  display: flex;
  flex-direction: column;
  background-color: #fff;

  &::before,
  &::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 2px;
    left: 0;
    background-color: #fff;
  }

  &::before {
    top: 7px;
  }

  &::after {
    bottom: 7px;
  }
`;

const Burger = () => {
  return (
    <StyledBurgerWrapper>
      <StyledBurger />
    </StyledBurgerWrapper>
  );
};

export default Burger;
