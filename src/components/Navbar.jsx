import { Heading, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
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
      px={{ base: "1rem", md: "20" }}
    >
      <Link to="/">
        <Heading
          as="h1"
          fontSize={{ base: "14px", md: "24px" }}
          fontWeight="700"
        >
          Where in the world?
        </Heading>
      </Link>
      <ThemeButton />
    </Flex>
  );
};

export default Navbar;
