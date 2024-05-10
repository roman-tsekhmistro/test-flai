/** @format */

import styled from 'styled-components';
import { advantagesData } from '../../data/advantagesList';
import AdvantagesListItem from '../common/AdvantagesListItem/AdvantagesListItem';

const StyledAdvantagesList = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin-top: 15px;
`;

const AdvantagesList = () => {
  return (
    <StyledAdvantagesList>
      {advantagesData.map((advantage, i) => (
        <AdvantagesListItem
          icon={advantage.icon}
          iconText={advantage.iconText}
          text={advantage.advantage}
          backgroundColor={advantage.backgroundColor}
          key={i}
        />
      ))}
    </StyledAdvantagesList>
  );
};

export default AdvantagesList;
