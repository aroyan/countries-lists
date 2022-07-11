import { useColorModeValue, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";

export default function ThemeButton() {
  const { toggleColorMode } = useColorMode();
  const icons = useColorModeValue(<MoonIcon />, <SunIcon />);
  const text = useColorModeValue("Dark Mode", "Light Mode");
  return (
    <Button
      leftIcon={icons}
      onClick={toggleColorMode}
      bg={"none"}
      _hover={{ bg: "none" }}
      _active={{ bg: "none" }}
      fontSize={{ base: "12px", md: "1rem" }}
      fontWeight="regular"
      p="0"
    >
      {text}
    </Button>
  );
}
