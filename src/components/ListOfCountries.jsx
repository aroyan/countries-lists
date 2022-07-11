import { useEffect, useState } from "react";
import { useDebounce } from "../hooks/useDebounce";
import { Link } from "react-router-dom";
import { Flex, Input } from "@chakra-ui/react";
import PreviewCard from "./PreviewCard";
import FilterBox from "./FilterBox";
import {
  useGetAllCountriesQuery,
  useGetCountryByFullNameQuery,
} from "../features/countries";

const ListOfCountries = ({ cca3 }) => {
  const [apiUrl, setApiUrl] = useState("https://restcountries.com/v3.1/all");
  const [searchQuery, setSearchQuery] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [optionUrl, setOptionUrl] = useState("");

  const { data } = useGetAllCountriesQuery();
  const { searchData } = useGetCountryByFullNameQuery(searchQuery);
  console.log(searchData);

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

      {searchData?.map((item, index) => {
        return <p>{item.cca3}</p>;
      })}
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
