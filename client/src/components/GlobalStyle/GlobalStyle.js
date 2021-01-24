import styled from 'styled-components';

export const Container = styled.div`
  background: linear-gradient(100deg, rgb(221, 219, 220) 50%, #ffffff 0);
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

`;

export const Wrapper = styled.div`
  background-color: #ffffff;
  width: 25%;
  min-width: 500px;
  height: 650px;
  padding: 30px;
  box-sizing: border-box;
  border-radius: 5px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);

`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  margin-bottom: 50px;
  width: 100%;
`;