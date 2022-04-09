import { Container } from '@chakra-ui/react'


import { useRef } from 'react'

import Faq from '../components/Faq';
import Footer from '../components/Footer';
import Form from '../components/Form';
import Header from '../components/Header';
import Main from '../components/Main';
import Quotes from '../components/Quotes';

export default function Home() {

  const home = useRef()
  const faq = useRef()
  const reviews = useRef()
  const contact = useRef()

  return (
    <Container 
      fontFamily="'Source Sans Pro', sans-serif" 
      justifyContent='center' 
      minHeight='100vh' 
      minWidth='100%'
      padding={0}
    >

      <Header   
        contact={contact}
        faq={faq}
        home={home}
        reviews={reviews}
      />
      <Main />
      <Faq faq={faq} />
      <Quotes reviews={reviews} />
      <Form contact={contact} />
      <Footer />

    </Container>
  )
}
