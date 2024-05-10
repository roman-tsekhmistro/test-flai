/** @format */

import styled from 'styled-components';

const StyledAdvantagesListItem = styled.li`
  font-family: 'Montserrat';
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 20px 0 0;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  height: 34px;

  font-weight: 600;
  font-size: 12px;
  line-height: 133%;
  color: #fff;
`;

const StyledIcon = styled.div`
  border-radius: 20px;
  padding: 7px 12px;
  display: flex;
  align-items: center;
  gap: 6px;
  background: ${(props) => props.color};

  font-weight: 700;
  font-size: 20px;
  line-height: 100%;
  color: #000;
  height: 100%;
`;

const AdvantagesListItem = ({ icon, iconText, text, backgroundColor }) => {
  return (
    <StyledAdvantagesListItem>
      <StyledIcon color={backgroundColor}>
        <img src={icon} alt={`${text} icon`} />
        {iconText && <p>{iconText}</p>}
      </StyledIcon>
      {text}
    </StyledAdvantagesListItem>
  );
};

export default AdvantagesListItem;
