import React from 'react';
import { FormControl, Input, Stack, Text } from '@chakra-ui/react';

const Step2 = ({register}) => {
    return (
        <Stack spacing={4} >
        <FormControl bg={'rgba(23, 22, 26, 0.04)'} isRequired>
            <Input fontSize={'13px'} placeholder='OTP' type='text' {...register("otp",{ required: true})} />
        </FormControl>
        </Stack>
    );
};

export default Step2;