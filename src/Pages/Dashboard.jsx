import { Box, Flex } from "@chakra-ui/react"
import { Link } from "react-router-dom"

export const Dashboard = ()=>{

    return (
        <Box border='1px solid black' margin='auto'textAlign='center' mt={10} w='70%' p={5}>
           <Flex>
                {/* <Box border='1px solid black' textAlign='center' m={10} w='70%' p={5}>

                </Box> */}
                <Box margin = "auto" border='1px solid black' textAlign='center' m={10} w='70%' p={5}>
                    <Link to='/rpg1'> Go to Register</Link>
                </Box>
           </Flex>
        </Box>
    )
}

