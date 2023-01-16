import { Box, Heading, Text, Button, Link } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <Box mt={"150px"} textAlign="center" py={10} px={6}>
      <Heading
        fontSize="100px"
        display="inline-block"
        as="h1"
        bgGradient="linear( #08cf65, #2b3148)"
        backgroundClip="text"
      >
        404
      </Heading>
      <Text
        fontSize="40px"
        bgGradient="linear( #08cf65, #2b3148)"
        backgroundClip="text"
        mt={3}
        mb={2}
      >
        Page Not Found
      </Text>
      <Text
        color={"gray.500"}
        bgGradient="linear( #08cf65, #2b3148)"
        backgroundClip="text"
        mb={6}
      >
        The page you're looking for does not seem to exist
      </Text>
      <Link to="/">
        {" "}
        <Button
          onClick={() => navigate("/")}
          padding="24px"
          style={{ fontSize: "17px" }}
          display={{ base: "none", md: "inline-flex" }}
          fontSize={"sm"}
          fontWeight={600}
          color={"white"}
          bg={"#08cf65"}
          _hover={{
            bg: "grey",
            color: "white",
          }}
        >
          Home
        </Button>
      </Link>
    </Box>
  );
}
