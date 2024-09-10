'use client'
import Link from 'next/link'
import { Container, Title, SubTitle, LeftContainer, RightContainer, Button, ButtonBox, Image } from './styles'


export const HomePage = () => {
    return (
        <Container>
            <LeftContainer>
                <Title>O mapa Local de sua localização</Title>
                <SubTitle>Encontre no comércio local tudo o que precisa!</SubTitle>
                <Link href={'./register'} >
                    <Button>
                        <ButtonBox>{'>'}</ButtonBox>
                        Cadastre sua empresa
                    </Button>
                </Link>
            </LeftContainer>
            <RightContainer>
                <Image />
            </RightContainer>
        </Container>
    )
}
