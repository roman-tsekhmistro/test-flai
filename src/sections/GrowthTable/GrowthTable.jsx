/** @format */

import styled from 'styled-components';
import growthIcon from '../../assets/icons/sections-icons/growth.svg';
import AdvantagesList from '../../components/AdvantagesList/AdvantagesList';
import Table from '../../components/Table/Table';
import SectionHeading from '../../components/common/SectionHeading/SectionHeading';

const StyledGrowthTable = styled.section`
  display: flex;
  flex-direction: column;
  padding: 50px 40px;
`;

const GrowthTable = () => {
  return (
    <StyledGrowthTable>
      <SectionHeading icon={growthIcon} heading='Growth' color='#d1fd0a' />
      <AdvantagesList />
      <Table />
    </StyledGrowthTable>
  );
};

export default GrowthTable;
