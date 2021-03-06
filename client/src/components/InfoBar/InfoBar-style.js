import styled from 'styled-components';

export const InfoBarStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgb(196, 197, 199);
    border-radius: 4px 4px 0 0;
    height: 30px;
    width: 400px;
    min-width: 250px;
    padding: 10px 10px 10px 20px;
    margin-right: 10px;
    font-family: 'Josefin Sans', serif;
    font-size: 15px;
    color: rgb(15, 14, 14);
    background-color: #cdcfd3;
    border: 1px solid rgb(36, 31, 31);
    outline: none;
    border-radius: 20px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
`;
  
export const LeftInnerContainer = styled.div`
    flex: 0.5;
    display: flex;
    align-items: center;
    margin-left: 5%;
    color: bl;
`;
  
export const RightInnerContainer = styled.div`
    display: flex;
    flex: 0.5;
    justify-content: flex-end;
    margin-right: 5%;
`;
  
export const OnlineIcon = styled.img`
    margin-right: 5%;
`;