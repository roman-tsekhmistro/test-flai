/** @format */

import styled from 'styled-components';
import audienceIcon from '../../assets/icons/sections-icons/audience.svg';
import AudienceList from '../../components/AudienceList/AudienceList';
import SectionHeading from '../../components/common/SectionHeading/SectionHeading';

const StyledAudienceWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 35px;
  padding: 0 36px 50px;
`;

const Audience = () => {
  return (
    <StyledAudienceWrapper>
      <SectionHeading
        icon={audienceIcon}
        heading='Sound Audience'
        color='#fff'
      />
      <AudienceList />
    </StyledAudienceWrapper>
  );
};

export default Audience;
