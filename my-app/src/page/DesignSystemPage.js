import React from 'react'
import {Box,Heading,Button} from '@chakra-ui/react'

function DesignSystemPage() {
    return (
        <Box>
            <Box bg ="primary.200" color="dodgerblue"  p="10" fontSize ="5xl" >
                Test Test Test
            </Box>
            <Box bg ="muted.300"p="5" borderRadius="xl">
                <Heading>Buttons</Heading>
                <Button colorScheme="blue" variant ="outline" size="sm">Size sm</Button>
                <Button colorScheme="red" variant="link" size="md">Size md</Button>
                <Button colorScheme="green" variant="solid" size="lg">Size lg</Button>
            </Box>
            <Box bg ="muted.300"p="5" borderRadius="xl">
                <Heading>Button Variant</Heading>
                <Button  variant = "primary" size="sm">Size sm</Button>
            </Box>
        </Box>
    )
}

export default DesignSystemPage
