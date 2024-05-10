/** @format */

import Checkbox from 'react-custom-checkbox';
import styled from 'styled-components';

const StyledListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const StyledRecommendationsListItemChild = styled(StyledListItem)`
  margin-left: 30px;
  position: relative;
`;

const RecommendationsListItem = ({ name, checkbox, child }) => {
  return (
    <>
      <StyledListItem>
        <Checkbox
          checked={checkbox}
          borderColor='#ffffff1a'
          style={{ padding: '3px', width: '20px', height: '20px' }}
          icon={
            <div
              style={{
                display: 'flex',
                flex: 1,
                backgroundColor: '#d1fd0a',
                alignSelf: 'stretch',
              }}
            />
          }
        />
        {name}
      </StyledListItem>
      {child &&
        child.map(({ name, checkbox }, i) => {
          return (
            <StyledRecommendationsListItemChild key={i}>
              <Checkbox
                checked={checkbox}
                borderColor='#ffffff1a'
                style={{ padding: '3px', width: '20px', height: '20px' }}
                icon={
                  <div
                    style={{
                      display: 'flex',
                      flex: 1,
                      backgroundColor: '#d1fd0a',
                      alignSelf: 'stretch',
                    }}
                  />
                }
              />
              {name}
            </StyledRecommendationsListItemChild>
          );
        })}
    </>
  );
};

export default RecommendationsListItem;
