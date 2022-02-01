import { Box, Image } from "@chakra-ui/react";

function GalleryBox({ imageUrl, alt }) {
  return (
    <Box my={"20px"}>
      <Image width={357} minHeight={269} src={imageUrl} alt={alt} />
    </Box>
  );
}

GalleryBox.propTypes = {};

export default GalleryBox;
