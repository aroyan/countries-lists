import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Image,
  Heading,
  Flex,
  Text,
  Grid,
  GridItem,
  Center,
  Box,
} from "@chakra-ui/react";
import axios from "axios";

const DetailCountry = () => {
  let { cca3 } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `https://restcountries.com/v3.1/alpha/${cca3}`
      );
      setData(response.data);
    })();
  }, [cca3]);
  // console.log(Object.keys(data[0]?.languages));

  return (
    <>
      {data?.map((country) => {
        return (
          <React.Fragment key={country.name.common}>
            <Grid
              templateColumns="repeat(2, 1fr)"
              placeContent="center"
              height="calc(100vh - 80px)"
            >
              <GridItem>
                <Center>
                  <Image src={country.flags.png} alt={country.name.common} />
                </Center>
              </GridItem>
              <GridItem>
                <Heading mb="9">{country.name.common}</Heading>
                <Flex gap="42px" mb="74px">
                  <Flex flexDir="column" gap="4">
                    <Text>
                      <Box display="inline" fontWeight="bold">
                        Native Name:{" "}
                      </Box>
                      {
                        country.name.nativeName[
                          Object.keys(country.name.nativeName)[0]
                        ].official
                      }
                    </Text>
                    <Text>
                      <Box display="inline" fontWeight="bold">
                        Population:{" "}
                      </Box>
                      {country.population.toLocaleString()}
                    </Text>
                    <Text>
                      <Box display="inline" fontWeight="bold">
                        Region:{" "}
                      </Box>
                      {country.region}
                    </Text>
                    <Text>
                      <Box display="inline" fontWeight="bold">
                        Sub Region:{" "}
                      </Box>
                      {country.subregion}
                    </Text>
                    <Text>
                      <Box display="inline" fontWeight="bold">
                        Capital:{" "}
                      </Box>
                      {country.capital}
                    </Text>
                  </Flex>
                  <Flex gap="4" flexDir="column">
                    <Text>
                      <Box display="inline" fontWeight="bold">
                        Top Level Domain:{" "}
                      </Box>
                      {country.tld}
                    </Text>
                    <Text>
                      <Box display="inline" fontWeight="bold">
                        Currencies:{" "}
                      </Box>
                      {
                        country.currencies[Object.keys(country.currencies)[0]]
                          .name
                      }
                    </Text>
                    <Text>
                      <Box display="inline" fontWeight="bold">
                        Languages:{" "}
                      </Box>
                      {Object.keys(country.languages).map(
                        (lang) => `${lang[0].toUpperCase()}${lang.slice(1)}, `
                      )}
                    </Text>
                  </Flex>
                </Flex>
                <Text>
                  <Box display="inline" fontWeight="bold">
                    Border Countries:{" "}
                  </Box>
                </Text>
                {!country?.borders ? (
                  <Text>This country doesn&apos;t have border</Text>
                ) : (
                  country.borders?.map((border) => {
                    return (
                      <Link to={`/country/${border}`} mr="2" key={border}>
                        {border}
                      </Link>
                    );
                  })
                )}
              </GridItem>
            </Grid>
          </React.Fragment>
        );
      })}
    </>
  );
};

export default DetailCountry;
