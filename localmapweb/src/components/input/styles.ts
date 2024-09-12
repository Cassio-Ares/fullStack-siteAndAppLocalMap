import styled from "styled-components";

export const Container = styled.div`
 display: flex;
 flex-direction: column;
 padding-bottom: 30px;
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.COLORS.primary};
`;

export const InputStyled = styled.input`
 border: none;
 background: ${({theme})=> theme.COLORS.background};
 color: ${({theme})=> theme.COLORS.text};
 border-radius: 8px;
 height: 28px;
 font-size: ${({theme})=> theme.FONT_SIZE.LG}px;
 padding: 10px;
`;
