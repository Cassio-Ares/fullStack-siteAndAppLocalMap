'use client'
import {Container, InputStyled, Label} from './styles'

interface InputProps{
  label: string;
  name:string;
  value:string;
  onChange:Function;
}

export const Input = ({label, name, value, onChange}:InputProps) => {
  return (
    <Container>
      <Label>{label}</Label>
      <InputStyled
      required
       name={name}
       value={value}
       onChange={(e)=>{onChange((previusState:any)=> ({...previusState, [name]: e.target.value}))}}
      />
    </Container>
  )
}
