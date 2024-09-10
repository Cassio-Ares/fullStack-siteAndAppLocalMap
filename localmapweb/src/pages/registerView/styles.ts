import styled from "styled-components";

export const Container = styled.main`
  background: url("./home-background.svg") no-repeat 700px bottom;
  background-color: ${({ theme }) => theme.COLORS.background};
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  width: 40vw;
  background-color: ${({ theme }) => theme.COLORS.white};
  padding: 50px;
  margin-top: 40px;
  border-radius: 8px;

  @media (max-width: 1024px) {
    width: 70vw;
  }
`;

export const FormTitle = styled.h2`
  color: ${({ theme }) => theme.COLORS.primary};
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
  padding-bottom: 30px;
`;

export const Selection = styled.p`
  color: ${({ theme }) => theme.COLORS.primary};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  padding-bottom: 30px;
  padding-top: 30px;
  font-weight: 700;
`;

export const CategoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const CategoryBox = styled.div``;

export const CategoryImage = styled.img`
  width: 40px;
  height: 40px;
`;

export const ButtonContainer = styled.div`
  text-align: center;
  padding-top: 20px;
`;

export const Button = styled.button`
  background: ${({theme})=> theme.COLORS.primary};
  color: ${({theme}) => theme.COLORS.white };
  height: 50px;
  border: none;
  border-radius: 5px;

  &:hover {
    background-color: ${(props) => props.theme.primary}99;
  }
`;