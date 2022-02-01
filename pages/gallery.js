import { Box, Container, Heading } from "@chakra-ui/react";
import Gallery from "../components/Gallery/Gallery";
import MainLayouts from "../layouts/MainLayouts";

function GalleryPage(props) {
  return (
    <Box>
         <PageHeader title={"Gallery Page"} />
      <Container py="120px" maxW={"container.xl"}>
        <Heading mb={"20px"} textAlign={"center"}>Gallery Section</Heading>
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
  );
}

GalleryPage.propTypes = {};
GalleryPage.layout = MainLayouts;

export default GalleryPage;
