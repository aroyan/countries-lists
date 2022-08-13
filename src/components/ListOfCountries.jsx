import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Flex, Input } from "@chakra-ui/react";
import PreviewCard from "./PreviewCard";
import FilterBox from "./FilterBox";

const ListOfCountries = ({ cca3 }) => {
  const [data, setData] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [optionUrl, setOptionUrl] = useState("");

  const apiUrl = "https://restcountries.com/v3.1/all";

  useEffect(() => {
    try {
      if (localStorage.getItem("countriesData")) {
        const result = JSON.parse(localStorage.getItem("countriesData"));
        searchQuery
          ? setData(
              result.filter((x) =>
                x.name.common.toLowerCase().includes(searchQuery.toLowerCase())
              )
            )
          : optionUrl
          ? setData(
              result.filter((x) =>
                x.region.toLowerCase().includes(optionUrl.toLowerCase())
              )
            )
          : setData(result);
        setErrorMessage("");
      } else
        (async () => {
          const res = await fetch(apiUrl);
          const data = await res.json();
          setData(data);
          localStorage.setItem("countriesData", JSON.stringify(data));
        })();
    } catch (error) {
      setErrorMessage(`Cannot get ${error}`);
    }
  }, [searchQuery, optionUrl]);

  return (
    <>
      <Flex
        justify={{ base: "start", md: "space-between" }}
        flexWrap="wrap"
        gap={{ base: "4", md: "0" }}
      >
        <Input
          type="search"
          placeholder="Search for a country..."
          maxW="480px"
          boxShadow="sm"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <FilterBox setOptionUrl={setOptionUrl} />
      </Flex>

      <Flex
        wrap="wrap"
        gap="1rem"
        align="center"
        justify={{ base: "center", md: "space-between" }}
        mt="12"
        pb="16"
      >
        {errorMessage ? (
          <p>{errorMessage}</p>
        ) : (
          data?.map((item, index) => {
            return (
              <Link to={`/country/${item.cca3}`} key={index}>
                <PreviewCard item={item} />
              </Link>
            );
          })
        )}
      </Flex>
    </>
  );
};

export default ListOfCountries;
