import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";

function EventBox(props) {
  return (
    <Box
      borderRadius={"8.86794px"}
      border={"0.886794px solid #EAE9F2;"}
      my={"20px"}
      maxW={"323px"}
      width={"100%"}
      p={"20px"}
    >
      <Image src="/flier.png" />
      <Heading  color={"#042552"} mt={"14px"} fontSize={"20px"}>
        Ote local government campaign
      </Heading>
      <Text my={"20px"}>
        Sedac odio aliquet, fringilla odio eget, tincidunt nunc. Duis aliquet
        pulvinar ante tempor. Etiam lacus eros, viverra tempus, commodo
        fringilla nulla.
      </Text>
      <Button width={"100%"}>Date: 10 - 12 November 2023</Button>
    </Box>
  );
}

EventBox.propTypes = {};

export default EventBox;
