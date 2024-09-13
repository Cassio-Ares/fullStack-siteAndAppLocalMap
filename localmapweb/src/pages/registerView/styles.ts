import styled from "styled-components";

export const Container = styled.main`
  background: url("./home-background.svg") no-repeat 700px bottom;
  background-color: ${({ theme }) => theme.COLORS.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  width: 50vw;
  background-color: ${({ theme }) => theme.COLORS.white};
  padding: 50px;
  margin-top: 40px;
  border-radius: 8px;
  box-shadow: 10px 10px 50px #333,  
  -10px -10px 50px #333;
  @media (max-width: 1024px) {
    width: 70vw;
  }
`;

export const FormTitle = styled.h2`
  color: ${({ theme }) => theme.COLORS.primary};
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
  padding-bottom: 30px;
`;

export const Section = styled.p`
  color: ${({ theme }) => theme.COLORS.primary};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  padding-bottom: 30px;
  padding-top: 30px;
  font-weight: 700;
`;

export const ButtonContainer = styled.div`
  text-align: center;
  padding-top: 20px;
`;

export const Button = styled.button`
  background: ${({theme})=> theme.COLORS.primary};
  color: ${({theme}) => theme.COLORS.white };
  padding: 10px 40px;
  margin-top:40px;
  border: none;
  border-radius: 5px;

  &:hover {
    background-color: ${(props) => props.theme.primary}99;
  }
`;