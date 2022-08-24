import { Heading,Text,Box } from "@chakra-ui/react";

function Error(){
    return (
        <Box>
            <Heading>Login Failed</Heading>
            <Text>Your email and password is incorrect.</Text>
            <Text>Please try again.</Text>
        </Box>
    )
}
export default Error