import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  Heading,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import PageHeader from "../components/PageHeader";
import MainLayouts from "../layouts/MainLayouts";

function ContactUs(props) {
  return (
    <Box>
      <PageHeader title={"Contact Me"} />
      <Container py="120px" maxW={"container.xl"}>
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
            Get in touch with us
          </Heading>
          <Text mt={"20px"} color={"#696871"}>
            Body content goes here for this heading body content goes here for
            this heading
          </Text>
          <Box mt={"120px"}>
            

            <FormControl mt={"10px"}>
              <Input
                _placeholder={{
                  fontSize: "16px",
                  lineHeight: "70px",
                  letterSpacing: "0.12421px",
                  color: "#000000",
                }}
                placeholder="Enter Name"
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
                placeholder="Enter Email Address"
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
                placeholder="Subject"
                height={"48px"}
              />
            </FormControl>
            <Textarea rows={10} size="lg" mt={"54px"} placeholder="Message..."></Textarea>
            <Flex mt={"30px"} justifyContent={"center"}>
              <Button
                color="#fff"
                backgroundColor={"#042552"}
                height={"58px"}
                width={"166px"}
                fontWeight={"normal"}
              >
                Send Message
              </Button>
            </Flex>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

ContactUs.propTypes = {};
ContactUs.layout = MainLayouts;

export default ContactUs;
