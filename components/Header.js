import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Icon, Image, Link, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, useDisclosure } from '@chakra-ui/react'
import { FiMenu, FiSearch } from "react-icons/fi";

import React from 'react'

const Header = ({contact, home, reviews, faq}) => {

  const scrollToHome = () =>{
    home.current.scrollIntoView({behavior: 'smooth'});
  };
  
  const scrollToFaq = () =>{
    faq.current.scrollIntoView({behavior: 'smooth'});
  };
  
  const scrollToReviews = () =>{
    reviews.current.scrollIntoView({behavior: 'smooth'});
  };

  const scrollToContact = () =>{
    contact.current.scrollIntoView({behavior: 'smooth'});
  };

  const { isOpen, onOpen, onClose } = useDisclosure()


  return (
    <Box 
      ref={home} 
      alignItems='center' 
      as='header' 
      bg='#FFFFFF' 
      display='flex' 
      flexDirection='row'
      justifyContent='space-between'
      margin='0 auto'
      padding={[5, 5, 5, 7]}
    >

      <Image alt='logo' maxWidth='200px' src='logo.svg' w='40%' />

      {/* Wide Res Menu */}
      <Breadcrumb display={['none', 'none', 'block']} separator=' ' spacing={[5, 5, 8, 8]}>
        <BreadcrumbItem>
          <BreadcrumbLink as='button' onClick={scrollToHome}>Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink as='button' onClick={scrollToFaq}>FAQ</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink as='button' onClick={scrollToReviews}>Reseñas</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink as='button' onClick={scrollToContact}>Contacto</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      {/* Mobile Menu */}
      <Icon as={FiMenu} cursor='pointer' display={['block', 'block', 'none']} h={8} w={8} onClick={onOpen} />

      <Modal isOpen={isOpen} size='xs' onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody paddingY={10}>
            <Stack alignItems='center' display='flex' flexDirection='column' justifyContent='center' spacing={6} >
              <Link as='button' onClick={scrollToHome}>Home</Link>
              <Link as='button' onClick={scrollToFaq}>FAQ</Link>
              <Link as='button' onClick={scrollToReviews}>Reseñas</Link>
              <Link as='button' onClick={scrollToContact}>Contacto</Link>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  )
}

export default Header