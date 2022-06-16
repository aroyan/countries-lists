import { Heading, Flex } from "@chakra-ui/react";
import ThemeButton from "./ThemeButton";

const Navbar = () => {
  return (
    <Flex
      as="nav"
      h="20"
      bg="#2B3743"
      w="full"
      justify="space-between"
      align="center"
      px="20"
    >
      <Heading as="h1" fontSize="24px" fontWeight="700">
        Where in the world?
      </Heading>
      <ThemeButton />
    </Flex>
  );
};

export default Navbar;
