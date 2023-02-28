import React from 'react';
import { Card, CardBody, CardFooter, Heading, Image, Stack, Text } from '@chakra-ui/react';

const ProductCard = ({product}) => {
    const {img, title} = product
    return (
        <Card
        direction={{ base: 'column', sm: 'row' }}
        alignItems='start'
        overflow='hidden'
        boxShadow={'none'}
        bg='transparent'
        border='0px'
        p={3}
      >
        <Image
          objectFit='cover'
          maxW='100%'
          w={'130px'}
          h='130px'                                
          src={img}
          alt='Caffe Latte'
        />
      
        <Stack mt='0px'>
          <CardBody pt={{sm:3}} pb='0'>
            <Heading fontWeight={'600'} fontSize={{base:'13px',md:'15px'}}>{title}</Heading>
      
            <Text fontSize={{base:'12px',md:'13px'}} color='#828084' pt='2' fontWeight={'200'}>
              Variant: 399
            </Text>
            <Text color='#828084' pt='1px' fontSize={{base:'13px',md:'14px'}} fontWeight={'200'}>
            Quantity: 1 x 1
            </Text>
          </CardBody>
          <CardFooter py={'5px'}>
            <Text color='#000' fontSize={{base:'16px',md:'18px'}} fontWeight={'400'}>
            $65.00
            </Text>
       
          </CardFooter>
        </Stack>
      </Card>
    );
};

export default ProductCard;