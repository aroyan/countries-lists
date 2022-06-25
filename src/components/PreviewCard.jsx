import { Image, Text, Heading, Box } from "@chakra-ui/react";

function PreviewCard({ item }) {
  return (
    <Box
      as="article"
      h="21rem"
      w="16.5rem"
      bg="#2B3743"
      borderRadius="6px"
      boxShadow="lg"
      mb="18"
    >
      <Image
        src={`${item?.flags.svg}`}
        alt="flag"
        borderRadius="6px 6px 0 0"
        h="160px"
        w="264px"
        fit="cover"
      />
      <Box ml="24px" mt="28px">
        <Heading as="h2" fontSize="18px" fontWeight="bold">
          {item?.name.common}
        </Heading>
        <Box mt="14px" fontSize="14px">
          <Text>
            <Box as="span" fontWeight="bold">
              Population :
            </Box>{" "}
            {item?.population.toLocaleString()}
          </Text>
          <Text>
            <Box as="span" fontWeight="bold">
              Region :
            </Box>{" "}
            {item?.region}
          </Text>
          <Text>
            <Box as="span" fontWeight="bold">
              Capital :
            </Box>{" "}
            {item?.capital}
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default PreviewCard;
