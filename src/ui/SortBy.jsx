import Select from "./Select";
import useURL from "../hooks/useURL";

function SortBy({ options }) {
  const { getParam, setParam } = useURL();

  const sortBy = getParam("sortBy") || "";
  function handleChange(e) {
    setParam("sortBy", e.target.value);
  }
  return (
    <Select
      options={options}
      type="white"
      value={sortBy}
      onChange={handleChange}
    />
  );
}

export default SortBy;
