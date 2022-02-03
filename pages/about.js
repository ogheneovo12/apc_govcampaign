import MainLayouts from "../layouts/MainLayouts";
import { Box, Container, Flex, Heading, Image, Text } from "@chakra-ui/react";
import PageHeader from "../components/PageHeader";

function AboutUs(props) {
  return (
    <Box>
      <PageHeader title={"About  Hon Dayo Akanmode"} />
      <Container py={"120px"} maxW="container.xl">
        <Heading textAlign={"center"} fontSize={["24px", "24px", "32px"]}>
          The Right Man for the Job
        </Heading>
        <Flex mt={"100px"}>
          <Box w={["100%", "100%", "50%"]} flexShrink={0}>
            <Image
              boxShadow={"0px 52px 54px rgba(65, 62, 101, 0.296766)"}
              background="#696871"
              borderRadius={"10px"}
              src="/about_prof.png"
              alt=""
            />
          </Box>
          <Box w={["100%", "100%", "50%"]}>
            <Text lineHeight={"28px"} fontSize={"14px"} color="#042552">
              Demonstration of strong commitment to poverty elimination and the
              attainment of self-sustaining Economy by mainstreaming employment
              generation and people empowerment into various policies and
              programmes, Demonstration of strong commitment to poverty
              elimination and the attainment of self-sustaining Economy by
              mainstreaming employment generation and people empowerment into
              various policies and programmes,Demonstration of strong commitment
              to poverty elimination and the attainment of self-sustaining
              Economy by mainstreaming employment generation and people
              empowerment into various policies and programmes,Demonstration of
              strong commitment to poverty elimination and the attainment of
              self-sustaining Economy by mainstreaming employment generation and
              people empowerment into various policies and programmes,
            </Text>
            <Text
              lineHeight={"28px"}
              mt={"60px"}
              fontSize={"14px"}
              color="#042552"
            >
              Demonstration of strong commitment to poverty elimination and the
              attainment of self-sustaining Economy by mainstreaming employment
              generation and people empowerment into various policies and
              programmes, Demonstration of strong commitment to poverty
              elimination and the attainment of self-sustaining Economy by
              mainstreaming employment generation and people empowerment into
              various policies and programmes,Demonstration of strong commitment
              to poverty elimination and the attainment of self-sustaining
              Economy by mainstreaming employment generation and people
              empowerment into various policies and programmes,Demonstration of
              strong commitment to poverty elimination and the attainment of
              self-sustaining Economy by mainstreaming employment generation and
              people empowerment into various policies and programmes,
            </Text>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}

AboutUs.propTypes = {};
AboutUs.layout = MainLayouts;

export default AboutUs;
