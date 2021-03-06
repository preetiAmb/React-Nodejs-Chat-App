import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2px;
`;

export const InputStyle = styled.input`
    width: 300px;
    min-width: 250px;
    padding: 15px 10px 10px 20px;
    margin-right: 10px;
    font-family: 'Josefin Sans', serif;
    font-size: 15px;
    color: rgb(15, 14, 14);
    background-color: #cdcfd3;
    border: 1px solid rgb(36, 31, 31);
    outline: none;
    border-radius: 20px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    margin-top: 12rem;
    position: relative;
  `;

  export const Button = styled.button`
    display: flex;
    padding-left: 1rem;
    margin-top: 1rem;
    border: none;
    background-color: white;
    color: #fff !important;
    position: -webkit-sticky;
    position: sticky;
    position: relative;
  `;
  
  export const AddChatBtn = styled.button`
    min-width: 100px;
    background-color: #262425;
    height: 25px;
    color: #ccc;
    border: none;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    border-radius: 20px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    outline: none;
    cursor: pointer;
    position: -webkit-sticky;
    position: sticky;
  `;