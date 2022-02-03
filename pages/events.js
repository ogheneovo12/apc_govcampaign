import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import EventBox from "../components/EventBoxs/EventBox";
import PageHeader from "../components/PageHeader";
import MainLayouts from "../layouts/MainLayouts";

function Events(props) {
  return (
    <Box
      backgroundRepeat={"no-repeat"}
      backgroundPosition={"right top, right center, left center"}
      backgroundImage={
        "url(/dots.png),url(half_circ_r.png), url(/half_circ_l.png)"
      }
    >
      <PageHeader title={"Event Page"} />
      <Container py={"30px"} maxW={"container.xl"}>
        <Heading textAlign={"center"}>Featured Campaign</Heading>
        <Text color="#363333" mt={"26px"} mx="auto" maxW={"838px"} textAlign={"center"}>
          Sedac odio aliquet, fringilla odio eget, tincidunt nunc. Duis aliquet
          pulvinar ante tempor. Etiam lacus eros, viverra tempus, commodo
          fringilla nulla.
        </Text>
        <Flex mt={"70px"} flexWrap={"wrap"} justifyContent={"space-evenly"}>
          <EventBox />
          <EventBox />
          <EventBox />
          <EventBox />
          <EventBox />
          <EventBox />
        </Flex>
      </Container>
    </Box>
  );
}

Events.propTypes = {};
Events.layout = MainLayouts;

export default Events;
