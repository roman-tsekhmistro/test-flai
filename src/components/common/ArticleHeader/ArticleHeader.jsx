/** @format */
import styled from 'styled-components';
import playBtnGreen from '../../../assets/icons/play-green-btn.svg';

const StyledArticleHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  height: 140px;
  width: 150px;
  backdrop-filter: blur(100px);
  background: #212122;

  & p {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;
    align-items: center;
    text-align: center;
    font-weight: 600;
    font-size: 13px;
    line-height: 154%;
    text-align: center;
    color: #9e9fa4;

    & span {
      font-weight: 700;
      font-size: 40px;
      text-align: center;
      color: #fff;
    }
  }
`;
const StyledArticleHeaderBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  background-color: transparent;
  border: none;
  font-weight: 700;
  font-size: 12px;
  text-align: center;
  color: #d1fd0a;
  font-family: 'Montserrat';
`;

const ArticleHeader = () => {
  return (
    <StyledArticleHeader>
      <p>
        🙋‍♂️ Videos <span>1.8M</span>
      </p>
      <StyledArticleHeaderBtn>
        <img src={playBtnGreen} alt='' /> Watch Videos
      </StyledArticleHeaderBtn>
    </StyledArticleHeader>
  );
};

export default ArticleHeader;
