import { Box, Image } from "@chakra-ui/react";
import React from "react";

const Loading = () => {
  return (
    <Box
      display={"flex"}
      justifyContent="center"
      alignItems={"center"}
      mt={"180px"}
      ml={"400px"}
    >
      <Image src="https://i.gifer.com/YVPG.gif" w={"100%"} />
    </Box>
  );
};

export default Loading;
