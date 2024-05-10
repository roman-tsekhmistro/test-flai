/** @format */

import styled from 'styled-components';
import { audienceItem } from '../../data/audienceData';
import AudienceListItem from '../common/AudienceListItem/AudienceListItem';

const StyledAudienceList = styled.ul`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  gap: 25px;
`;

const AudienceList = () => {
  return (
    <StyledAudienceList>
      {audienceItem.map(({ text, icon, completedPercent, area }, i) => (
        <AudienceListItem
          key={i}
          text={text}
          icon={icon}
          completedPercent={completedPercent}
          area={area}
        />
      ))}
    </StyledAudienceList>
  );
};

export default AudienceList;
