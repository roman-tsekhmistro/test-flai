/** @format */

import styled from 'styled-components';

const StyledSectionHeading = styled.h2`
  font-family: 'Montserrat';
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 700;
  font-size: 20px;
  line-height: 150%;
  color: ${(props) => props.color};
`;

const SectionHeading = ({ icon, heading, color }) => {
  const slicedHeading = heading.split(' ');
  return (
    <StyledSectionHeading color={color}>
      <img src={icon} alt='section heading icon' />
      {slicedHeading[0]}
      {slicedHeading[1] && (
        <span style={{ color: '#fff' }}>{slicedHeading[1]}</span>
      )}
      {slicedHeading[2] && (
        <span style={{ color: '#fff' }}>{slicedHeading[2]}</span>
      )}
    </StyledSectionHeading>
  );
};

export default SectionHeading;
