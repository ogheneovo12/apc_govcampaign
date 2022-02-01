import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import EventBox from "../components/EventBoxs/EventBox";
import PageHeader from "../components/PageHeader";
import MainLayouts from "../layouts/MainLayouts";

function Events(props) {
  return (
    <Box>
      <PageHeader title={"Event Page"} />
      <Container py={"30px"} maxW={"container.xl"}>
        <Heading textAlign={"center"}>Featured Campaign</Heading>
        <Text mx="auto" maxW={"838px"} textAlign={"center"}>
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
