import { Flex, Image } from "@chakra-ui/react";
import Nav from "./Nav";

export default function Header(props) {
  return (
    <Flex
      boxShadow={" 0px 4px 60px rgba(0, 0, 0, 0.1)"}
      minHeight={"78px"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Nav />
    </Flex>
  );
}
