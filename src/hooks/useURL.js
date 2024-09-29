import { useSearchParams } from "react-router-dom";

function useURL() {
  const [searchParams, setSearchParams] = useSearchParams();

  // Get the current value of the URL parameter.
  function getParam(param) {
    return searchParams.get(param);
  }
  function setParam(param, value) {
    searchParams.set(param, value);
    setSearchParams(searchParams); // Update the URL with the new searchParams.
  }

  return {
    getParam,
    setParam,
  };
}

export default useURL;
