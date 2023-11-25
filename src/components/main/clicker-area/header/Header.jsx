import styled from 'styled-components';

const HeaderInfos = styled.div`
    display: flex;
    flex-direction: column; 
    align-items: center;
    justify-content: center;
`;

const ImgStyle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    img {
        width: 30px;
        height: 30px;
        margin-left: 10px;
    }
`;

function Header({ mob }) {
  return (
    <HeaderInfos>
      <h2>{mob.name}</h2>
      <ImgStyle>
        <h2>{mob.hp}</h2>
        <img src='/images/life.png'></img>
      </ImgStyle>
    </HeaderInfos>
  );
}

export default Header;