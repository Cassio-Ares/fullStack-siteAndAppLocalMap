import styled from "styled-components";

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  background: url("./home-background.svg") no-repeat 700px bottom;
  background-color: ${({ theme }) => theme.COLORS.background};
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
  color: ${({ theme }) => theme.COLORS.primary};
  padding-bottom: 50px;
  text-align: center;
  max-width: 500px;
`;

export const SubTitle = styled.p`
  color: ${({ theme }) => theme.COLORS.primary};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  padding-bottom: 50px;
  text-align: center;
  max-width: 500px;
`;

export const ButtonBox = styled.div`
 background: ${({theme})=> theme.COLORS.secondary};
 color: ${({theme})=> theme.COLORS.white};
 height: 50px;
 width: 40px;
 font-size: ${({theme})=> theme.FONT_SIZE.XL}px;
 position: absolute;
 left: 0;
 top: 0;
 border-radius: 5px;
 display: flex;
 justify-content: center;
 align-items: center;
`;

export const Button = styled.button`
 background: ${({theme})=> theme.COLORS.primary};
 color: ${({theme})=> theme.COLORS.white};
 height: 50px;
 border: none;
 border-radius: 5px;
 position: relative;
 padding-left: 50px;
 padding-right: 20px;

 &:hover{
    filter: opacity(0.9);
 }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const RightContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img.attrs(() => ({
  src: "home-image.svg",
}))`
  width: 58%;
`