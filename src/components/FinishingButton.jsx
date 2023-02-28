import { Button } from '@chakra-ui/react';
import React from 'react';
import { ArrowLeftIcon, RightArrowIcon } from '../assets/icons/SvgIcons';


const FinishingButton = ({children, onClick,type, icon, bgcolor}) => {
    return (
        <Button
      onClick={onClick}
      bg={bgcolor?bgcolor:'#000'}
      color='#fff'
      type={type?type:'button'}
      rightIcon={icon?<></>:<RightArrowIcon />}
      leftIcon={icon?<ArrowLeftIcon/>:<></>}
      colorScheme="#000"
      w={'full'}
      variant="solid"
      fontWeight="600"
      fontSize={'sm'}
    >
      {children}
    </Button>
    );
};

export default FinishingButton;