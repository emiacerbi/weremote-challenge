import { Image, Link, Stack, Text } from '@chakra-ui/react'
import React, { useRef } from 'react'

const Footer = () => {

  return (
    <Stack 
      alignItems='center' 
      as='footer' 
      background='#265E6C' 
      color='#FFFFFF' 
      flexDirection='column' 
      fontFamily="'Merriweather', serif"
      fontSize={['sm', 'sm', 'sm' ]}
      gap={5}
      justifyContent='center'
      padding={5}
      paddingTop={10} 
    >
      <Stack 
        alignItems='center' 
        flexDirection={['column', 'column', 'row']} 
        gap={8} 
        justifyItems='center'
        >
        <Image alt='mcontigo logo' minWidth='250px' src='white.svg' />
        <Stack  maxWidth='68ch' opacity='.9' spacing={0} textAlign={['center', 'center', 'left']}>
          <Text>
            La Mente es Maravillosa is a property of Grupo MContigo 
          </Text>
          <Text>
            © 2012  2020. All rights reserved.
          </Text>
          <Text>
            Los contenidos de esta publicación se redactan solo con fines informativos. En ningún momento pueden servir para facilitar diagnósticos o sustituir la labor de un profesional. Le recomendamos que contacte con su especialista de confianza.
          </Text>
        </Stack>
      </Stack>

      <Stack 
        alignItems='center' 
        flexDirection={['column', 'column', 'column', 'row']} 
        
        gap={[3, 3, 3, 10]} 
        justifyContent='space-between' 
        spacing={0}
        textAlign='center'
      >
        <Link isExternal>Política de Cookies</Link>
        <Link>Política de Privacidad</Link>
        <Link>Términos y condiciones de uso</Link>
        <Link>Cláusula Informativa de Consentimiento </Link>

        
      </Stack>
    </Stack>
  )
}

export default Footer