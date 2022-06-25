import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { Image } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";

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

  return (
    <>
      {data?.map((country) => {
        return (
          <React.Fragment key={country.name.common}>
            <Heading>{country.name.common}</Heading>
            <Image src={country.flags.png} alt={country.name.common} />
            <Heading as="h2" fontSize="24">
              Borders:{" "}
            </Heading>
            {country.borders?.map((border) => {
              return (
                <Flex align={"center"} flexDir="row">
                  <Link to={`/country/${border}`} key={border}>
                    {border}
                  </Link>
                </Flex>
              );
            })}
          </React.Fragment>
        );
      })}
    </>
  );
};

export default DetailCountry;
