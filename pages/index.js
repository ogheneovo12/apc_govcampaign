import {
  AddIcon,
  ArrowForwardIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  MinusIcon,
} from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  background,
  Box,
  Button,
  Center,
  Container,
  Divider,
  Flex,
  Heading,
  HStack,
  Image,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/react";
import EventBox from "../components/EventBoxs/EventBox";
import Gallery from "../components/Gallery/Gallery";
import MainLayouts from "../layouts/MainLayouts";

const questions = [
  {
    title: "How can i vote for Hon. Dayo Akanmode",
    info: `answers and solutions to our most frequently received
  complaints and enquiries. We have compiled a list of
  frequently asked questions which offer answers We have
  compiled a list of frequently asked questions which offer
  answers and solutions to our most frequently received
  complaints and enquiries.`,
  },
  {
    title: "How to become a voluteer to this party?",
    info: `answers and solutions to our most frequently received
  complaints and enquiries. We have compiled a list of
  frequently asked questions which offer answers We have
  compiled a list of frequently asked questions which offer
  answers and solutions to our most frequently received
  complaints and enquiries.`,
  },
  {
    title: "How can i make donations ?",
    info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
  ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
  },
];

export default function Home() {
  return (
    <Box justifyContent={"center"} spaceBetween={"justify"}>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        textAlign={"center"}
        flexDirection={"column"}
        backgroundSize={"100% 100%"}
        backgroundPosition={"top"}
        backgroundRepeat={"no-repeat"}
        minHeight={["200px", "200px", "400px", "760px"]}
        bgImage={
          "linear-gradient(to bottom, rgba(52, 45, 45, 0.65), rgba(52, 45, 45, 0.65)),url(/HeroSlider.png)"
        }
        py={["20px"]}
        position={"relative"}
        zIndex={1}
      >
        <Container maxW={"container.md"}>
          <Heading
            my={["20px"]}
            color={"#fff"}
            fontSize={["17px", "17px", "20px", "40px"]}
          >
            HON. DAYO AKANMODE EXECUTIVE GOVERNOR OF KOGI STATE
          </Heading>
          <Text color={"#fff"} fontSize={["12px", "12px", "12px", "17px"]}>
            Body content goes here, body content goes here, body content goes
            here, body content goes here, body content goes here,{" "}
          </Text>
        </Container>
      </Box>
      <Box backgroundColor={"#FAFBFC"}>
        <Container
          boxShadow={"0px 0px 100px rgba(0, 0, 0, 0.1)"}
          backgroundColor={"#fff"}
          mt={"-140px"}
          Container
          maxW={"container.lg"}
          width={"90%"}
          borderRadius={"15px"}
          px={"15px"}
          py={"20px"}
          zIndex={2}
          position={"relative"}
        >
          <Heading textAlign={"center"} fontSize={"17px"}>
            We Can Turn kogi State around
          </Heading>
          <Flex
            justifyContent={["center", "center", "center", "space-around"]}
            alignItems={["center", "center", "center", "flex-start"]}
            flexDirection={["column", "column", "column", "row"]}
          >
            <MissionBox
              icon={"/icons/mission.png"}
              text={
                "Lorem ipsum dolor si amet, an dus situ  sint pertinacia consti "
              }
              title={"Our Mission"}
            />
            <MissionBox
              icon={"/icons/mission.png"}
              text={
                "Lorem ipsum dolor si amet, an dus situ  sint pertinacia consti "
              }
              title={"Our Mission"}
            />
            <MissionBox
              icon={"/icons/mission.png"}
              text={
                "Lorem ipsum dolor si amet, an dus situ  sint pertinacia consti "
              }
              title={"Our Mission"}
            />
          </Flex>
        </Container>
      </Box>
      <Box mt={20} backgroundColor={"#FAFBFC"}>
        <Container maxW={"container.xl"}>
          <Flex flexDirection={["column", "column", "column", "row"]}>
            <Box w={["100%", "100%", "100%", "50%"]}>
              <Image src="/contestant.png" />
            </Box>
            <Flex
              flexDirection={"column"}
              justifyContent={"center"}
              w={["100%", "100%", "100%", "50%"]}
            >
              <Heading lineHeight={"53px"} fontSize={["20px", "20px", "32px"]}>
                Our Stragtegy for an effective government
              </Heading>
              <Text color="#0D59EF" fontWeight={600} my={"25px"}>
                The recommended strategies include:{" "}
              </Text>
              <List spacing={3}>
                <ListItem
                  lineHeight={"28px"}
                  color={"#042552"}
                  fontSize={"14px"}
                  alignItems={"flex-start"}
                  as={Flex}
                >
                  <ListIcon as={CheckCircleIcon} color="#01D2A1" />
                  Demonstration of strong commitment to poverty elimination and
                  the attainment of self-sustaining Economy by mainstreaming
                  employment generation and people empowerment into various
                  policies and programmes,
                </ListItem>
                <ListItem
                  lineHeight={"28px"}
                  color={"#042552"}
                  fontSize={"14px"}
                  alignItems={"flex-start"}
                  as={Flex}
                >
                  <ListIcon as={CheckCircleIcon} color="#01D2A1" />
                  comprehensive overhaul of the machinery of government with a
                  view to redefining the role of government from being the main
                  player to catalyst and facilitator in the state's economy,
                </ListItem>
              </List>
            </Flex>
          </Flex>
        </Container>
      </Box>
      <Box py={"120px"}>
        <Container maxW={"container.xl"}>
          <Heading textAlign={"center"}>We Bring Hope to Kogi State</Heading>
          <Text mb={"100px"} textAlign={"center"}>
            Body content goes here for this heading body content goes here for
            this heading
          </Text>
          <Flex justifyContent={"center"}>
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
                  Everyone has their rights equally and we want to make sure
                  that people can get food, education, treatment and
                  accommodation for everyone who is living in poverty.
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
      <Box py={"120px"} backgroundColor={"#FAFBFC"}>
        <Container maxW={"container.xl"}>
          <Heading
            color="#042552"
            fontSize={["20px", "20px", "32px"]}
            textAlign={"center"}
          >
            Our Promises to Kogi State
          </Heading>
          <Text color={"#696871"} mb={"30px"} textAlign={"center"}>
            Body content goes here for this heading body content goes here for
            this heading
          </Text>
          <Flex
            justifyContent={"space-around"}
            // spacing={"20px"}
            flexWrap={"wrap"}
          >
            <Flex
              borderRadius={"10px"}
              alignItems={"center"}
              p={"20px"}
              my={"20px"}
              width={"100%"}
              maxW={"350px"}
              backgroundColor={"#fff"}
            >
              <CheckCircleIcon
                color="#299E27"
                height={"30px"}
                width={"30px"}
                mr="10px"
              />
              Good Roads & Electricity all over Kogi State
            </Flex>

            <Flex
              width={"100%"}
              maxW={"350px"}
              borderRadius={"10px"}
              alignItems={"center"}
              p={"20px"}
              my={"20px"}
              backgroundColor={"#fff"}
            >
              <CheckCircleIcon
                color="#299E27"
                height={"30px"}
                width={"30px"}
                mr="10px"
              />
              Good Roads & Electricity all over Kogi State
            </Flex>

            <Flex
              width={"100%"}
              maxW={"350px"}
              my={"20px"}
              borderRadius={"10px"}
              alignItems={"center"}
              p={"20px"}
              backgroundColor={"#fff"}
            >
              <CheckCircleIcon
                color="#299E27"
                height={"30px"}
                width={"30px"}
                mr="10px"
              />
              Good Roads & Electricity all over Kogi State
            </Flex>

            <Flex
              width={"100%"}
              maxW={"350px"}
              my={"20px"}
              borderRadius={"10px"}
              alignItems={"center"}
              p={"20px"}
              backgroundColor={"#fff"}
            >
              <CheckCircleIcon
                color="#299E27"
                height={"30px"}
                width={"30px"}
                mr="10px"
              />
              Good Roads & Electricity all over Kogi State
            </Flex>

            <Flex
              width={"100%"}
              maxW={"350px"}
              my={"20px"}
              borderRadius={"10px"}
              alignItems={"center"}
              p={"20px"}
              backgroundColor={"#fff"}
            >
              <CheckCircleIcon
                color="#299E27"
                height={"30px"}
                width={"30px"}
                mr="10px"
              />
              Good Roads & Electricity all over Kogi State
            </Flex>

            <Flex
              width={"100%"}
              maxW={"350px"}
              borderRadius={"10px"}
              alignItems={"center"}
              p={"20px"}
              my={"20px"}
              backgroundColor={"#fff"}
            >
              <CheckCircleIcon
                color="#299E27"
                height={"30px"}
                width={"30px"}
                mr="10px"
              />
              Good Roads & Electricity all over Kogi State
            </Flex>
            <Flex
              width={"100%"}
              maxW={"350px"}
              my={"20px"}
              borderRadius={"10px"}
              alignItems={"center"}
              p={"20px"}
              backgroundColor={"#fff"}
            >
              <CheckCircleIcon
                color="#299E27"
                height={"30px"}
                width={"30px"}
                mr="10px"
              />
              Good Roads & Electricity all over Kogi State
            </Flex>
          </Flex>
          <Flex mt={"70px"} justifyContent={"center"}>
            <Button
              borderRadius={"0px 20px 20px 20px"}
              height={"48px"}
              width="220px"
              bgColor={"#042552"}
              color="#fff"
              fontWeight={"400"}
            >
              Click here to donate
            </Button>
          </Flex>
        </Container>
      </Box>

      <Box
        py={"120px"}
        backgroundImage={"url(/beautiful-cities.png), url(/bg-shape.png)"}
      >
        <Heading textAlign={"center"} color="#fff">
          A quick overview of our promises
        </Heading>
        <Text mt={"20px"} textAlign={"center"} color="#fff">
          Create custom landing pages with Omega that converts more visitors
          than any website.
        </Text>
      </Box>
      <Box py={"120px"}>
        <Container maxW={"container.xl"}>
          <Heading textAlign={"center"}>Our Strategic Planning </Heading>
          <Text mb={"20px"} textAlign="center">
            Body content goes here for this heading body content goes here for
            this heading
          </Text>
          <Flex
            flexDirection={["column", "column", "column", "row"]}
            mt={"20px"}
          >
            <Box w={["100%", "100%", "100%", "50%"]} padding={"30px"}>
              <Image borderRadius={"20px"} src="/beautiful-cities-full.png" />
            </Box>
            <Box w={["100%", "100%", "100%", "50%"]}>
              <Heading textAlign={["center", "center", "center", "left"]}>
                Kogi State Strategic Development Blueprint
              </Heading>
              <Text my={"40px"}>
                Kogi State strategic development blueprint will serve as the
                state's overall planning document - to act as a guide for all
                state agencies as they develop plans, programs, and projects; to
                help state agencies establish priorities and allocate limited
                resources; to account for the plans of State, local government
                and agencies; and to reflect the vision of the state's citizens.
              </Text>
              <Button
                height={"48px"}
                width={"150px"}
                backgroundColor={"#042552"}
                color={"#fff"}
                fontWeight={"400"}
              >
                Learn more
              </Button>
            </Box>
          </Flex>
        </Container>
      </Box>

      <Box backgroundColor={"#FAFBFC"} py={"120px"}>
        <Container maxW={"container.xl"}>
          <Heading textAlign={"center"}>Featured Campaign</Heading>
          <Text mx={"auto"} maxW={"838px"} textAlign={"center"}>
            Sedac odio aliquet, fringilla odio eget, tincidunt nunc. Duis
            aliquet pulvinar ante tempor. Etiam lacus eros, viverra tempus,
            commodo fringilla nulla.
          </Text>
          <Flex mt={"70px"} flexWrap={"wrap"} justifyContent={"space-evenly"}>
            <EventBox />
            <EventBox />
            <EventBox />
            <EventBox />
            <EventBox />
            <EventBox />
          </Flex>
          <Flex justifyContent={"center"}>
            <Button
              color={"#fff"}
              borderRadius={"0px 20px 20px 20px;"}
              backgroundColor={"#042552"}
              fontWeight={"normal"}
            >
              View all
            </Button>
          </Flex>
        </Container>
      </Box>

      <Box py={"120px"}>
        <Container maxW={"container.xl"}>
          <Heading textAlign={"center"} fontSize={"32px"} mb={"20px"}>
            Gallery Section
          </Heading>
          <Gallery
            data={[
              {
                imageUrl: "/gallery/1.png",
                alt: "1 image",
              },
              {
                imageUrl: "/gallery/2.png",
                alt: "2 image ",
              },
              {
                imageUrl: "/gallery/3.png",
                alt: "3 image",
              },
              {
                imageUrl: "/gallery/1.png",
                alt: "1 image",
              },
              {
                imageUrl: "/gallery/2.png",
                alt: "2 image ",
              },
              {
                imageUrl: "/gallery/3.png",
                alt: "3 image",
              },
              {
                imageUrl: "/gallery/1.png",
                alt: "1 image",
              },
              {
                imageUrl: "/gallery/2.png",
                alt: "2 image ",
              },
              {
                imageUrl: "/gallery/3.png",
                alt: "3 image",
              },
            ]}
          />
        </Container>
      </Box>
      <Box minHeight={"385px"} backgroundImage={"url(/con_bg.png)"}>
        <Container maxW={"container.xl"}>
          <Flex
            minHeight={"385px"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Box maxW={"450px"}>
              <Heading textAlign={"center"} fontSize={"28px"} color={"#fff"}>
                <CheckCircleIcon color="#01D2A1" mr="5" /> Vote for HON. DAYO
                AKANMODE
              </Heading>
            </Box>
            <Box maxW={"450px"}>
              <Heading textAlign={"center"} fontSize={"28px"} color={"#fff"}>
                {" "}
                AS GOVERNOR OF KOGI STATE{" "}
              </Heading>
            </Box>
          </Flex>
        </Container>
      </Box>
      <Box py={"120px"}>
        <Container maxW={"container.xl"}>
          <Heading mb={"70px"} textAlign={"center"}>
            Frequently Asked Question
          </Heading>
          <Box
            minH={536}
            borderRadius={7}
            backgroundColor={"#fff"}
            boxShadow={"0px 4px 79px rgba(0, 0, 0, 0.06)"}
            margin={"0 auto"}
            maxW={1013}
            p={10}
          >
            <Accordion allowToggle>
              {questions?.map((quest, i) => (
                <AccordionItem key={`${quest?.title}${i}`}>
                  {({ isExpanded }) => (
                    <>
                      <h2
                        display={"flex"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                      >
                        <AccordionButton minHeight={"97px"}>
                          <Box fontSize={"20px"} flex="1" textAlign="left">
                            {i + 1}. {quest?.title}
                          </Box>
                          {isExpanded ? (
                            <MinusIcon fontSize="12px" />
                          ) : (
                            <AddIcon fontSize="12px" />
                          )}
                        </AccordionButton>
                      </h2>
                      <AccordionPanel fontSize={"16px"} pb={4}>
                        {quest?.info}
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>
              ))}
            </Accordion>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

function MissionBox({ icon, title, text }) {
  return (
    <Box maxW={"244px"} width={"100%"} my={"15px"} textAlign={"center"}>
      <Heading
        fontSize={"16px"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Image src={icon} />
        {title}
      </Heading>
      <Text my={"10px"} color={"#455880"} fontSize={"14px"}>
        {text}
      </Text>
      <Button
        boxShadow={"0px 4px 7px rgba(0, 0, 0, 0.05)"}
        backgroundColor={"#fff"}
        height={"32px"}
        width={"32px"}
        borderRadius={"100%"}
      >
        <ArrowForwardIcon />
      </Button>
    </Box>
  );
}

Home.layout = MainLayouts;
