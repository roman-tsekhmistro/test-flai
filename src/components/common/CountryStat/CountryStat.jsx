/** @format */

import styled from 'styled-components';
import countryFlag from '../../../assets/icons/Canada.svg';
import ProfileCardBtn from '../ProfileCardBtn/ProfileCardBtn';

const StyledCountryStat = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  font-weight: 600;
  font-size: 12px;
  color: #8e8f92;
  padding-top: 27px;

  & span {
    color: #fff;
  }
`;

const StyledCountry = styled.div`
  display: flex;
  gap: 10px;

  & span {
    margin-left: 10px;
  }
`;

const CountryStat = () => {
  return (
    <StyledCountryStat>
      <StyledCountry>
        <p>
          Country: <span>Canada</span>
        </p>
        <img src={countryFlag} alt='Country flag icon' />
      </StyledCountry>
      <p>
        Place in the country: <span>05</span>
      </p>
      <p>
        Place in the world: <span>43</span>
      </p>
      <ProfileCardBtn />
    </StyledCountryStat>
  );
};

export default CountryStat;
