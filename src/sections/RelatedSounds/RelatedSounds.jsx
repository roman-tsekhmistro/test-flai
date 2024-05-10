/** @format */

import styled from 'styled-components';
import relatedIcon from '../../assets/icons/sections-icons/related.svg';
import RelatedNotify from '../../components/RelatedNotify/RelatedNotify';
import SectionHeading from '../../components/common/SectionHeading/SectionHeading';

const StyledRelatedSounds = styled.section`
  display: flex;
  flex-direction: column;
  gap: 17px;
  padding: 0 36px 53px;
`;

const RelatedSounds = () => {
  return (
    <StyledRelatedSounds>
      <SectionHeading
        icon={relatedIcon}
        heading='Related Sounds'
        color='#D1FD0A'
      />
      <RelatedNotify />
    </StyledRelatedSounds>
  );
};

export default RelatedSounds;
