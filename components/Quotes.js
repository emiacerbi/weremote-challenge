import { Box, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'

import Slider from "react-slick";


const Quotes = ({reviews}) => {
  const settings = {
    accessibility: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    fade: true,
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    speed: 500,
  };

  // const quotes = [
  //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  // ];

  return (

    <Box 
      ref={reviews}
      display='flex' 
      flexDirection='column'
      fontFamily="'Merriweather', serif" 
      height='400px' 
      justifyContent='center' 
      // marginY={10}
      margin='0 auto'
      maxWidth='650px'
      textAlign='center'
    >
      <Image alt='quotes' margin='0 auto' src='quotesIcon.svg' w={10} />
      <Stack margin={7}>
        <Slider {...settings}>
          <Box>
            <Text fontStyle='italic'>Me gustaría agradecer al sitio, me ayudó de una manera inimaginable, el psicólogo fue sumamente servicial y acogedor conmigo y me siento mejor conmigo mismo.</Text>
            <Text fontWeight={600} mb={0} mt={5}>~ Maria Montessori ~</Text>
          </Box>

          <Box>
            <Text fontStyle='italic'>Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam, sagittis est vehicula magna ante senectus aptent nunc placerat, arcu sapien vestibulum rutrum vel eu platea.</Text>
            <Text fontWeight={600} mb={2} mt={5}>~ Juan Perez ~</Text>
          </Box>

          <Box>
            <Text fontStyle='italic' mb={4}>Lorem ipsum dolor sit amet consectetur adipiscing elit phasellus condimentum, sociis dignissim maecenas penatibus orci vel cras id, ridiculus aptent curabitur nunc parturient egestas tellus curae.</Text>
            <Text fontWeight={600} mb={2} mt={5}>~ Carla Martinez ~</Text>
          </Box>
        </Slider>
      </Stack>
    </Box>
  )
}

export default Quotes
      
      