import { useEffect, useState } from "react";
import { Flex, Center, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import PreviewCard from "./PreviewCard";
import axios from "axios";

const ListOfCountries = ({ cca3 }) => {
  const [data, setData] = useState(null);
  const [limit, setLimit] = useState(12);

  useEffect(() => {
    (async () => {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      setData(response.data.slice(0, limit));
    })();
  }, [limit]);

  return (
    <>
      <Flex wrap="wrap" gap="1rem" align="center" justify="center">
        {data?.map((item, index) => {
          return (
            <Link to={`/country/${cca3}`}>
              <PreviewCard key={index} item={item} />
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
