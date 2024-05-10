/** @format */

import ProgressBar from '@ramonak/react-progress-bar';
import styled from 'styled-components';

const StyledAudienceListItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-family: 'Montserrat';
  grid-area: ${(props) => props.area};
`;

const StyledAudienceListItemHeader = styled.header`
  display: flex;
  gap: 10px;
  font-weight: 600;
  font-size: 16px;
  line-height: 125%;
  font-family: 'Montserrat';

  & p {
    color: #fff;
  }
`;

const AudienceListItem = ({ icon, text, completedPercent, area }) => {
  return (
    <StyledAudienceListItem area={area}>
      <StyledAudienceListItemHeader>
        <img src={icon} alt={`${text} + icon`} />
        <p>{text}</p>
      </StyledAudienceListItemHeader>
      <ProgressBar
        completed={completedPercent}
        baseBgColor='#212122'
        borderRadius='0'
        height='8px'
        bgColor='#d1fd0a'
        labelAlignment='outside'
        customLabelStyles={{
          marginTop: '-45px',
          marginLeft: '-35px',
          textAlign: 'right',
        }}
      />
    </StyledAudienceListItem>
  );
};

export default AudienceListItem;
