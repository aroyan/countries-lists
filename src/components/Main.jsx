import { Box } from "@chakra-ui/react";
import ListOfCountries from "./ListOfCountries";

const Main = () => {
  return (
    <Box as="main" px={{ base: "1rem", md: "20" }} mt="12">
      <ListOfCountries />
    </Box>
  );
};

export default Main;
