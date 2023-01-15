import { Box, Container, Spinner } from "@chakra-ui/react";
import React from "react";

const Loading = () => {
  return (
    <Container
      height={"100vh"}
      width={"100vw"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="#13acbc"
          size="xl"
        />
      </Box>
    </Container>
  );
};

export default Loading;
