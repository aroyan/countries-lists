import { Box, useColorModeValue } from "@chakra-ui/react";
import ListOfCountries from "./ListOfCountries";

const Main = () => {
  const bgMain = useColorModeValue("#FAFAFA", "#202D36");
  return (
    <Box as="main" px={{ base: "1rem", md: "20" }} pt="12" bg={bgMain}>
      <ListOfCountries />
    </Box>
  );
};

export default Main;
