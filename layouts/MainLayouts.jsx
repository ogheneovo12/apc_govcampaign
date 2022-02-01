import { Box } from "@chakra-ui/react";
import Footer from "../components/Footer";
import Header from "../components/Header";

function MainLayouts({ children }) {
  return (
    <Box>
      <Header />
      <Box as="main">{children}</Box>
      <Footer />
    </Box>
  );
}

MainLayouts.propTypes = {};

export default MainLayouts;
