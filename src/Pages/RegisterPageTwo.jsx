
import { Box, Button, Input, Text } from "@chakra-ui/react"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";



export const RegisterPageTwo = ()=>{
    const [ address, setAddress] = useState("");
    const [ number, setNumber] = useState("");
    const navigate = useNavigate();
   

    return (
        <Box border='1px solid black' margin='auto'textAlign='center' w='40%' p={5} mt={10} >
            <Text mb={5} > Registraion Form  -  Page 2</Text>
            <Input mb={5} placeholder="Enter your address" onChange={(e)=>{setAddress(e.target.value)}}></Input>
            <Input mb={5} placeholder="Enter your number" onChange={(e)=>{setNumber(e.target.value)}}></Input>
            <Link to='/rpg1'> Prev </Link>
            <Button ml={5} onClick={()=>{navigate('/private')}} >Submit</Button>
        </Box>
    )
}