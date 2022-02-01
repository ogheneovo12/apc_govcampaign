import { Flex } from "@chakra-ui/react";
import GalleryBox from "./GalleryBox";

function Gallery({ data }) {
  return (
    <Flex flexWrap={"wrap"} justifyContent={"space-evenly"}>
      {data?.length
        ? data?.map(({ imageUrl, alt }, i) => (
            <GalleryBox
              key={`gall_${i}_${imageUrl}`}
              imageUrl={imageUrl}
              alt={alt}
            />
          ))
        : null}
    </Flex>
  );
}

Gallery.propTypes = {};

export default Gallery;
