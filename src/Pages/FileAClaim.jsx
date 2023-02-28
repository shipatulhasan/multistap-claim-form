import { Button, Card, CardBody, CardHeader, Container, Heading, Image, Stack, Text, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ArrowLeftIcon } from '../assets/icons/SvgIcons';
import logo from '../assets/image/navidiumlogo.png'
import FinishingButton from '../components/FinishingButton';
import Step1 from '../components/Step1';
import Step2 from '../components/Step2';
import Step3 from '../components/Step3/Step3';


const FileAClaim = () => {
    const [formStep, setFormStep] = useState(0)
    const [message, setMessage] = useState('Start by entering your order details.')
    const [success, setSuccess] = useState(false)
    const [validEmail,setValidEmail] = useState('')
    console.log(validEmail)
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors,isValid },
    } = useForm({
        mode: "onChange",
    });
    const validRegex = /^\S+@\S+\.\S+$/;

    const handleStepCompletion = () => {
 
        switch(formStep){
            case 0:
                if(isValid && validEmail.match(validRegex) ){
                    setFormStep(cur => cur + 1)
                }
                break
            case 1:
                if(isValid ){
                    setFormStep(cur => cur + 1)
                }
                break
            case 2:
                if(isValid){
                    setFormStep(cur => cur + 1)
                }
                break
            default:break
        }
        
    }

    const handleGoBackToPreviousStep = () => {
        setFormStep(cur => cur - 1)
    }
    const handleResolvedClaim = (data) => {
        console.log(data)
        setSuccess(true)
        reset()
        setFormStep(null)

    }
    const handleHome = () => {
        setFormStep(0)
        setSuccess(false)
    }
    useEffect(() => {

        if (formStep === 1) {
            setMessage(`We have sent you a code. Check your email and paste the code we sent.`)
        } else if (formStep === 2) {
            setMessage(`Let’s start by tracking down your order details.`)
        }
    }, [formStep])
    return (
        <Container textAlign={'start'} maxW={'container.xl'} bg='#f4f1eb' rounded={'md'} >

            <VStack alignItems={'center'} justifyContent='center' py={20} minH={'90vh'}>
                <Image src={logo} mb={4} />
                <Card variant={'outline'} border='0px' p={12} minH='450px' >
                    <CardHeader padding={0}>
                        <Stack maxW={{ base: '100%', md: '350px' }} spacing={2}>

                            <Heading maxW={{ base: '100%', md: '350px' }} color={'black'} fontSize={{ base: '25px', md: '30px' }} fontWeight='600'>{
                                !success ? `Resolve Shipping Problem` : `Your Claim Has Been Filed.`
                            }
                            </Heading>
                            <Text fontWeight='400' color='#000' fontSize='16px'>{
                                !success ? `Was your package lost, damaged or stolen while being shipped? Then let’s get it taken care of.` : `Amet nibh commodo pulvinar eleifend. Facilisi ut lorem at tellus. Est feugiat semper non ornare placerat sed a pharetra aliquam.`
                            }</Text>
                            {
                                !success && <Text fontWeight='600' color='#000' fontSize='16px'>{message}</Text>
                            }

                        </Stack>
                    </CardHeader>
                    <CardBody p={0} mt={5}>
                        {
                            !success &&  <form onSubmit={handleSubmit(handleResolvedClaim)}>
                            {
                                formStep >= 0 && <Stack spacing={3} display={formStep === 0 ? "block" : "none"}>
                                    <Step1 register={register} setValidEmail={setValidEmail} />
                                    <FinishingButton onClick={handleStepCompletion} >
                                        Next
                                    </FinishingButton>
                                </Stack>
                            }
                            {
                                formStep >= 1 && <Stack spacing={3} display={formStep === 1 ? "block" : "none"}>
                                    <Step2 register={register} />
                                    <FinishingButton onClick={handleStepCompletion} >
                                        Next
                                    </FinishingButton>
                                    <FinishingButton onClick={handleGoBackToPreviousStep} bgcolor={'#828084'} icon={<ArrowLeftIcon />}>
                                        Back
                                    </FinishingButton>

                                </Stack>
                            }
                            {
                                formStep >= 2 && <Stack spacing={3} display={formStep === 2 ? "block" : "none"}>
                                    <Step3 register={register} />
                                    <FinishingButton type={'submit'} >
                                        Submit claim
                                    </FinishingButton>
                                    <FinishingButton onClick={handleGoBackToPreviousStep} bgcolor={'#828084'} icon={<ArrowLeftIcon />}>
                                        Back
                                    </FinishingButton>

                                </Stack>
                            }

                        </form>
                        }
                       
                        {
                            success && <Stack spacing={3}>
                                <FinishingButton  >
                                    Edit
                                </FinishingButton>
                                <Button
                                    onClick={handleHome}
                                    bg='transparent'
                                    color='#000'
                                    colorScheme="#000"
                                    w={'full'}
                                    variant="solid"
                                    fontWeight="600"
                                    fontSize={'sm'}
                                >
                                    Home page
                                </Button>
                            </Stack>
                        }



                    </CardBody>
                </Card>
            </VStack>
        </Container>
    );
};

export default FileAClaim;
