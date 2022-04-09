import { 
  Box, 
  IconButton, 
  Text,
  useBreakpointValue, 
} from '@chakra-ui/react'

import Slider from 'react-slick';

import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';

import React from 'react'

const settings = {
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  dots: false,
  fade: true,
  infinite: true,
  slidesToScroll: 1,
  slidesToShow: 1,
  speed: 500,
};

const Main = () => {
  
  const [slider, setSlider] = React.useState(null);
  
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '10px' });
  
  const cards = [
    'photo01.jpg',
    'photo02.jpg',
    'photo03.jpg',
    'photo04.jpg',
    'photo05.jpg',
  ];
  
  return (
    <Box 
      margin='0 auto'
    >

      <Box
        overflow='hidden'
        position='relative'
        width='full'
      >

        {/* Left Icon */}
        <IconButton
          aria-label="left-arrow"
          borderRadius="full"
          left={side}
          position="absolute"
          top={top}
          transform={'translate(0%, -50%)'}
          zIndex={2}
          onClick={() => slider?.slickPrev()}>
          <BiLeftArrowAlt />
        </IconButton>

        {/* Right Icon */}
        <IconButton
          aria-label="right-arrow"
          borderRadius="full"
          position="absolute"
          right={side}
          top={top}
          transform={'translate(0%, -50%)'}
          zIndex={2}
          onClick={() => slider?.slickNext()}>
          <BiRightArrowAlt />
        </IconButton>

        {/* Slider */}
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {cards.map((url, index) => (
            <Box
              key={index}
              backgroundImage={`url(${url})`}
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              height={['xl', 'xl', '2xl']}
              position="relative"
              // width='100%'
            />
          ))}
        </Slider>
      </Box>

      <Text bg='white'color='#7D7D7D' padding={5} textAlign='center'>Cuanto más duro trabajes, más suerte tendrás</Text>
    </Box>
  )
}

export default Main

 
