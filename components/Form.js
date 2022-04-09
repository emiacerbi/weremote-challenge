import { 
  Button, 
  FormControl, 
  FormLabel, 
  Heading, 
  Input, 
  Spinner, 
  Stack 
} from '@chakra-ui/react'

import React, { useState } from 'react'

const Form = ({contact}) => {

  const [isSubmitting, setIsSubmitting] = useState(false)

  const [state, setState] = useState({
    email: "",
    firstName: "",
    lastName: "",
  })

  const handleInputChange = (event)  => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setState( (prevState) => {
      return {
        ...prevState,
        [name]: value
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    setIsSubmitting(true)
    setTimeout(() => {
      alert(
        `La información de contacto es la siguiente: 
      - Nombre: ${JSON.stringify(state.firstName)}
      - Apellido: ${JSON.stringify(state.lastName)}
      - Email: ${JSON.stringify(state.email)}
      Gracias por suscribirte!`)
      setIsSubmitting(false)
      setState({
        email: "",
        firstName: "",
        lastName: "",
      })
    }, 2000 )

  }
  
  return (
      
    <form
      ref={contact}
      onSubmit={handleSubmit} 
    >
      <FormControl 
        isRequired 
        display='flex' 
        flexDirection='column' 
        gap={10} 
        margin='0 auto' 
        maxW='400px'
        paddingBottom={36}
        paddingTop={20}
        paddingX={5}
      >
        <Heading fontFamily="'Source Sans Pro', sans-serif" fontSize='xl' textAlign='center'>Unite a nuestro newsletter</Heading>
        <Stack>
          <FormLabel htmlFor='first-name'>Nombre</FormLabel>
          <Input id='first-name' name='firstName' placeholder='First name' value={state.firstName} onChange={handleInputChange} />
        </Stack>

        <Stack>
          <FormLabel htmlFor='last-name'>Apellido</FormLabel>
          <Input id='last-name' name='lastName' placeholder='Last name' value={state.lastName} onChange={handleInputChange} />
        </Stack>

        <Stack>
          <FormLabel htmlFor='email'>E-Mail</FormLabel>
          <Input id='email' name='email' placeholder='Inserte su correo' value={state.email} onChange={handleInputChange}/>
        </Stack>

        <Button
          _hover={{opacity: '.8'}}
          bg='#696969'
          color='white'
          maxW='400px'
          mt={4}
          type='submit'
        >
          QUIERO LAS NOVEDADES!
          {isSubmitting ? <Spinner  ml={5} /> : null}
        </Button>
      </FormControl>
    </form>
  )
}

export default Form