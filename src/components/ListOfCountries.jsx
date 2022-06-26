import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Flex, Center, Button, Input } from "@chakra-ui/react";
import axios from "axios";
import PreviewCard from "./PreviewCard";
import FilterBox from "./FilterBox";

const ListOfCountries = ({ cca3 }) => {
  const [data, setData] = useState(null);
  const [limit, setLimit] = useState(12);
  const [apiUrl, setApiUrl] = useState("https://restcountries.com/v3.1/all");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    (async () => {
      const response = await axios.get(apiUrl);
      setData(response.data.slice(0, limit));
    })();
  }, [limit, apiUrl]);

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
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            if (searchQuery === "") {
              setApiUrl("https://restcountries.com/v3.1/all");
            } else {
              setApiUrl(
                `https://restcountries.com/v3.1/name/${encodeURI(
                  searchQuery
                )}?fullText=true`
              );
            }
          }}
        />
        <FilterBox setApiUrl={setApiUrl} />
      </Flex>

      <Flex
        wrap="wrap"
        gap="1rem"
        align="center"
        justify={{ base: "center", md: "space-between" }}
        mt="12"
      >
        {data?.map((item, index) => {
          return (
            <Link to={`/country/${item.cca3}`} key={index}>
              <PreviewCard item={item} />
            </Link>
          );
        })}
      </Flex>
      <Center>
        <Button onClick={() => setLimit(limit + 12)} my="10">
          Load More
        </Button>
      </Center>
    </>
  );
};

export default ListOfCountries;
