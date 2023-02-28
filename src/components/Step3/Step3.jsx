import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Box, Divider, Stack } from '@chakra-ui/react';
import React from 'react';
import { BlackBadgeIcon, DamagedIcon, LostIcon, StolenIcon } from '../../assets/icons/SvgIcons';
import product1 from '../../assets/image/product-3.png'
import product2 from '../../assets/image/product-5.png'
import ClaimOptions from './ClaimOptions/ClaimOptions';
import ProductCard from './ProductCard';
import {AiOutlineMinus, AiOutlinePlus}from 'react-icons/ai'

const Step3 = () => {

    const products = [
        {
            id: '000001',
            img: product1,
            title: `Reflow - Lug sole, Combat boots`,
            options: [
                {
                    name: 'Lost',
                    id: '01',
                    icon: <LostIcon />
                },
                {
                    name: 'Stolen',
                    id: '02',
                    icon: <StolenIcon />
                },
                {
                    name: 'Damaged',
                    id: '03',
                    icon: <DamagedIcon />
                },
                {
                    name: 'No problem',
                    id: '05',
                    icon: <BlackBadgeIcon />
                },
            ]
        },
        {
            id: '000002',
            img: product2,
            title: `Reflow - Lug sole, Combat`,
            options: [
                {
                    id: '06',
                    name: 'Lost',
                    icon: <LostIcon />
                },
                {
                    name: 'Stolen',
                    id: '07',
                    icon: <StolenIcon />
                },
                {
                    name: 'Damaged',
                    id: '08',
                    icon: <DamagedIcon />
                },
                {
                    name: 'No problem',
                    id: '10',
                    icon: <BlackBadgeIcon />
                },
            ]
        },
    ]

    return (
        <Stack>
            <Divider color='#8888' />
            {
                products.map(product => <Stack key={product.id} spacing={4}>
                    <ProductCard product={product} />
                    <Accordion allowMultiple bg={' #F4F1EB'}>
                        <AccordionItem>
                            {({ isExpanded }) => (
                                <>
                                    <h2>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                               Select an issues
                                            </Box>
                                            {isExpanded ? (
                                                <AiOutlineMinus fontSize='12px' />
                                            ) : (
                                                <AiOutlinePlus fontSize='12px' />
                                            )}
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4} >
                                    <Stack direction='row' flexWrap='wrap' gap={2} alignItems='center' maxW='350px'>

                                        {
                                            product.options.map((data,i)=><ClaimOptions data={data} key={i} type={"radio"} identifier={product.title}  />)
                                        }
                                    </Stack>
                                       
                                    </AccordionPanel>
                                </>
                            )}
                        </AccordionItem>
                    </Accordion>

                </Stack>)
            }

        </Stack>
    );
};

export default Step3;