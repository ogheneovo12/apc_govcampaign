import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";

function Footer(props) {
  return (
    <>
      <Flex
        minHeight={"768px"}
        backgroundImage={
          "linear-gradient(to bottom, rgba(255,255,255, 0.5) 30%, transparent 70%),url(/footer_bg.png)"
        }
        backgroundSize={"cover"}
        backgroundPosition={"center"}
        flexDirection={"column"}
      >
        <Container py={"70px"} maxW={"container.xl"}>
          <Heading my={"20px"} textAlign={"center"}>
            Our Achievements so far
          </Heading>
          <Flex textAlign={"center"} justifyContent={"space-evenly"}>
            <Box>
              <Text fontWeight={"bold"} color="#F7A600" fontSize={"28px"}>
                10,250
              </Text>
              <Text fontWeight={"500"} color="#000" fontSize={"20px"}>
                Live Changed
              </Text>
            </Box>

            <Box>
              <Text fontWeight={"bold"} color="#F7A600" fontSize={"28px"}>
                10,250
              </Text>
              <Text fontWeight={"500"} color="#000" fontSize={"20px"}>
                Live Changed
              </Text>
            </Box>
            <Box>
              <Text fontWeight={"bold"} color="#F7A600" fontSize={"28px"}>
                10,250
              </Text>
              <Text fontWeight={"500"} color="#000" fontSize={"20px"}>
                Live Changed
              </Text>
            </Box>
          </Flex>
        </Container>
      </Flex>
      <Box
        color={"#fff"}
        mt="auto"
        minHeight={"74px"}
        backgroundColor={"#042552E5"}
      >
        <Container
          alignItems={"center"}
          justifyContent={{ base: "space-evenly", md: "space-between" }}
          flexWrap={"wrap"}
          as={Flex}
          maxW={"container.xl"}
          p={5}
        >
          <Box display={"flex"} alignItems={"center"}>
            <Image mr={"20px"} src="/party_logo.png" />
            <Text>APC Kogi State</Text>
          </Box>

          <HStack spacing={"10"} display={"flex"} alignItems={"center"}>
            <Text>Support</Text>
            <Text>Privacy Policy</Text>
            <Text>Terms and Conditions</Text>
          </HStack>

          <Box display={"flex"} alignItems={"center"}>
            <Text>© 2023 DevGurus, All Rights Reserved</Text>
          </Box>
        </Container>
      </Box>
    </>
  );
}

Footer.propTypes = {};

export default Footer;
