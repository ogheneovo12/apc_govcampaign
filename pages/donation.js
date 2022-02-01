import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  Flex,
  FormControl,
  Heading,
  HStack,
  Image,
  Input,
  Radio,
  RadioGroup,
  Text,
} from "@chakra-ui/react";
import PageHeader from "../components/PageHeader";
import MainLayouts from "../layouts/MainLayouts";

function Donation(props) {
  return (
    <Box>
        <PageHeader title={"Donation Page"} />
      <Container  py="120px" maxW={"container.xl"}>
        
        <Box 
        
          boxShadow={"0px 4px 100px rgba(0, 0, 0, 0.06);"}
          borderRadius={"15px"}
          mx="auto"
          maxW={"785px"}
          width="100%"
          backgroundColor={"#fff"}
          minHeight={"500px"}
          p={20}
        >
          <Heading
            justifyContent={"center"}
            textAlign={"center"}
            alignItems={"flex-start"}
            display={"flex"}
            fontSize={[20, 20, 32]}
            as="h3"
          >
            <Image src="/mini_logo.png" mr={"14px"} /> Small Donation Bigger
            Impact
          </Heading>
          <Text mt={"20px"} color={"#696871"}>
            Body content goes here for this heading body content goes here for
            this heading
          </Text>
          <Box mt={"120px"}>
            <Heading fontSize={[20, 20, 24]}>Your Donation</Heading>

            <FormControl mt={"10px"}>
              <Input
                _placeholder={{
                  fontSize: "16px",
                  lineHeight: "70px",
                  letterSpacing: "0.12421px",
                  color: "#000000",
                }}
                placeholder="Enter Amount"
                height={"48px"}
              />
            </FormControl>
            <FormControl mt={"54px"}>
              <Input
                _placeholder={{
                  fontSize: "16px",
                  lineHeight: "70px",
                  letterSpacing: "0.12421px",
                  color: "#000000",
                }}
                placeholder="Enter Your Name"
                height={"48px"}
              />
            </FormControl>
            <FormControl mt={"54px"}>
              <Input
                _placeholder={{
                  fontSize: "16px",
                  lineHeight: "70px",
                  letterSpacing: "0.12421px",
                  color: "#000000",
                }}
                placeholder="Enter your Email Address"
                height={"48px"}
              />
            </FormControl>
            <Heading mt="30px" fontSize={[20, 20, 24]}>
              {" "}
              Payment Method
            </Heading>
            <RadioGroup>
              <HStack spacing={"30px"} mt={"20px"}>
                <Radio>Pay with Card</Radio>
                <Radio>Pay with Transfer</Radio>
              </HStack>
            </RadioGroup>
            <Flex mt={"30px"} justifyContent={"center"}>
              <Button
                color="#fff"
                backgroundColor={"#042552"}
                height={"58px"}
                width={"166px"}
                fontWeight={"normal"}
              >
                Make Donation
              </Button>
            </Flex>
          </Box>
        </Box>
        <Flex py={"120px"} justifyContent={"center"}>
          <Flex
            flexDirection={["column", "column", "column", "row"]}
            alignItems={"center"}
          >
            <Box width={["100%"]} flexShrink={[0, 0, 0, 1]} zIndex={1}>
              <Image
                alt="picture of happy kids"
                width={["100%"]}
                src="/mission-goals.png"
              />
            </Box>
            <Box
              position={"relative"}
              zIndex={2}
              ml={[0, 0, 0, -50]}
              padding={[10, 10, 20]}
              boxShadow={"0px 4px 80px rgba(0, 0, 0, 0.08)"}
              minHeight={380}
              borderRadius={20}
              maxW={[688]}
              background={"#fff"}
            >
              <Heading
                alignItems={"flex-start"}
                display={"flex"}
                fontSize={[20, 20, 32]}
                as="h3"
              >
                <Image src="/mini_logo.png" mr={"14px"} /> All hands on deck,
                Kogi state need us now!!
              </Heading>
              <Text
                mt={"20px"}
                color={"#042552"}
                fontSize={14}
                lineHeight={"28px"}
              >
                Our mission is to make kogi state a better place for everyone.
                Everyone has their rights equally and we want to make sure that
                people can get food, education, treatment and accommodation for
                everyone who is living in poverty.
              </Text>
              <Flex flexWrap={"wrap"} mt={"20px"}>
                <Center height="30px">
                  <Text color="#042552" fontWeight={"500"} mx={2} as="span">
                    Education
                  </Text>
                  <Divider orientation="vertical" />
                </Center>
                <Center height="30px">
                  <Text color="#042552" fontWeight={"500"} mx={2} as="span">
                    Electricity
                  </Text>
                  <Divider orientation="vertical" />
                </Center>
                <Center height="30px">
                  <Text color="#042552" fontWeight={"500"} mx={2} as="span">
                    Water & Food
                  </Text>
                  <Divider orientation="vertical" />
                </Center>
                <Center height="30px">
                  <Text color="#042552" fontWeight={"500"} mx={2} as="span">
                    Security & Constructions
                  </Text>
                </Center>
              </Flex>
            </Box>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}

Donation.propTypes = {};
Donation.layout = MainLayouts;

export default Donation;
