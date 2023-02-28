import { FormControl, Input, Stack } from '@chakra-ui/react';
import React from 'react';

const Step1 = ({register,setValidEmail}) => {
    return (
        <Stack spacing={4} >
        <FormControl bg={'rgba(23, 22, 26, 0.04)'} isRequired>
            <Input onKeyUp={(e)=>setValidEmail(e.target.value)} fontSize={'13px'} placeholder='Email Address' type='email' {...register("email",{required:'Please enter a valid email'})} />
        </FormControl>
        <FormControl bg={'rgba(23, 22, 26, 0.04)'} isRequired>
            <Input fontSize={'13px'} placeholder='Order Number' type='text' {...register("order", {required:true})} />
        </FormControl>
        </Stack>
    );
};

export default Step1;