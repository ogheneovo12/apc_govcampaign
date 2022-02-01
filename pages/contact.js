import { Box } from "@chakra-ui/react";
import PageHeader from "../components/PageHeader";
import MainLayouts from "../layouts/MainLayouts";

function ContactUs(props) {
  return (
    <Box>
      <PageHeader title={"Contact Me"} />
    </Box>
  );
}

ContactUs.propTypes = {};
ContactUs.layout = MainLayouts;

export default ContactUs;
