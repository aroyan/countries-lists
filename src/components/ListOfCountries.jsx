import { useEffect, useState } from "react";
import { useDebounce } from "../hooks/useDebounce";
import { Link } from "react-router-dom";
import { Flex, Center, Button, Input } from "@chakra-ui/react";
import axios from "axios";
import PreviewCard from "./PreviewCard";
import FilterBox from "./FilterBox";

const ListOfCountries = ({ cca3 }) => {
  const [data, setData] = useState(null);
  const [dataLength, setDataLength] = useState(null);
  const [limit, setLimit] = useState(12);
  const [apiUrl, setApiUrl] = useState("https://restcountries.com/v3.1/all");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [optionUrl, setOptionUrl] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(apiUrl);
        setErrorMessage("");
        setDataLength(response.data.length);
        setData(response.data.slice(0, limit));
        if (searchQuery === "") {
          optionUrl
            ? setApiUrl(optionUrl)
            : setApiUrl("https://restcountries.com/v3.1/all");
        } else {
          setApiUrl(
            `https://restcountries.com/v3.1/name/${encodeURI(
              searchQuery
            )}?fullText=true`
          );
        }
      } catch (error) {
        setDataLength(0);
        setErrorMessage(
          `${searchQuery} is not found, plesase enter full name of country`
        );
        if (searchQuery === "") setApiUrl("https://restcountries.com/v3.1/all");
      }
    })();
  }, [limit, apiUrl, searchQuery, optionUrl]);

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
          onChange={useDebounce((e) => setSearchQuery(e.target.value), 700)}
        />
        <FilterBox setApiUrl={setApiUrl} setOptionUrl={setOptionUrl} />
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
      <Center>
        {dataLength < 12 || dataLength === limit ? null : (
          <Button onClick={() => setLimit(limit + 12)} my="10">
            Load More
          </Button>
        )}
      </Center>
    </>
  );
};

export default ListOfCountries;
