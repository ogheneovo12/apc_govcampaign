import MainLayouts from "../layouts/MainLayouts";
import { Box, Container, Flex, Heading, Image, Text } from "@chakra-ui/react";
import PageHeader from "../components/PageHeader";
import { CheckCircleIcon } from "@chakra-ui/icons";

function AboutUs(props) {
  return (
    <Box>
      <PageHeader title={"About  Hon Dayo Akanmode"} />
      <Container py={"120px"} maxW="container.xl">
        <Heading textAlign={"center"} fontSize={["24px", "24px", "32px"]}>
          The Right Man for the Job
        </Heading>
        <Flex
          flexDirection={["column", "column", "column", "row"]}
          mt={"100px"}
        >
          <Box w={["100%", "100%", "100%", "50%"]}>
            <Image
              boxShadow={"0px 52px 54px rgba(65, 62, 101, 0.296766)"}
              background="#696871"
              borderRadius={"10px"}
              src="/about_prof.png"
              alt=""
              mx={["auto", "auto", "auto", 0]}
            />
            <Text
              mt="80px"
              color={"#FD86BF"}
              fontFamily={"Pinyon Script;"}
              fontSize={"35px"}
            >
              Hon. Dayo Akanmode
            </Text>
          </Box>
          <Box w={["100%", "100%", "100%", "50%"]}>
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
      <Box minHeight={"385px"} backgroundImage={"url(/con_bg.png)"}>
        <Container maxW={"container.xl"}>
          <Flex
            minHeight={"385px"}
            alignItems={"center"}
            justifyContent={{ base: "space-evenly", md: "space-between" }}
            flexDirection={["column","column","row"]}
          >
            <Box maxW={"450px"}>
              <Heading textAlign={"center"} fontSize={["18px","18px","28px"]} color={"#fff"}>
                <CheckCircleIcon color="#01D2A1" mr="5" /> Vote for HON. DAYO
                AKANMODE
              </Heading>
            </Box>
            <Box maxW={"450px"}>
              <Heading textAlign={"center"} fontSize={["18px","18px","28px"]} color={"#fff"}>
                {" "}
                AS GOVERNOR OF KOGI STATE{" "}
              </Heading>
            </Box>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
}

AboutUs.propTypes = {};
AboutUs.layout = MainLayouts;

export default AboutUs;
