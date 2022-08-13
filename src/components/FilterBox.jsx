import { Select } from "@chakra-ui/react";

const regions = ["africa", "americas", "asia", "europe", "oceania"];

const FilterBox = ({ setOptionUrl }) => {
  return (
    <Select
      w="200px"
      placeholder="Filter by Region"
      onChange={(e) => {
        if (e.target.value) {
          setOptionUrl(e.target.value);
        } else {
          setOptionUrl("");
        }
      }}
      boxShadow="sm"
    >
      {regions.map((region) => (
        <option key={region} value={region}>
          {`${region[0].toUpperCase()}${region.slice(1)}`}
        </option>
      ))}
    </Select>
  );
};

export default FilterBox;
