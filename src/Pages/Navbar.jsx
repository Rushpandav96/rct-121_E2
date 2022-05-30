import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <Box borderBottom="1px solid black" bg="black" textAlign="center">
      <Link to="/dashboard">
        <Text color="white">Click on dashbord to go dashboard</Text>
        <Text fontSize="30px" color="white">
          Dashboard
        </Text>
      </Link>
    </Box>
  );
};
