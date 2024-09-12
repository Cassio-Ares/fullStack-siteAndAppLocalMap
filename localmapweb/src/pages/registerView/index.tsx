'use client'
import { Input } from '@/components/input'
import { Container, Section, Form, FormTitle, CategoryContainer, CategoryBox, CategoryImage, ButtonContainer, Button } from './styles'
import { useState } from 'react'
import { categories } from './categories';



import dynamic from 'next/dynamic';
const MapContainerClientSide = dynamic(() => import('@/components/map').then(mod => mod.Map), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});


export const RegisterPage = () => {
  const [formValues, setFormValues] = useState({
    companyName: "",
    personResponibleFirstName: "",
    personResponibleLastName: "",
    email: "",
    password: "",
    description: "",
    category: "",
    phone: "",
    latitude: "",
    longitude: "",
  })

  console.log(formValues)
  return (
    <Container>
      <Form>
        <FormTitle>
          Cadastre sua empresa
        </FormTitle>
        <Section>
          Dados
        </Section>
        <Input
          label='Nome da Empresa'
          name='companyName'
          value={formValues.companyName}
          onChange={setFormValues}
        />
        <Input
          label='Primeiro nome do responsável'
          name=' personResponibleFirstName'
          value={formValues.personResponibleFirstName}
          onChange={setFormValues}
        />
        <Input
          label='Sobrenome do responsável'
          name='personResponibleLastName'
          value={formValues.personResponibleLastName}
          onChange={setFormValues}
        />
        <Input
          label='E-mail da empresa'
          name='email'
          value={formValues.email}
          onChange={setFormValues}
        />
        <Input
          label='Password'
          name='password'
          value={formValues.password}
          onChange={setFormValues}
        />
        <Input
          label='Descrição sobre a empresa'
          name='description'
          value={formValues.description}
          onChange={setFormValues}
        />
        <Input
          label='Categoria'
          name='category'
          value={formValues.category}
          onChange={setFormValues}
        />
        <Input
          label='Telefone para contato'
          name='phone'
          value={formValues.phone}
          onChange={setFormValues}
        />
        <Input
          label='Latitude'
          name='latitude'
          value={formValues.latitude}
          onChange={setFormValues}
        />
        <Input
          label='Longitude'
          name='longitude'
          value={formValues.longitude}
          onChange={setFormValues}
        />
        <Section>Endereço</Section>
        <MapContainerClientSide />

        <CategoryContainer>
          {categories?.map((category) => (
            <>
              <CategoryBox
                key={category.key}
                onClick={() => { setFormValues(previusState => ({ ...previusState, category: category.key })) }}
              //  isActive = {formValues.category === category.key}      
              />
              <CategoryImage src={category.url} />
              {category.label}
            </>
          ))}
        </CategoryContainer>
        <ButtonContainer>
          <Button type='submit'>Salvar</Button>
        </ButtonContainer>
      </Form>
    </Container>
  )  
}
