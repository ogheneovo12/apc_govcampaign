import React from "react";

import { Container, Flex, Heading } from "@chakra-ui/react";

function PageHeader({ title }) {
  return (
    <Flex
      alignItems={"center"}
      justifyContent={"center"}
      backgroundImage={"url(/pgheader_bg.png)"}
      backgroundPosition={"center"}
      backgroundRepeat={"no-repeat"}
      backgroundSize={"cover"}
      minHeight={"300px"}
    >
      <Container maxW={"container.xl"}>
        <Heading color="#fff" textAlign={"center"}>
          {title}
        </Heading>
      </Container>
    </Flex>
  );
}

PageHeader.propTypes = {};

export default PageHeader;
