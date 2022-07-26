import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  Image,
  Heading,
  Flex,
  Text,
  Grid,
  GridItem,
  Button,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import axios from "axios";

const DetailCountry = () => {
  let { cca3 } = useParams();
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  const bg = useColorModeValue("#FAFAFA", "#202D36");
  const bgBadge = useColorModeValue("#f0f0f0", "#2B3743");

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `https://restcountries.com/v3.1/alpha/${cca3}`
      );
      setData(response.data);
    })();
  }, [cca3]);

  return (
    <Box bg={bg}>
      {data?.map((country) => {
        return (
          <React.Fragment key={country.name.common}>
            <Button
              mt="40px"
              mb="20px"
              onClick={() => navigate(-1)}
              leftIcon={<ArrowBackIcon />}
              ml={{ base: "8", lg: "16" }}
            >
              Back
            </Button>
            <Grid
              templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }}
              alignContent="start"
              justifyContent="center"
              height={{ lg: "calc(100vh - 120px)" }}
              p={{ base: "28px", md: "48px", lg: "0" }}
            >
              <GridItem mx="auto" my="auto">
                <Box boxShadow="2xl">
                  <Image src={country.flags.png} alt={country.name.common} />
                </Box>
              </GridItem>
              <GridItem>
                <Heading
                  mb="36px"
                  p="4"
                  fontSize="2rem"
                  as="h1"
                  textAlign={{ base: "c" }}
                >
                  {country.name.common}
                </Heading>
                <Flex gap="42px" mb="58px" flexWrap="wrap" p="4">
                  <Flex flexDir="column" gap="4">
                    <Box>
                      <Text display="inline" fontWeight="bold">
                        Native Name:{" "}
                      </Text>
                      {
                        country.name.nativeName[
                          Object.keys(country.name.nativeName)[0]
                        ].common
                      }
                    </Box>
                    <Box>
                      <Text display="inline" fontWeight="bold">
                        Population:{" "}
                      </Text>
                      {country.population.toLocaleString()}
                    </Box>
                    <Box>
                      <Text display="inline" fontWeight="bold">
                        Region:{" "}
                      </Text>
                      {country.region}
                    </Box>
                    <Box>
                      <Text display="inline" fontWeight="bold">
                        Sub Region:{" "}
                      </Text>
                      {country.subregion}
                    </Box>
                    <Box>
                      <Text display="inline" fontWeight="bold">
                        Capital:{" "}
                      </Text>
                      {country.capital}
                    </Box>
                  </Flex>
                  <Flex gap="4" flexDir="column">
                    <Box>
                      <Text display="inline" fontWeight="bold">
                        Top Level Domain:{" "}
                      </Text>
                      {country.tld}
                    </Box>
                    <Box>
                      <Text display="inline" fontWeight="bold">
                        Currencies:{" "}
                      </Text>
                      {
                        country.currencies[Object.keys(country.currencies)[0]]
                          .name
                      }
                    </Box>
                    <Box>
                      <Text display="inline" fontWeight="bold">
                        Languages:{" "}
                      </Text>
                      {Object.values(country.languages)
                        .map((lang) => lang)
                        .join(", ")}
                    </Box>
                  </Flex>
                </Flex>
                <Box>
                  <Text display="inline" fontWeight="bold" p="4">
                    Border Countries:
                  </Text>
                  {!country?.borders ? (
                    <Text p="4">This country doesn&apos;t have border</Text>
                  ) : (
                    country.borders?.map((border) => {
                      return (
                        <Link to={`/country/${border}`} key={border}>
                          <Text
                            display="inline"
                            bg={bgBadge}
                            px="3"
                            py="1"
                            borderRadius="4px"
                            mr="1"
                          >
                            {border}
                          </Text>
                        </Link>
                      );
                    })
                  )}
                </Box>
              </GridItem>
            </Grid>
          </React.Fragment>
        );
      })}
    </Box>
  );
};

export default DetailCountry;
