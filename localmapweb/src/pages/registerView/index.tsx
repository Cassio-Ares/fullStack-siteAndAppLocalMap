'use client'
import { Input } from '@/components/input'
import { Container, Section, Form, FormTitle, ButtonContainer, Button } from './styles'
import { useEffect, useState } from 'react'
import useGeoLocation from '@/hooks/useGetLocation'
import { toast } from 'react-toastify';

import dynamic from 'next/dynamic';
import { Map } from '@/components/map'
import { useRouter } from 'next/navigation'


// const MapContainerClientSide = dynamic(() => import('@/components/map').then(mod => mod.Map), {
//   ssr: false,
//   loading: () => <p>Loading...</p>,
// });


export const RegisterPage = () => {
  // Inicializa com as coordenadas obtidas por useGeoLocation
  const { coords } = useGeoLocation();
  const router = useRouter()


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


  if (!coords) {
    return <h2>Obtendo localização ...</h2>
  }

  

  async function onSubmit() {
    const request = await fetch('http://localhost:3000/partherCompany', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ...formValues,
      })
    });

    if (request.ok) {
      toast("Estabelecimento gravado com sucesso", {
        type: "success",
        autoClose: 3000,
        onClose: () => {
          router.push('/');
        }
      });
    } else {
      toast("Erro ao gravar estabelecimento", {
        type: "error",
        autoClose: 3000
      });
    }
  }

 return (
    <Container>
      <Form onSubmit={(e) => {
        e.preventDefault();
        onSubmit()
      }}>
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
          name='personResponibleFirstName'
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
        {/* <Map lat={coords[0]} long={coords[1]}/> */}

           < Map lat={coords[0]} long={coords[1]} /> 
        <ButtonContainer>
          <Button type='submit'>Salvar</Button>
        </ButtonContainer>
      </Form>
    </Container>
  )
}
