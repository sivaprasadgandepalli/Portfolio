import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Box, Badge,Stack } from '@chakra-ui/react'
export default function Skills() {
    return (
        <div className='row mt-5'>
            <div className='col-md-4'>
                <Card bgColor="#2A2D6C" color="white" className='py-4 ps-4 mb-2'>
                    <header className=' text-white text-2xl mb-3'>Frontend</header>
                    <Stack direction='row' spacing='6px' mt='3'>
                        <Badge variant='outline' fontSize='1em' colorScheme='purple' className='py-1 px-2'>
                            HTML
                        </Badge>
                        <Badge variant='outline' fontSize='1em' colorScheme='purple' className='py-1 px-2'>
                            Css
                        </Badge>
                        <Badge variant='outline' fontSize='1em' colorScheme='purple' className='py-1 px-2'>
                            JavaScript
                        </Badge>
                    </Stack>
                    <Stack direction='row' spacing='6px' mt='3'>
                        <Badge variant='outline' fontSize='1em' colorScheme='purple' className='py-1 px-2'>
                            React Js
                        </Badge>
                        <Badge variant='outline' fontSize='1em' colorScheme='purple' className='py-1 px-2'>
                            Material ui
                        </Badge>
                    </Stack>
                    <Stack direction='row' spacing='10px' mt='3'>
                        <Badge variant='outline' fontSize='1em' colorScheme='purple' className='py-1 px-2'>
                            Bootstrap
                        </Badge>
                        <Badge variant='outline' fontSize='1em' colorScheme='purple' className='py-1 px-2'>
                            Tailwind Css
                        </Badge>
                    </Stack>
                </Card>
            </div>
            <div className='col-md-4'>
                <Card bgColor="#2A2D6C" color="white" className='p-4 mb-2'>
                    <header className=' text-white text-2xl mb-3'>Backend</header>
                    <Stack direction='row' spacing='6px' mt='3'>
                        <Badge variant='outline' fontSize='1em' colorScheme='purple' className='py-1 px-2'>
                            Node Js
                        </Badge>
                        <Badge variant='outline' fontSize='1em' colorScheme='purple' className='py-1 px-2'>
                            Express Js
                        </Badge>
                    </Stack>
                    <Stack direction='row' spacing='6px' mt='3'>
                        <Badge variant='outline' fontSize='1em' colorScheme='purple' className='py-1 px-2'>
                            My Sql
                        </Badge>
                        <Badge variant='outline' fontSize='1em' colorScheme='purple' className='py-1 px-2'>
                            Mongo DB
                        </Badge>
                    </Stack>
                    <Stack direction='row' spacing='10px' mt='3'>
                        <Badge variant='outline' fontSize='1em' colorScheme='purple' className='py-1 px-2'>
                            Python
                        </Badge>
                        <Badge variant='outline' fontSize='1em' colorScheme='purple' className='py-1 px-2'>
                            Java
                        </Badge>
                        <Badge variant='outline' fontSize='1em' colorScheme='purple' className='py-1 px-2'>
                            Cpp
                        </Badge>
                    </Stack>
                </Card>
            </div>
            <div className='col-md-4'>
                <Card bgColor="#2A2D6C" color="white" className='p-4 mb-2'>
                    <header className='text-white text-2xl mb-3'>Others</header>
                    <Stack direction='row' spacing='6px' mt='3'>
                        <Badge variant='outline' fontSize='1em' colorScheme='purple' className='py-1 px-2'>
                            Git
                        </Badge>
                        <Badge variant='outline' fontSize='1em' colorScheme='purple' className='py-1 px-2'>
                            Github
                        </Badge>

                    </Stack>
                    <Stack direction='row' spacing='6px' mt='3'>
                        <Badge variant='outline' fontSize='1em' colorScheme='purple' className='py-1 px-2'>
                            Vs code
                        </Badge>
                        <Badge variant='outline' fontSize='1em' colorScheme='purple' className='py-1 px-2'>
                            Postman
                        </Badge>
                    </Stack>
                </Card>
            </div>
        </div>
    )
}
