import { Select } from "@chakra-ui/react";

const regions = ["africa", "americas", "asia", "europe", "oceania"];
const apiUrl = "https://restcountries.com/v3.1/region/";

const FilterBox = ({ setApiUrl, setOptionUrl }) => {
  return (
    <Select
      w="200px"
      placeholder="Filter by Region"
      onChange={(e) => {
        if (e.target.value) {
          setApiUrl(e.target.value);
          setOptionUrl(e.target.value);
        } else {
          setApiUrl("https://restcountries.com/v3.1/all");
          setOptionUrl("");
        }
      }}
      boxShadow="sm"
    >
      {regions.map((region) => (
        <option
          key={region}
          value={`${apiUrl}${region}`}
        >{`${region[0].toUpperCase()}${region.slice(1)}`}</option>
      ))}
    </Select>
  );
};

export default FilterBox;
