import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Heading } from '@chakra-ui/react'
import React from 'react'

const Faq = ({faq}) => {
  return (
    <Box  
      ref={faq}
      as='section' 
      bg='#FFFFFF' 
      display='flex' 
      flexDirection='column' 
      gap={5} 
      paddingX={5}
      paddingY={20}
    >
      <Heading color='#7D7D7D' fontSize='lg' fontWeight={400}  textAlign='center' >FAQ</Heading>

      <Accordion 
        allowMultiple 
        display='flex' 
        flexDirection='column' 
        gap={3} 
        margin='0 auto' 
        maxW={['none', '700px']} 
        minW={['100%', '100%', '100%', '1000px']}
      >
        <AccordionItem border='1px solid lightgray'>
          <h2>
            <AccordionButton>
              <Box flex='1' fontWeight={600} textAlign='left'>
                ¿Cuáles son los pasos para tomar una decisión?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis varius quam quisque id diam vel quam elementum pulvinar. In nibh mauris cursus mattis molestie a iaculis at erat. Eu consequat ac felis donec et odio. Eu nisl nunc mi ipsum faucibus vitae aliquet nec.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem border='1px solid lightgray'>
          <h2>
            <AccordionButton>
              <Box flex='1' fontWeight={600} textAlign='left'>
                ¿Cuáles son los pasos para tomar una decisión?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis varius quam quisque id diam vel quam elementum pulvinar. In nibh mauris cursus mattis molestie a iaculis at erat. Eu consequat ac felis donec et odio. Eu nisl nunc mi ipsum faucibus vitae aliquet nec.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem border='1px solid lightgray'>
          <h2>
            <AccordionButton>
              <Box flex='1' fontWeight={600} textAlign='left'>
                ¿Cuáles son los pasos para tomar una decisión?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis varius quam quisque id diam vel quam elementum pulvinar. In nibh mauris cursus mattis molestie a iaculis at erat. Eu consequat ac felis donec et odio. Eu nisl nunc mi ipsum faucibus vitae aliquet nec.
          </AccordionPanel>
        </AccordionItem>

      </Accordion>
    </Box>
  )
}

export default Faq