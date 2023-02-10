import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
  } from '@chakra-ui/react';
  
  
  export default function ProductCard( { 
    brand,
                description,
                name,
                price,
                 images,
                 strikeOfPrice
  }) {
    return (
      <Center py={12}>
        <Box
          role={'group'}
          p={6}
          maxW={'330px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}>
          <Box
            rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'230px'}
            
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 5,
              left: 0,
              backgroundImage: `url(images[0])`,
              filter: 'blur(15px)',
              zIndex: -1,
            }} 
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}>
            <Image
              rounded={'lg'}
              borderBottomRadius="20px"
              height={250}
              width={250}
              objectFit={'cover'}
              src={images[0]}
              m="30px"
              mt="10px"
              _hover={
                {
                    src:images[1]
                }
              }
               
              
            /> 
          </Box>
          <Stack pt={10} align={'center'}>
            <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
              {brand}
            </Text>
            <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
              {name}
            </Heading>
            <Stack direction={'row'} align={'center'}>
              <Text fontWeight={800} fontSize={'xl'}>
             price: ${price}
              </Text>
              <Text textDecoration={'line-through'} color={'gray.600'}>
            ${strikeOfPrice}
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Center>
    );
  }